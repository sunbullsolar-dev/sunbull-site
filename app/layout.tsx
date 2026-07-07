import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { site, serviceAreas } from "@/lib/site";
import { RevealProvider } from "@/components/RevealProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "Frustrated with rising LADWP & SCE bills? Sunbull Solar gives San Fernando Valley homeowners a free, no-pressure bill review and solar plan. 10+ years local, 1,500+ installs. English, Spanish, Armenian & Persian.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sunbull Solar | Solar for San Fernando Valley Homeowners",
    template: "%s | Sunbull Solar",
  },
  description,
  keywords: [
    "solar San Fernando Valley",
    "solar Granada Hills",
    "solar Northridge",
    "solar Van Nuys",
    "solar Woodland Hills",
    "LADWP bill",
    "SCE bill",
    "residential solar",
    "commercial solar",
    ...serviceAreas.map((c) => `solar ${c}`),
  ],
  openGraph: {
    title: "Sunbull Solar | Solar for San Fernando Valley Homeowners",
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunbull Solar | Solar for San Fernando Valley Homeowners",
    description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* No-JS safety: never leave scroll-reveal content hidden. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {children}
        <RevealProvider />
        <Analytics />
      </body>
    </html>
  );
}
