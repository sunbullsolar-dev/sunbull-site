import { utilityGuides } from "@/lib/site";

function Bullet() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-sun-500" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UtilityGuides() {
  return (
    <section id="utilities" className="bg-sun-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun-600">
            Know your utility
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Where you are changes everything
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            LADWP and Glendale customers still have some of the best net metering
            in California. SCE and Burbank customers do better with a
            battery-focused design. We read these bills every day — here&apos;s
            what actually matters for your home.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {utilityGuides.map((g, i) => (
            <div
              key={g.code}
              className="reveal rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm transition hover:border-sun-300 hover:shadow-lg hover:shadow-sun-500/10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-lg bg-sun-100 px-3 py-1.5 font-display text-sm font-extrabold tracking-wide text-sun-700">
                  {g.code}
                </span>
                <h3 className="text-lg font-bold text-ink-900">{g.name}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {g.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-ink-700">
                    <Bullet />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-8 max-w-3xl text-center text-sm text-ink-700/70">
          Not sure which rate plan you&apos;re on? That&apos;s exactly what the
          free bill review is for.
        </p>
      </div>
    </section>
  );
}
