import { ConsultButton, CallButton } from "./CTAButtons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 text-white"
    >
      {/* Warm "wow" backdrop: gradient wash + breathing sun + drifting halo +
          slow rays + floating orbs. All transform/opacity/bg-position only, so
          it's GPU-cheap and fully stilled by the prefers-reduced-motion rule. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Base warm gradient wash that gently shifts behind the headline */}
        <div
          className="absolute inset-0 animate-aurora opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(120% 80% at 50% -10%, rgba(255,125,10,0.45) 0%, rgba(240,97,10,0.18) 30%, rgba(10,10,13,0) 60%), linear-gradient(120deg, rgba(255,157,51,0.16), rgba(10,10,13,0) 40%, rgba(199,71,12,0.16) 80%)",
            backgroundSize: "100% 100%, 200% 200%",
          }}
        />

        {/* Wide amber halo, slowly drifting and swelling */}
        <div className="absolute -top-48 left-1/2 h-[46rem] w-[46rem] animate-glow-drift rounded-full bg-sun-600/30 blur-[120px] sm:-top-56" />

        {/* Bright sun core that breathes right behind the headline */}
        <div className="absolute -top-28 left-1/2 h-[30rem] w-[30rem] animate-glow-breathe rounded-full bg-sun-400/55 blur-[90px] sm:-top-32" />

        {/* Slow-spinning light rays radiating from the sun */}
        <div
          className="absolute -top-44 left-1/2 h-[48rem] w-[48rem] animate-ray-spin opacity-[0.16]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, #ffc16d 10deg, transparent 22deg, transparent 38deg, #ff9d33 48deg, transparent 60deg, transparent 74deg, #ffc16d 84deg, transparent 96deg, transparent 112deg, #ff9d33 120deg, transparent 134deg)",
            maskImage: "radial-gradient(circle at center, black 0%, transparent 62%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 62%)",
          }}
        />

        {/* Free-floating accent orbs for a touch of life */}
        <div className="absolute left-[12%] top-[28%] h-40 w-40 animate-orb-a rounded-full bg-sun-300/25 blur-3xl" />
        <div className="absolute right-[10%] top-[14%] h-48 w-48 animate-orb-b rounded-full bg-sun-500/20 blur-3xl" />

        {/* Subtle bottom vignette to ground the text */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-sun-300">
            Serving the San Fernando Valley
          </p>
          <h1 className="animate-fade-up mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            Your LADWP &amp; SCE bill keeps climbing.
            <span className="block text-sun-400">
              See what you could be paying instead.
            </span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
            Understand what you&apos;re really paying for electricity — and your
            options to take control with solar. A free, no-pressure bill review
            from a local team that&apos;s served the Valley for 10+ years.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ConsultButton className="w-full sm:w-auto" />
            <CallButton variant="outline" className="w-full border-white/25 bg-white/10 text-white hover:border-white/40 sm:w-auto" />
          </div>

          <p className="animate-fade-up mt-5 text-sm text-white/55">
            Free consultation · No obligation · English · Español · Հայերեն · فارسی
          </p>
        </div>
      </div>
    </section>
  );
}
