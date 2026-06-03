# Sunbull Solar — Marketing Site

A fast, mobile-first, conversion-focused landing page for **Sunbull Solar**,
serving homeowners across the San Fernando Valley. Built to turn a frustrated
ratepayer into a booked **free consultation**.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Deploys to the
**Vercel free tier** with zero config.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

---

## ✅ Things YOU need to fill in before launch

Everything you'll edit lives in **`lib/site.ts`** unless noted. Search the repo
for `PLACEHOLDER` to find every spot.

| What | Where | Status |
|------|-------|--------|
| Phone number (tap-to-call) | `lib/site.ts` → `phoneDisplay` / `phoneHref` | ✅ set to (818) 923-4431 |
| Email | `lib/site.ts` → `email` / `emailHref` | ✅ set to sunbullsolar@gmail.com |
| Licensing line | `components/Footer.tsx` | ✅ dealer/HIS wording (Sunbull holds no CSLB license) |
| **Real domain** | `lib/site.ts` → `url` | ⛔ placeholder domain (used for SEO/sitemap) |
| Reviews | `lib/site.ts` → `reviews` | ✅ 4 real Google reviews, hard-coded |
| Lead delivery (form endpoint) | `app/api/lead/route.ts` | ✅ **wired to monday.com — set the 2 env vars below** |
| Service-area cities | `lib/site.ts` → `serviceAreas` | ✅ per brief |

---

## 🔌 Lead form → monday.com (DONE — just add env vars)

The form (`app/api/lead/route.ts`) now creates an item on the **Sunbull Web
Leads** board (`18416212537`) on every submission, mapping all six fields,
stamping **Date Received**, and setting **Status → New**. If the monday call
fails for any reason, the visitor still sees success and the full lead is
logged server-side — **we never lose a lead to an error.**

### The 2 environment variables you must set

| Variable | Value | Secret? |
|----------|-------|---------|
| `MONDAY_API_TOKEN` | Your monday API token | 🔒 **yes — never commit** |
| `MONDAY_BOARD_ID` | `18416212537` | no |

**Get your token:** monday.com → your avatar (bottom-left) → **Developers** →
**My Access Tokens** → copy.

**Locally:**
```bash
cp .env.example .env.local      # then paste your token into .env.local
npm run dev                     # restart so it picks up the env vars
```
`.env.local` is gitignored, so your token never gets committed.

**On Vercel:** Project → **Settings → Environment Variables** → add both
`MONDAY_API_TOKEN` and `MONDAY_BOARD_ID` (Production + Preview), then redeploy.

> Until the token is set, submissions are validated, the visitor sees success,
> and the lead is logged on the server — but nothing is written to monday.

### SMS + email alerts (after deploy)
A `notifyTeam()` function in `route.ts` runs after each successful monday write
and is the single place to add **Twilio (SMS)** + **Resend/email** alerts. It's
intentionally empty for now with a `TODO`. Just drop the calls in there and read
their keys from new env vars.

---

## 🚀 Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel → **New Project** → import the repo. Framework auto-detects as
   Next.js. No build settings needed.
3. Add any env vars (see lead wiring above) under **Settings → Environment
   Variables**.
4. Add your custom domain and update `site.url` in `lib/site.ts`.

---

## ⭐ Reviews (`lib/site.ts` → `reviews`)

Four real Google reviews are hard-coded as styled cards (5 stars, quote, name,
"via Google", plus a "Local Guide" tag where applicable). To add/edit reviews,
update the `reviews` array in `lib/site.ts`. The "Read all our reviews on
Google" button links to `social.google`. No overall rating number is shown
(it would have to come from real data).

## 🎨 Logo concept (not a finished logo)

`components/SunbullMark.tsx` is a **lightweight inline-SVG concept**: a rising
sun whose top rays double as minimal **bull horns** — energetic and bold, per
the "sun + bull" brand idea. It scales crisply and costs nothing to load. Hand
it to a designer for a polished final mark before launch.

---

## ⚖️ Compliance notes (built in — please keep)

This site was built to specific guardrails. If you edit copy, preserve these:

- **Sunbull is described as a solar *dealer*, not a licensed contractor.** The
  footer legal line states installs are performed by independent licensed
  contractor partners. Do not relabel Sunbull as the installer.
- **No savings/dollar/percentage claims or guarantees** anywhere.
- **All testimonials are clearly marked as placeholders** until you supply real,
  verified Google reviews.
- **No fabricated badges, awards, or certifications.**

---

## Project structure

```
app/
  layout.tsx        SEO metadata, fonts, viewport
  page.tsx          Section composition + LocalBusiness JSON-LD
  globals.css       Tailwind + reduced-motion handling
  robots.ts         /robots.txt
  sitemap.ts        /sitemap.xml
  page.tsx          ...also LocalBusiness + FAQPage JSON-LD
  api/lead/route.ts Lead endpoint → monday.com (set env vars)
components/         Header, Hero, TrustBar, HowItWorks, Reframe, WhySunbull,
                    ServiceArea, Reviews, FAQ, Consultation, LeadForm, Footer,
                    CTAButtons, SocialLinks, SunbullMark
lib/site.ts         ⭐ Single source for all copy, contact info, social links,
                    FAQ content & placeholders
```
