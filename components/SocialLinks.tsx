import { social } from "@/lib/site";

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.9a5.04 5.04 0 01-2.19 3.31v2.76h3.54c2.08-1.92 3.27-4.74 3.27-8.08z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.67l-3.54-2.76c-.98.66-2.23 1.06-3.74 1.06-2.87 0-5.3-1.94-6.17-4.55H2.18v2.84A11 11 0 0012 23z" />
      <path fill="#FBBC05" d="M5.83 14.08a6.6 6.6 0 010-4.16V7.08H2.18a11 11 0 000 9.84l3.65-2.84z" />
      <path fill="#EA4335" d="M12 4.96c1.62 0 3.07.56 4.21 1.65l3.14-3.14C17.45 1.66 14.96.66 12 .66A11 11 0 002.18 7.08l3.65 2.84C6.7 7.3 9.13 4.96 12 4.96z" />
    </svg>
  );
}

function YelpIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#FF1A1A" aria-hidden="true">
      <path d="M12.27 12.6l3.6-1.74c.5-.24.66-.9.33-1.34a6.7 6.7 0 00-2.95-2.2c-.5-.18-1.04.15-1.1.68l-.46 5.05c-.06.66.68 1.08 1.28.79l-.7-.99zM10.6 13.9l-4.2-1.3c-.55-.17-1.1.25-1.09.83.02 1.18.34 2.34.94 3.36.27.46.92.5 1.27.1l3.43-3.85c.13-.15-.1-.34-.36-.42l.01.27zm1.1 1.9l-2.5 3.6c-.32.46-.1 1.1.44 1.27 1.1.34 2.27.4 3.4.2.53-.1.8-.7.52-1.16l-1.85-3.9c-.12-.25-.4-.25-.5 0l.49-.01zm3.27-.65l4.1 1.6c.54.2 1.12-.2 1.13-.78.03-1.17-.25-2.34-.82-3.37-.26-.47-.9-.53-1.27-.13l-3.55 3.75c-.14.15.07.34.32.43l.08-.13zM12.5 2.2c-1.3-.2-2.04.5-2.1 1.3l-.4 7.3c-.04.7.55 1.27 1.25 1.2.2-.02.4-.1.55-.22l5.8-4.5c.63-.5.5-1.5-.24-1.83A13.4 13.4 0 0012.5 2.2z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FEDA77" />
          <stop offset="35%" stopColor="#F58529" />
          <stop offset="65%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
    </svg>
  );
}

const LINKS = [
  { key: "google", href: social.google, label: "Read our Google reviews", Icon: GoogleIcon },
  { key: "yelp", href: social.yelp, label: "Sunbull Solar on Yelp", Icon: YelpIcon },
  { key: "instagram", href: social.instagram, label: "Sunbull Solar on Instagram", Icon: InstagramIcon },
];

export function SocialLinks({
  className = "",
  iconClassName = "h-5 w-5",
  buttonClassName = "",
}: {
  className?: string;
  iconClassName?: string;
  buttonClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {LINKS.map(({ key, href, label, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-ink-900/10 transition hover:scale-105 hover:shadow-md active:scale-95 ${buttonClassName}`}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
