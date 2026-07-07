import { LeadForm } from "./LeadForm";
import { BillQualifier } from "./BillQualifier";

export function Consultation() {
  return (
    <section id="consultation" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Low-friction qualifier first — get them invested before the form. */}
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun-600">
            Start here · 20 seconds
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            See your solar options in three quick taps
          </h2>
        </div>
        <div className="reveal mb-20">
          <BillQualifier />
        </div>

        <div id="lead-form" className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-sun-600">
              Free consultation
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Find out what you&apos;re really paying — and what you could be paying instead
            </h2>
            <p className="mt-5 text-lg text-ink-700">
              Share a few details and a local Sunbull team member will reach out
              to schedule your free, no-pressure bill review. We&apos;ll walk you
              through your bill and your options in plain language.
            </p>
            <ul className="mt-7 space-y-3 text-ink-700">
              {[
                "100% free, with no obligation",
                "Talk to a local team — English, Spanish, Armenian, or Persian",
                "A clear read on your bill — what you're paying and why",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun-100 text-sun-600">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl border border-ink-900/10 bg-sun-50/40 p-6 shadow-xl shadow-ink-900/5 sm:p-8" style={{ transitionDelay: "120ms" }}>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
