# Roastlytics — roastlytics.com

Marketing site for Roastlytics, built on **Next.js 14 (App Router)** with TypeScript.

## Stack

- Next.js 14 · App Router · React 18 · TypeScript
- Instrument Serif + JetBrains Mono via Google Fonts `<link>`
- Plain CSS with design tokens — no Tailwind
- No database, no CMS

## Design system

The whole brand lives in `app/globals.css`:

```css
--paper:      #FAFAF7  /* page background (warm off-white) */
--ink:        #0A0A0A  /* primary text */
--ink-soft:   #2A2A2A
--ink-muted:  #4A4742
--warm-gray:  #8A8780  /* secondary / metadata */
--rule:       #E5E3DC  /* borders, dividers */
--surface:    #F2F0E9  /* subtle card background */
--red:        #D63B2F  /* accent — used ONLY for alerts and brand dots */
```

Two fonts: `--f-serif` (Instrument Serif for headlines) and `--f-mono` (JetBrains Mono for body, labels, data).

## Animations

Every animation has a job — none are decoration.

- **Pulse indicator** — ambient "live" signal next to brand and live-data areas
- **Trace underline** — red line sweeps under the italic word in the hero on load
- **Brand dot** — red period lands after the trace completes
- **CountUp** — KPI numbers count from 0 to final value (cubic ease-out)
- **AnimatedBar** — inventory bars fill on scroll into view, staggered 120ms apart
- **LiveSync** — "synced Xs ago" ticker that increments every 4 seconds
- **CogsTicker** — COGS KPI drifts by fractions of a cent to prove data is live
- **Scroll reveal** — sections fade/rise in as they enter the viewport
- **Hover reveal** — hovering an inventory row reveals supplier/cost detail

All motion respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Route       | File                     |
| ----------- | ------------------------ |
| `/`         | `app/page.tsx`           |
| `/features` | `app/features/page.tsx`  |
| `/pricing`  | `app/pricing/page.tsx`   |
| `/about`    | `app/about/page.tsx`     |
| `/contact`  | `app/contact/page.tsx`   |

## Components

- `Nav.tsx` — top nav with active-link detection via `usePathname`
- `SiteFooter.tsx` — site footer
- `Reveal.tsx` — scroll-triggered fade-up, re-runs on route change
- `CountUp.tsx` — animated number counter (respects reduced motion)
- `AnimatedBar.tsx` — inventory bar that fills on viewport entry
- `LiveSync.tsx` — ambient "synced Xs ago" ticker
- `CogsTicker.tsx` — drifting COGS value
- `Viz.tsx` — reusable feature visualizations (curve, import, OCR, comparison)

## Contact form

`app/contact/ContactForm.tsx` currently logs submissions and fakes success.
Wire it to a backend by uncommenting the `fetch()` line and creating
`app/api/contact/route.ts` — or use Formspree / Basin for zero-backend.

## Deploying

```bash
git push
```

Vercel auto-deploys. Point `roastlytics.com` DNS at the Vercel project.
