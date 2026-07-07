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
  { value: "10+ yrs", label: "In business" },
  { value: "4 languages", label: "English · Spanish · Armenian · Persian" },
  { value: "5★", label: "Rated on Google" },
];

export const steps = [
  {
    n: "01",
    title: "Analyze your usage",
    body: "We start with your latest electric bill and how your home actually uses energy — the foundation for a plan that fits.",
  },
  {
    n: "02",
    title: "Design your system",
    body: "We design a solar and battery plan around your roof, your usage, and your goals — explained in plain language, in English, Spanish, Armenian, or Persian.",
  },
  {
    n: "03",
    title: "Permits & install",
    body: "Once you decide, our vetted, licensed local installer partners handle the permits, approvals, and installation — fast, and to code.",
  },
  {
    n: "04",
    title: "Start producing power",
    body: "Your system goes live, switches on, and your home begins making — and, with a battery, storing — its own power.",
  },
];

export const reasons = [
  {
    title: "10+ years, started door-to-door",
    body: "Our founder started Sunbull knocking on doors in Granada Hills. A decade later, we're still in your neighborhood.",
  },
  {
    title: "1,500+ installations",
    body: "More than 1,500 Valley homes and businesses have gone solar with Sunbull.",
  },
  {
    title: "Licensed local installer partners",
    body: "Sunbull is a solar dealer. We coordinate your project through vetted, licensed local contractor partners — so the work is done right and to code.",
  },
  {
    title: "We speak your language",
    body: "Our team serves the community in English, Spanish, Armenian, and Persian.",
  },
  {
    title: "Local, not a call center",
    body: "You won't be handed to a national 1-800 brand. You talk to real people who know California solar — and your utility.",
  },
  {
    title: "Education-first, always",
    body: "Our job is to help you understand your bill and your options — clearly, and in your language.",
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
    a: "It takes about 30 minutes. We review your electric bill line by line, explain what you're actually paying for, and go over the options you qualify for — in plain language, in your language.",
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
    q: "Do I have to be in the San Fernando Valley?",
    a: "No. Sunbull is based in and rooted in the San Fernando Valley, but we serve homeowners across California — in person locally, and by phone or video statewide.",
  },
  {
    q: "What languages do you speak?",
    a: "Our team serves the community in English, Spanish, Armenian, and Persian.",
  },
  {
    q: "What utilities do you work with?",
    a: "We work with LADWP, SCE, and utilities across California — including municipal utilities like Glendale Water & Power and Burbank Water & Power. Each has its own rates and solar rules, and we know how they differ.",
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

// Short labels for the interactive bill qualifier (same values as billRanges so
// the selection maps straight onto the lead form + monday column).
export const billRangesShort = [
  { value: "under-100", label: "Under $100" },
  { value: "100-200", label: "$100 – $200" },
  { value: "200-300", label: "$200 – $300" },
  { value: "300-400", label: "$300 – $400" },
  { value: "over-400", label: "Over $400" },
];

// Utilities we serve — used by the qualifier and the utility-guide section.
export const utilities = [
  { value: "ladwp", label: "LADWP" },
  { value: "sce", label: "SCE" },
  { value: "glendale", label: "Glendale (GWP)" },
  { value: "bwp", label: "Burbank (BWP)" },
  { value: "other", label: "Other / Not sure" },
];

// Utility-specific education. Compliance: factual rate/program info only —
// NO specific savings figures, dollar amounts, or guarantees.
export const utilityGuides = [
  {
    code: "LADWP",
    name: "LADWP homeowners",
    points: [
      "NEM 3.0 does NOT apply to LADWP — it still offers full retail-rate net metering, among the most valuable solar economics left in California in 2026.",
      "LADWP residential rates are flat (not time-of-use), so the value of your net-metering credit stays steady through the day.",
      "LADWP runs its own net metering and interconnection process — we handle that paperwork with our installer partners.",
    ],
  },
  {
    code: "SCE",
    name: "SCE homeowners",
    points: [
      "Under NEM 3.0 (the Net Billing Tariff), SCE credits exported solar at a much lower avoided-cost rate — roughly 75% less than the old program.",
      "That makes battery storage important: storing your own power to use during the expensive evening peak is usually more valuable than exporting it.",
      "SCE's peak pricing lands in the late afternoon and evening — exactly when a battery can carry your home.",
    ],
  },
  {
    code: "GWP",
    name: "Glendale (GWP)",
    points: [
      "Glendale Water & Power still runs a 1:1 net metering program — exports credit at the same rate you'd pay to pull power back.",
      "As of 2026, GWP has no waitlist or capacity cap on the program — strong solar economics.",
      "We know the local GWP process and coordinate it with our licensed installer partners.",
    ],
  },
  {
    code: "BWP",
    name: "Burbank (BWP)",
    points: [
      "Burbank Water & Power launched a new Solar Net Billing program on Jan 1, 2026 — new systems are credited at BWP's avoided cost of energy, which is lower than retail.",
      "That means battery storage matters more for new Burbank installs.",
      "Systems permitted before 2026 were grandfathered into the old net metering program.",
    ],
  },
];
