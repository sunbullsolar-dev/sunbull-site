/**
 * Pure-CSS solar panel motif used as:
 *  - the instant placeholder while the 3D scene lazy-loads, and
 *  - the permanent fallback for reduced-motion / low-power / no-WebGL users.
 *
 * No JS, no canvas — just a perspective-tilted grid with a warm sheen, so the
 * first screen still looks premium and on-brand without any animation.
 */
export function StaticPanel() {
  const cells = Array.from({ length: 60 });
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative"
        style={{
          transform: "rotateX(12deg) rotateY(-16deg) rotateZ(-3deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Warm glow behind the panel */}
        <div className="absolute -inset-10 rounded-[2rem] bg-sun-500/30 blur-3xl" />
        {/* Panel body */}
        <div className="relative rounded-2xl bg-ink-800/90 p-3 shadow-2xl shadow-sun-900/40 ring-1 ring-sun-400/30">
          <div className="grid grid-cols-6 gap-1.5">
            {cells.map((_, i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-[3px] bg-gradient-to-br from-[#1a2350] to-[#0b1030] ring-1 ring-white/5 sm:h-9 sm:w-9"
              />
            ))}
          </div>
          {/* Diagonal sheen across the cells */}
          <div className="pointer-events-none absolute inset-3 rounded-lg bg-gradient-to-tr from-transparent via-sun-200/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
