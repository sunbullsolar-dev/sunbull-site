import { SunbullWordmark } from "./SunbullMark";
import { ConsultButton, CallButton } from "./CTAButtons";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" aria-label="Sunbull Solar home" className="shrink-0">
          <SunbullWordmark />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-700 lg:flex">
          <a href="#how" className="hover:text-sun-600">How it works</a>
          <a href="#why" className="hover:text-sun-600">Why Sunbull</a>
          <a href="#areas" className="hover:text-sun-600">Service area</a>
          <a href="#reviews" className="hover:text-sun-600">Reviews</a>
          <a href="#faq" className="hover:text-sun-600">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Compact icon-only call button on the smallest screens */}
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-white transition hover:bg-ink-800 active:scale-95 sm:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.58 3.6 1 1 0 01-.24 1l-2.24 2.2z"
                fill="currentColor"
              />
            </svg>
          </a>
          <CallButton variant="outline" showNumber className="hidden whitespace-nowrap text-sm sm:inline-flex lg:hidden xl:inline-flex" />
          <ConsultButton className="px-5 py-2.5 text-sm" label="Free Consultation" />
        </div>
      </div>
    </header>
  );
}
