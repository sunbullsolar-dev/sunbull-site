export function Reframe() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      {/* Soft warm wash to stay on-brand with the hero */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-sun-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun-300">
            The reframe
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            You&apos;re already paying for solar.
            <span className="block text-sun-400">Just not the kind you own.</span>
          </h2>
        </div>

        {/* Two-column body (stacks on mobile) */}
        <div className="reveal mx-auto mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-white/75 md:grid-cols-2 md:gap-10">
          <p>
            Across California, the utilities are building massive solar farms —
            and a slice of every utility bill helps pay for panels sitting in
            the desert, miles from your home, that will never belong to you. The
            move to solar isn&apos;t really a choice anymore; it&apos;s already
            happening, and you&apos;re already funding it.
          </p>
          <p>
            So the only real question left is which solar you pay for: panels in
            the desert you&apos;ll never own, or panels on your own roof that you
            do — that build equity in your home and lock in your rate for
            decades.
          </p>
        </div>

        {/* The discovery — how owning your power actually works */}
        <div className="reveal mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            {
              k: "Panels generate",
              v: "Your roof turns daylight into electricity your home can use right away.",
            },
            {
              k: "Batteries store",
              v: "Extra power is banked for the evening, when utility rates climb.",
            },
            {
              k: "Dependence drops",
              v: "The more you make and store, the less you lean on the utility.",
            },
          ].map((d) => (
            <div key={d.k} className="bg-ink-950 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-sun-300">
                {d.k}
              </p>
              <p className="mt-2 text-white/70">{d.v}</p>
            </div>
          ))}
        </div>

        {/* Comparison cards */}
        <div className="reveal mx-auto mt-6 grid max-w-4xl gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">
              Paying now
            </p>
            <p className="mt-3 text-lg font-semibold text-white/80">
              Funding panels in the desert you&apos;ll never own.
            </p>
          </div>
          <div className="rounded-2xl border border-sun-400/40 bg-gradient-to-br from-sun-500/15 to-transparent p-6 ring-1 ring-sun-400/20">
            <p className="text-xs font-bold uppercase tracking-widest text-sun-300">
              With Sunbull
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              Owning the panels on your own roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
