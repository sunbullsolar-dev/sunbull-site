/**
 * Sunbull logo CONCEPT — not a finished logo.
 * A rising sun whose top rays double as minimal bull horns.
 * Lightweight inline SVG so it scales crisply and adds zero network cost.
 * Hand off to a designer for the final mark before launch.
 */
export function SunbullMark({
  className = "",
  title = "Sunbull Solar",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="sb-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffc16d" />
          <stop offset="55%" stopColor="#ff7d0a" />
          <stop offset="100%" stopColor="#f0610a" />
        </linearGradient>
      </defs>

      {/* Bull horns sweeping up from the sun */}
      <path
        d="M11 17C6 13 5.5 8 6.5 5c3 3.2 7 4.2 10.2 6.6"
        stroke="url(#sb-grad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M37 17c5-4 5.5-9 4.5-12-3 3.2-7 4.2-10.2 6.6"
        stroke="url(#sb-grad)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Sun disc */}
      <circle cx="24" cy="27" r="11" fill="url(#sb-grad)" />

      {/* Lower rays */}
      {[
        [24, 41, 24, 46],
        [13.5, 37.5, 10, 41],
        [34.5, 37.5, 38, 41],
        [10, 27, 5, 27],
        [38, 27, 43, 27],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="url(#sb-grad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function SunbullWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <SunbullMark className="h-8 w-8 shrink-0" />
      <span className="font-display text-xl font-extrabold tracking-tight">
        Sun<span className="text-sun-500">bull</span>{" "}
        <span className="font-semibold text-ink-700">Solar</span>
      </span>
    </span>
  );
}
