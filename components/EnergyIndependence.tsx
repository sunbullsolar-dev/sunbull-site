import { ConsultButton } from "./CTAButtons";

function BatteryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M21 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 9l-2 3h3l-2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12.5 8l-2.5 4h3l-2.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M4 11l8-6 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const pillars = [
  {
    icon: <BatteryIcon />,
    title: "Store your energy",
    body: "A battery banks the power your panels make during the day so your home can pull from it in the evening — when utility rates are at their highest.",
  },
  {
    icon: <ShieldIcon />,
    title: "Protect against outages",
    body: "When the grid goes down, a properly sized battery keeps the essentials running — so an outage doesn't have to mean a dark, powerless house.",
  },
  {
    icon: <HomeIcon />,
    title: "Lean less on rate hikes",
    body: "The more of your power that comes from your own roof, the less of your home runs on the utility's next rate increase — year after year.",
  },
];

export function EnergyIndependence() {
  return (
    <section
      id="independence"
      className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28"
    >
      {/* Warm wash, consistent with the hero/reframe sections */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sun-600/15 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun-300">
            Why it matters
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Utility rates keep going up.
            <span className="block text-sun-400">Lean on the grid less.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Solar and a battery won&apos;t stop the utility from raising rates —
            but they put more of your power on your own roof, keep your lights on
            when the grid goes down, and reduce how much of your home runs on
            someone else&apos;s pricing.
          </p>
        </div>

        <ul className="reveal mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-sun-400/40 hover:bg-white/[0.07]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sun-500/15 text-sun-400">
                {p.icon}
              </span>
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-white/65">{p.body}</p>
            </li>
          ))}
        </ul>

        <div className="reveal mt-14 text-center">
          <ConsultButton label="See My Solar Options" />
          <p className="mt-4 text-sm text-white/55">
            No obligation. Just a clear look at your home&apos;s energy potential.
          </p>
        </div>
      </div>
    </section>
  );
}
