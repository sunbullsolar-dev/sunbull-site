import { ConsultButton, CallButton } from "./CTAButtons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-ink-950 text-white sm:min-h-[92vh]"
    >
      {/* Warm sunburst backdrop: a soft amber glow from the upper-center that
          falls off to near-black at the edges and bottom. No panel art — pure
          gradient + a gently breathing core, GPU-cheap and stilled by the
          prefers-reduced-motion rule. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Base radial sunburst */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(125% 95% at 50% 16%, rgba(255,156,51,0.55) 0%, rgba(240,97,10,0.30) 24%, rgba(160,55,18,0.12) 44%, rgba(10,10,13,0) 64%)",
          }}
        />
        {/* Breathing core right above the headline */}
        <div className="absolute left-1/2 top-[10%] h-[36rem] w-[36rem] -translate-x-1/2 animate-glow-breathe rounded-full bg-sun-500/25 blur-[120px]" />
        {/* Deepen the lower half so the copy and scroll cue stay readable and the
            glow fades cleanly into the next section. */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
      </div>

      {/* Centered copy — vertically centered in the hero, horizontally centered
          on the page. Content is unchanged; only alignment differs. */}
      <div className="relative mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-sun-300">
          Based in the San Fernando Valley · Serving all of California
        </p>
        <h1 className="animate-fade-up mx-auto mt-4 max-w-2xl font-display text-5xl font-extrabold leading-[1.04] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-7xl">
          Your bill keeps climbing.
          <span className="block text-sun-400">Own your power.</span>
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-xl text-lg text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] sm:text-xl">
          Your electric bill was never built to go down. Get a free, no-pressure
          look at what you&apos;re actually paying — and what your options with
          solar really are.
        </p>

        <div className="animate-fade-up mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <ConsultButton className="w-full sm:w-auto" />
          <CallButton
            variant="outline"
            className="w-full border-white/25 bg-white/10 text-white hover:border-white/40 sm:w-auto"
          />
        </div>

        <p className="animate-fade-up mt-5 text-sm text-white/55">
          Free · No obligation · English · Español · Հայերեն · فارسی
        </p>
      </div>

      {/* Scroll cue */}
      <div
        className="animate-fade-up pointer-events-none absolute inset-x-0 bottom-5 flex justify-center"
        aria-hidden="true"
      >
        <span className="flex flex-col items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-white/45">
          Scroll
          <svg viewBox="0 0 24 24" className="h-4 w-4 animate-bounce" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </section>
  );
}
