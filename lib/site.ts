/**
 * Central site configuration & copy.
 * ──────────────────────────────────────────────────────────────────
 * Everything the client may want to edit lives here. Search for
 * "PLACEHOLDER" to find the values you must replace before launch.
 */

export const site = {
  name: "Sunbull Solar",
  // Real contact info supplied by client:
  phoneDisplay: "(818) 923-4431",
  phoneHref: "tel:+18189234431",
  email: "sunbullsolar@gmail.com",
  emailHref: "mailto:sunbullsolar@gmail.com",

  // Used for SEO / JSON-LD. Update domain when you deploy.
  url: "https://www.sunbullsolar.com", // PLACEHOLDER: set real domain
  region: "San Fernando Valley, California",
};

export const serviceAreas = [
  "Granada Hills",
  "Chatsworth",
  "Northridge",
  "Tarzana",
  "Reseda",
  "Van Nuys",
  "Encino",
  "Woodland Hills",
  "Canoga Park",
  "North Hills",
];

export const trustStats = [
  { value: "1,500+", label: "Installations completed" },
  { value: "10+ yrs", label: "Serving the SFV" },
  { value: "4 languages", label: "English · Spanish · Armenian · Persian" },
  { value: "Local", label: "Fast local installs" },
];

export const steps = [
  {
    n: "01",
    title: "Free bill review",
    body: "We sit down with your latest LADWP or SCE bill and walk you through exactly what you're paying for — line by line, no pressure.",
  },
  {
    n: "02",
    title: "Your custom plan",
    body: "We design a solar plan around your roof, your usage, and your goals — and explain your options in plain language, in your language.",
  },
  {
    n: "03",
    title: "Fast local install",
    body: "Once you decide, our vetted, licensed local installer partners get to work — fast local installs handled by people from your community.",
  },
];

export const reasons = [
  {
    title: "10+ years, started door-to-door",
    body: "Our founder started Sunbull knocking on doors in Granada Hills. A decade later we're still local, still hands-on, and still in your neighborhood.",
  },
  {
    title: "1,500+ installations",
    body: "More than 1,500 Valley homes and businesses have gone solar with Sunbull. Experience you can lean on.",
  },
  {
    title: "Licensed local installer partners",
    body: "Sunbull is a solar dealer. We coordinate your project through vetted, licensed local contractor partners — so the work is done right and to code.",
  },
  {
    title: "We speak your language",
    body: "Our team serves the community in English, Spanish, Armenian, and Persian. Real neighbors, real conversations.",
  },
  {
    title: "Local, not a call center",
    body: "You won't be handed to a national 1-800 brand. You talk to local people who know the Valley — and your utility.",
  },
  {
    title: "Low-pressure, education-first",
    body: "Our job is to help you understand your bill and your options. No hard sell, no jargon, no games.",
  },
];

// Social / review profiles. The Google link doubles as the "read our reviews" CTA.
export const social = {
  google: "https://share.google/Nbi2qYkxU8dJke2dC",
  yelp: "https://www.yelp.com/biz/sunbull-solar-los-angeles-3",
  instagram: "https://www.instagram.com/sunbull.solar/",
};

// Real Google reviews (verbatim). Do NOT add cities or invent content.
export const reviews = [
  {
    name: "Jeremy Liuquen",
    localGuide: false,
    text: "These guys are the best in business. They're fast to respond, figure out all the logistics, and finish the job as promised. My family and I were really happy with the outcome. If you're considering solar, Sunbull Solar is the only company to do it with.",
  },
  {
    name: "William Aguilar",
    localGuide: true,
    text: "Working with Sunbull Solar has been one of the best decisions we've made for our home. From the initial consultation to the final installation, their team was knowledgeable, transparent, and incredibly professional.",
  },
  {
    name: "Natalie Barnum",
    localGuide: false,
    text: "Amazing customer service. The canvasser was very polite and helped me understand my bill, and the team helped me save so much money with the solar program. 10/10 would recommend to a friend.",
  },
  {
    name: "Will Sid",
    localGuide: false,
    text: "The best in the industry! I'd been shopping around for solar for quite some time — until I called Sunbull.",
  },
];

// FAQ — compliance-safe answers (no savings $/%, no guarantees).
export const faqs = [
  {
    q: "Is this going to be a high-pressure sales pitch?",
    a: "No. We're education-first. The consultation is free, with no obligation — our job is to help you understand your bill and your options, not to push you into anything.",
  },
  {
    q: "What happens in the free consultation?",
    a: "It takes about 30 minutes. We review your LADWP or SCE bill line by line, explain what you're actually paying for, and walk you through the options you qualify for — in plain language, in your language.",
  },
  {
    q: "Do I have to buy the panels?",
    a: "Not necessarily. There are several ways to go solar — ownership, financing, lease, or PPA — and we help you understand each one so you can choose what fits. There's no obligation to move forward.",
  },
  {
    q: "Does Sunbull do the installation?",
    a: "Sunbull is a solar dealer. We coordinate your project and the installation is performed by vetted, licensed California contractor partners — so the work is done right and to code.",
  },
  {
    q: "What areas do you serve?",
    a: "The San Fernando Valley — including Granada Hills, Chatsworth, Northridge, Tarzana, Reseda, Van Nuys, Encino, Woodland Hills, Canoga Park, North Hills, and the greater Valley. If you don't see your city, reach out — we likely serve it.",
  },
  {
    q: "What languages do you speak?",
    a: "Our team serves the community in English, Spanish, Armenian, and Persian.",
  },
  {
    q: "What utilities do you work with?",
    a: "We work with LADWP, SCE, and other California utilities.",
  },
  {
    q: "How are you different from the big national solar companies?",
    a: "We're local. Our founder started door-to-door in Granada Hills, and 10+ years and 1,500+ installations later we're still in the Valley. You talk to real neighbors who know your area and your utility — not a national call center.",
  },
];

export const languages = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish / Español" },
  { value: "armenian", label: "Armenian / Հայերեն" },
  { value: "persian", label: "Persian / فارسی" },
];

export const billRanges = [
  { value: "under-100", label: "Under $100 / month" },
  { value: "100-200", label: "$100 – $200 / month" },
  { value: "200-300", label: "$200 – $300 / month" },
  { value: "300-400", label: "$300 – $400 / month" },
  { value: "over-400", label: "Over $400 / month" },
  { value: "not-sure", label: "Not sure" },
];
