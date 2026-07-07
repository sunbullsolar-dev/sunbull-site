import { SunbullWordmark } from "./SunbullMark";
import { SocialLinks } from "./SocialLinks";
import { site, serviceAreas } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + contact */}
          <div>
            <SunbullWordmark className="text-white [&_.text-ink-700]:text-white/60" />
            <p className="mt-4 max-w-xs text-sm">
              Education-first solar — based in the San Fernando Valley, serving
              homeowners across California. We help you understand your electric
              bill and your options.
            </p>
            <div className="mt-5 space-y-1 text-sm">
              <p>
                <a href={site.phoneHref} className="font-semibold text-white hover:text-sun-300">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="hover:text-sun-300">
                  {site.email}
                </a>
              </p>
            </div>
            <SocialLinks className="mt-5" />
          </div>

          {/* Service area */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Service area
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              {serviceAreas.join(" · ")} · &amp; the greater San Fernando Valley
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#how" className="hover:text-sun-300">How it works</a></li>
              <li><a href="#why" className="hover:text-sun-300">Why Sunbull</a></li>
              <li><a href="#areas" className="hover:text-sun-300">Service area</a></li>
              <li><a href="#consultation" className="hover:text-sun-300">See My Solar Options</a></li>
            </ul>
          </div>
        </div>

        {/* Legal / licensing line (COMPLIANCE) */}
        <div className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/45">
          <p>
            © {/* year is intentionally static to keep this a static export */}
            Sunbull Solar. All rights reserved.
          </p>
          <p className="mt-2 max-w-3xl">
            Sunbull Solar is a solar energy dealer, not a licensed contractor.
            All installations are performed by independent, licensed California
            contractor partners. Sunbull Solar&apos;s sales representatives are
            registered Home Improvement Salespersons (HIS). Solar savings and
            production vary by home, usage, roof, equipment, and utility rates;
            no specific savings are promised or guaranteed. All estimates are
            subject to a personalized assessment.
          </p>
        </div>
      </div>
    </footer>
  );
}
