# Roast Log — useroastlog.com

Marketing site for Roast Log, built on **Next.js 14 (App Router)** with TypeScript.

## Stack

- Next.js 14 · App Router · React 18 · TypeScript
- `next/font` for Fraunces + Inconsolata (self-hosted, no external Google Fonts request at runtime)
- Plain CSS (no Tailwind) — all design tokens live as CSS variables in `app/globals.css`
- No database, no CMS — pure marketing site

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Pages

| Route          | File                         |
| -------------- | ---------------------------- |
| `/`            | `app/page.tsx`               |
| `/features`    | `app/features/page.tsx`      |
| `/pricing`     | `app/pricing/page.tsx`       |
| `/about`       | `app/about/page.tsx`         |
| `/contact`     | `app/contact/page.tsx`       |

## Shared components

- `app/components/Nav.tsx` — top nav with active-link detection
- `app/components/SiteFooter.tsx` — site footer
- `app/components/Reveal.tsx` — scroll-triggered fade-up, re-runs on route change
- `app/components/Viz.tsx` — reusable feature visualizations (inventory bars, curve SVG, Artisan import, invoice OCR, roast comparison)

## Contact form wiring

`app/contact/ContactForm.tsx` currently logs submissions and fakes success. Pick one:

1. **Next.js API route** — create `app/api/contact/route.ts`, `POST` the form payload, forward to email via Resend / Postmark / SendGrid, or write to Airtable / Notion / Postgres. Replace the commented `fetch("/api/contact", ...)` line in `ContactForm.tsx`.
2. **Formspree / Basin** — swap the `handleSubmit` to POST directly to their endpoint. Zero backend.
3. **Cal.com / Calendly** — for the demo mode specifically, you could skip the form entirely and redirect to a booking link.

## Deploying

The usual winners for a Next.js marketing site:

- **Vercel** — `git push`, done. Free tier handles this easily.
- **Cloudflare Pages** — also great, Next.js-compatible.
- **Netlify** — works, install the Next.js runtime.

Point `useroastlog.com` DNS at whichever you pick.

## Design tokens

Everything lives in `app/globals.css` under `:root`:

```css
--cream:   #f5f1e8  /* page background */
--roast:   #2a1810  /* primary ink */
--ember:   #c4541a  /* accent / CTAs */
--tan:     #ede4d1  /* borders, muted surfaces */
--mocha:   #8b6f47  /* secondary ink */
--surface: #efeadf  /* subtle card background */
```

Change these in one place and the whole site moves with you.
