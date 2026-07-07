"use client";

import { useEffect, useState } from "react";
import { languages, billRanges, utilities, site } from "@/lib/site";
import { CallButton } from "./CTAButtons";

type Status = "idle" | "submitting" | "success" | "error";

type QualifierAnswers = { billRange?: string; utility?: string; zip?: string };

const utilityLabel = (v: string) =>
  utilities.find((u) => u.value === v)?.label ?? "";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-700/40 focus:border-sun-500 focus:outline-none focus:ring-2 focus:ring-sun-500/30";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  // Pre-filled by the BillQualifier hand-off (sessionStorage on mount + a live
  // event if the visitor finishes the qualifier after the form has mounted).
  const [bill, setBill] = useState("");
  const [utility, setUtility] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    const apply = (a: QualifierAnswers) => {
      if (a.billRange) setBill(a.billRange);
      if (a.utility) setUtility(a.utility);
      if (a.zip) setZip(a.zip);
    };
    try {
      const raw = sessionStorage.getItem("sunbull:qualifier");
      if (raw) apply(JSON.parse(raw));
    } catch {
      /* ignore unavailable/corrupt storage */
    }
    const onQualify = (e: Event) =>
      apply((e as CustomEvent<QualifierAnswers>).detail ?? {});
    window.addEventListener("sunbull:qualifier", onQualify);
    return () => window.removeEventListener("sunbull:qualifier", onQualify);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Something went wrong. Please call us at " + site.phoneDisplay + ".",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink-900">
          Thank you — we&apos;ll be in touch!
        </h3>
        <p className="mt-2 text-ink-700">
          A local Sunbull team member will reach out shortly to schedule your
          free bill review.
        </p>
        <p className="mt-4 text-sm text-ink-700">
          Prefer to talk now? <a href={site.phoneHref} className="font-bold text-sun-600 underline">{site.phoneDisplay}</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink-900">
          Full name
          <input name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" placeholder="(818) 555-0123" className={fieldClass} />
        </label>
      </div>

      <label className="block text-sm font-semibold text-ink-900">
        Email
        <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={fieldClass} />
      </label>

      <label className="block text-sm font-semibold text-ink-900">
        Home address
        <input name="address" type="text" required autoComplete="street-address" placeholder="Street, City, ZIP" className={fieldClass} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink-900">
          Preferred language
          <select name="language" required defaultValue="" className={fieldClass}>
            <option value="" disabled>Select…</option>
            {languages.map((l) => (
              <option key={l.value} value={l.value}>{l.label}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Current monthly bill
          <select
            name="billRange"
            required
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>Select a range…</option>
            {billRanges.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Carried over from the quick check (no monday schema change — appended
          to the address note server-side). */}
      <input type="hidden" name="utility" value={utility} />
      <input type="hidden" name="zip" value={zip} />

      {(utility || zip) && (
        <p className="rounded-lg bg-sun-50 px-4 py-2.5 text-sm text-ink-700">
          From your quick check:{" "}
          <span className="font-semibold text-ink-900">
            {[utilityLabel(utility), zip].filter(Boolean).join(" · ")}
          </span>
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-sun-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-sun-500/30 transition hover:bg-sun-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Get My Free Bill Review"}
      </button>

      <p className="text-center text-xs text-ink-700">
        By submitting, you agree to be contacted about your free consultation.
        No obligation. We respect your privacy.
      </p>

      <div className="flex items-center justify-center gap-2 pt-1 text-sm text-ink-700">
        <span>Prefer to call?</span>
        <CallButton variant="outline" className="px-4 py-2 text-sm" />
      </div>
    </form>
  );
}
