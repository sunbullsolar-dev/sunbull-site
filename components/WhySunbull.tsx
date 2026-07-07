import { reasons } from "@/lib/site";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhySunbull() {
  return (
    <section id="why" className="bg-ink-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          {/* Founder / trust story */}
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-sun-300">
              Why Sunbull
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Local people who&apos;ve earned the Valley&apos;s trust
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Sunbull started with our founder knocking on doors in Granada
              Hills. More than ten years and 1,500+ installations later,
              we&apos;re still local, still hands-on, and still treating every
              home like it&apos;s on our own street.
            </p>
            <p className="mt-4 text-white/65">
              We&apos;re a solar dealer — we coordinate your project through
              vetted, licensed local contractor partners so the work is done
              right and to code. You get a team that knows your utility and
              your area, not a national call center.
            </p>

            <div className="mt-6 rounded-2xl border border-sun-400/30 bg-sun-500/10 p-5">
              <p className="text-white/85">
                <span className="font-bold text-sun-300">Every option, compared.</span>{" "}
                As a dealer, we lay out ownership, financing, lease, PPA, and
                prepaid — and help you choose the one that actually fits your
                home.
              </p>
            </div>
          </div>

          {/* Differentiators grid */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li
                key={r.title}
                className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sun-400/40 hover:bg-white/[0.07]"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sun-500/15 text-sun-400">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3 className="font-bold">{r.title}</h3>
                    <p className="mt-1 text-sm text-white/65">{r.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
