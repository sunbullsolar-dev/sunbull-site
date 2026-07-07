import { reviews, social } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-0.5 text-sun-500" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.9a5.04 5.04 0 01-2.19 3.31v2.76h3.54c2.08-1.92 3.27-4.74 3.27-8.08z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.67l-3.54-2.76c-.98.66-2.23 1.06-3.74 1.06-2.87 0-5.3-1.94-6.17-4.55H2.18v2.84A11 11 0 0012 23z" />
      <path fill="#FBBC05" d="M5.83 14.08a6.6 6.6 0 010-4.16V7.08H2.18a11 11 0 000 9.84l3.65-2.84z" />
      <path fill="#EA4335" d="M12 4.96c1.62 0 3.07.56 4.21 1.65l3.14-3.14C17.45 1.66 14.96.66 12 .66A11 11 0 002.18 7.08l3.65 2.84C6.7 7.3 9.13 4.96 12 4.96z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-sun-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun-600">
            Real homeowner stories
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Real California homeowners. Real Google reviews.
          </h2>
        </div>

        {/* Horizontal snap-scroll on mobile; 3-up grid on desktop (4th wraps). */}
        <ul className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {reviews.map((r, i) => (
            <li
              key={r.name}
              className="reveal flex w-[85%] shrink-0 snap-center flex-col rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm sm:w-[60%] lg:w-auto"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <Stars />
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-700">
                  <GoogleGlyph className="h-4 w-4" />
                  via Google
                </span>
              </div>

              <blockquote className="mt-4 flex-1 text-ink-700">
                &ldquo;{r.text}&rdquo;
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-2 border-t border-ink-900/10 pt-4">
                <span className="text-sm font-semibold text-ink-900">{r.name}</span>
                {r.localGuide && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-sun-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-sun-700">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.4L12 15l-5.7 4 2.1-6.4-5.4-4h6.8L12 2z" />
                    </svg>
                    Local Guide
                  </span>
                )}
              </figcaption>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 text-center">
          <a
            href={social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-bold text-white transition hover:bg-ink-800 active:scale-[0.98]"
          >
            <GoogleGlyph className="h-5 w-5 [&_path]:fill-white" />
            Read all our reviews on Google
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
