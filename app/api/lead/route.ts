import { NextResponse } from "next/server";

/**
 * ──────────────────────────────────────────────────────────────────
 * LEAD ENDPOINT → monday.com
 * ──────────────────────────────────────────────────────────────────
 * Validates the consultation form and creates an item on the
 * "Sunbull Web Leads" monday board.
 *
 * IMPORTANT — never lose a lead: if the monday call fails (or env vars
 * are missing), we LOG the failure server-side but still return success
 * to the visitor. We never block the user on a downstream error.
 *
 * Required environment variables (see .env.example / README):
 *   MONDAY_API_TOKEN  — your monday personal/API token (secret)
 *   MONDAY_BOARD_ID   — the board id (18416212537)
 *
 * TODO (after deploy): SMS + email alerts plug in inside
 * `notifyTeam()` below — it runs on every successful submission.
 */

export const runtime = "nodejs";

const MONDAY_API_URL = "https://api.monday.com/v2";

// monday column IDs for the "Sunbull Web Leads" board.
const COLUMNS = {
  phone: "phone_mm3zcjq4",
  email: "email_mm3zkqm9",
  address: "text_mm3z3vdr",
  dateReceived: "date_mm3z1tzm",
  language: "color_mm3zc626",
  billRange: "color_mm3z4dnn",
  status: "color_mm3zm98v",
} as const;

// Map the form's <select> values to the exact monday status labels.
const LANGUAGE_LABELS: Record<string, string> = {
  english: "English",
  spanish: "Spanish",
  armenian: "Armenian",
  persian: "Persian",
};

const BILL_LABELS: Record<string, string> = {
  "under-100": "Under $100",
  "100-200": "$100 – $200",
  "200-300": "$200 – $300",
  "300-400": "$300 – $400",
  "over-400": "Over $400",
  "not-sure": "Not sure",
};

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  language?: string;
  billRange?: string;
  // Optional — captured by the front-of-funnel qualifier. The board has no
  // dedicated columns, so these get appended to the address note below.
  utility?: string;
  zip?: string;
};

// Map qualifier <select> values to readable labels for the address note.
const UTILITY_LABELS: Record<string, string> = {
  ladwp: "LADWP",
  sce: "SCE",
  glendale: "Glendale (GWP)",
  bwp: "Burbank (BWP)",
  other: "Other / Not sure",
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // ── Validation (unchanged) ──────────────────────────────────────
  const required: (keyof LeadPayload)[] = ["name", "phone", "email", "address", "language", "billRange"];
  const missing = required.filter((k) => !body[k] || String(body[k]).trim() === "");
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required field(s): ${missing.join(", ")}` },
      { status: 422 },
    );
  }

  // Diagnostic: confirms (without leaking the token) whether env vars are
  // visible to THIS deployment. Remove once monday delivery is confirmed.
  console.log("[LEAD] env check:", {
    hasToken: Boolean(process.env.MONDAY_API_TOKEN),
    tokenLength: process.env.MONDAY_API_TOKEN?.length ?? 0,
    boardId: process.env.MONDAY_BOARD_ID ?? "(unset)",
  });

  // ── Deliver to monday (best-effort; never block the user) ───────
  try {
    await createMondayLead(body);
    await notifyTeam(body); // TODO: SMS/email alerts plug in here.
    console.log("[LEAD] Delivered to monday.com successfully.");
  } catch (err) {
    // Swallow the error for the visitor, but make it loud in the logs.
    console.error("[LEAD] Failed to deliver to monday.com — lead NOT lost, logging payload:", {
      error: err instanceof Error ? err.message : String(err),
      lead: body,
    });
  }

  return NextResponse.json({ ok: true });
}

async function createMondayLead(lead: LeadPayload): Promise<void> {
  const token = process.env.MONDAY_API_TOKEN;
  const boardId = process.env.MONDAY_BOARD_ID;

  if (!token || !boardId) {
    const missingVars = [
      !token ? "MONDAY_API_TOKEN" : null,
      !boardId ? "MONDAY_BOARD_ID" : null,
    ].filter(Boolean);
    throw new Error(
      `Missing env var(s): ${missingVars.join(", ")} — not set for this deployment. ` +
        "Add them in Vercel → Settings → Environment Variables, then REDEPLOY.",
    );
  }

  const { date, time } = nowUtcForMonday();

  // Fold the qualifier answers into the address note (no dedicated columns).
  const extras = [
    lead.utility ? `Utility: ${UTILITY_LABELS[lead.utility] ?? lead.utility}` : null,
    lead.zip ? `ZIP: ${lead.zip}` : null,
  ].filter(Boolean);
  const addressNote = extras.length
    ? `${lead.address!}  •  ${extras.join("  •  ")}`
    : lead.address!;

  const columnValues: Record<string, unknown> = {
    [COLUMNS.phone]: { phone: digits(lead.phone!), countryShortName: "US" },
    [COLUMNS.email]: { email: lead.email!, text: lead.email! },
    [COLUMNS.address]: addressNote,
    [COLUMNS.dateReceived]: { date, time },
    [COLUMNS.status]: { label: "New" },
  };

  const languageLabel = LANGUAGE_LABELS[lead.language!];
  if (languageLabel) columnValues[COLUMNS.language] = { label: languageLabel };

  const billLabel = BILL_LABELS[lead.billRange!];
  if (billLabel) columnValues[COLUMNS.billRange] = { label: billLabel };

  const query = `
    mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
      create_item(
        board_id: $boardId,
        item_name: $itemName,
        column_values: $columnValues
      ) { id }
    }`;

  const res = await fetch(MONDAY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "API-Version": "2024-10",
    },
    body: JSON.stringify({
      query,
      variables: {
        boardId,
        itemName: lead.name!.trim(),
        columnValues: JSON.stringify(columnValues),
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`monday API HTTP ${res.status}: ${await res.text()}`);
  }

  // monday returns 200 even for GraphQL errors — inspect the body.
  const json = (await res.json()) as { data?: unknown; errors?: { message: string }[] };
  if (json.errors?.length) {
    throw new Error(`monday GraphQL error: ${json.errors.map((e) => e.message).join("; ")}`);
  }
}

/**
 * Team alerts (SMS + email) — wire up AFTER deploy.
 * Runs only after a lead is successfully created on monday.
 * Add e.g. Twilio (SMS) and Resend (email) calls here, reading their
 * keys from env vars. Kept separate so a notification failure can't
 * affect the monday write above.
 */
async function notifyTeam(_lead: LeadPayload): Promise<void> {
  // TODO: send SMS (e.g. Twilio) + email (e.g. Resend) to the team.
  return;
}

function digits(s: string): string {
  return s.replace(/\D/g, "");
}

/**
 * Submission timestamp for monday's date column. monday stores the time as
 * UTC and converts it to the account's timezone for display, so we send the
 * true UTC instant (it will render correctly in your Pacific-time account).
 */
function nowUtcForMonday(): { date: string; time: string } {
  const iso = new Date().toISOString(); // e.g. "2026-06-03T20:05:42.123Z"
  return { date: iso.slice(0, 10), time: iso.slice(11, 19) };
}
