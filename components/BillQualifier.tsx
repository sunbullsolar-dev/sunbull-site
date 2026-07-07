"use client";

import { useState } from "react";
import { billRangesShort, utilities } from "@/lib/site";

/**
 * Front-of-funnel qualifier: three low-friction taps (bill → utility → zip)
 * that get the visitor invested *before* the lead form. It deliberately does
 * NOT show an estimated-savings figure (compliance: no savings claims, and we
 * don't fabricate numbers). On finish it stashes the answers and hands off to
 * the lead form, which pre-fills and scrolls into view.
 */

const TOTAL = 3;

export function BillQualifier() {
  const [step, setStep] = useState(0);
  const [bill, setBill] = useState("");
  const [utility, setUtility] = useState("");
  const [zip, setZip] = useState("");

  function pickBill(v: string) {
    setBill(v);
    setStep(1);
  }
  function pickUtility(v: string) {
    setUtility(v);
    setStep(2);
  }

  const zipValid = /^\d{5}$/.test(zip);

  function finish() {
    if (!zipValid) return;
    // Hand off to the lead form: persist + broadcast, then scroll to it.
    const detail = { billRange: bill, utility, zip };
    try {
      sessionStorage.setItem("sunbull:qualifier", JSON.stringify(detail));
    } catch {
      /* private mode — fine, the event still carries the data */
    }
    window.dispatchEvent(new CustomEvent("sunbull:qualifier", { detail }));
    const form = document.getElementById("lead-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      document.querySelector<HTMLInputElement>("#lead-form input[name=name]")?.focus();
    }, 600);
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-ink-900/10 bg-white p-6 shadow-xl shadow-ink-900/5 sm:p-8">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= step ? "bg-sun-500" : "bg-ink-900/10"
            }`}
          />
        ))}
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-sun-600">
        Quick check · Step {Math.min(step + 1, TOTAL)} of {TOTAL}
      </p>

      {/* Step 1 — average bill */}
      {step === 0 && (
        <div className="mt-4">
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
            What&apos;s your average electric bill?
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {billRangesShort.map((b) => (
              <button
                key={b.value}
                type="button"
                onClick={() => pickBill(b.value)}
                className={`rounded-xl border px-5 py-4 text-left font-semibold transition hover:border-sun-400 hover:bg-sun-50 ${
                  bill === b.value
                    ? "border-sun-500 bg-sun-50 text-ink-900"
                    : "border-ink-900/15 text-ink-800"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — utility */}
      {step === 1 && (
        <div className="mt-4">
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
            Who&apos;s your utility?
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {utilities.map((u) => (
              <button
                key={u.value}
                type="button"
                onClick={() => pickUtility(u.value)}
                className={`rounded-xl border px-5 py-4 text-left font-semibold transition hover:border-sun-400 hover:bg-sun-50 ${
                  utility === u.value
                    ? "border-sun-500 bg-sun-50 text-ink-900"
                    : "border-ink-900/15 text-ink-800"
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="mt-5 text-sm font-semibold text-ink-700 underline-offset-2 hover:underline"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3 — zip */}
      {step === 2 && (
        <div className="mt-4">
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
            What&apos;s your ZIP code?
          </h3>
          <p className="mt-2 text-sm text-ink-700">
            So we can check what&apos;s available in your area.
          </p>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
            onKeyDown={(e) => e.key === "Enter" && finish()}
            placeholder="91344"
            aria-label="ZIP code"
            className="mt-4 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-lg tracking-widest text-ink-900 placeholder:text-ink-700/40 focus:border-sun-500 focus:outline-none focus:ring-2 focus:ring-sun-500/30"
          />
          <button
            type="button"
            onClick={finish}
            disabled={!zipValid}
            className="mt-5 w-full rounded-full bg-sun-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-sun-500/30 transition hover:bg-sun-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            See My Solar Options
          </button>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-4 block text-sm font-semibold text-ink-700 underline-offset-2 hover:underline"
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
