import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="bg-sun-50/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun-600">
            Questions, answered
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-ink-900/10 bg-white px-5 py-4 transition open:shadow-md open:shadow-ink-900/5 [&_summary]:list-none"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink-900">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sun-100 text-sun-600 transition group-open:rotate-45"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-ink-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
