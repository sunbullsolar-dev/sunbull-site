import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { WhySunbull } from "@/components/WhySunbull";
import { FinancingOptions } from "@/components/FinancingOptions";
import { UtilityGuides } from "@/components/UtilityGuides";
import { ServiceArea } from "@/components/ServiceArea";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { EnergyIndependence } from "@/components/EnergyIndependence";
import { Consultation } from "@/components/Consultation";
import { Footer } from "@/components/Footer";
import { site, serviceAreas, faqs, social } from "@/lib/site";

// Local-SEO structured data. "SolarEnergyContractor" intentionally avoided —
// Sunbull is a dealer, not the licensed contractor. Using LocalBusiness.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description:
    "Education-first residential & commercial solar for San Fernando Valley homeowners. A solar dealer coordinating installs through licensed local contractor partners.",
  telephone: site.phoneDisplay,
  email: site.email,
  url: site.url,
  areaServed: serviceAreas.map((city) => ({
    "@type": "City",
    name: city,
  })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressLocality: "San Fernando Valley",
    addressCountry: "US",
  },
  knowsLanguage: ["English", "Spanish", "Armenian", "Persian"],
  sameAs: [social.google, social.yelp, social.instagram],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Reviews />
        <WhySunbull />
        <FinancingOptions />
        <UtilityGuides />
        <ServiceArea />
        <FAQ />
        <EnergyIndependence />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
