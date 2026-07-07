import { site } from "@/lib/site";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.58 3.6 1 1 0 01-.24 1l-2.24 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Primary "book a consultation" action — scrolls to the lead form. */
export function ConsultButton({
  className = "",
  label = "See My Solar Options",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href="#consultation"
      className={`inline-flex items-center justify-center rounded-full bg-sun-500 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sun-500/30 transition hover:bg-sun-600 hover:shadow-sun-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-600 active:scale-[0.98] ${className}`}
    >
      {label}
    </a>
  );
}

/** Tap-to-call — dials the real number on mobile. */
export function CallButton({
  className = "",
  variant = "solid",
  showNumber = true,
}: {
  className?: string;
  variant?: "solid" | "outline";
  showNumber?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold transition active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "solid"
      ? "bg-ink-900 text-white hover:bg-ink-800 focus-visible:outline-ink-900"
      : "border-2 border-ink-900/15 bg-white/70 text-ink-900 backdrop-blur hover:border-ink-900/30 focus-visible:outline-ink-900";
  return (
    <a href={site.phoneHref} className={`${base} ${styles} ${className}`}>
      <PhoneIcon className="h-5 w-5" />
      <span>{showNumber ? `Call ${site.phoneDisplay}` : "Call us"}</span>
    </a>
  );
}

export { PhoneIcon };
