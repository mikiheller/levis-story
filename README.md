# Levi

The public case file for our son Levi. Five pages:

- `/` — Levi's Story (home)
- `/philosophy` — Our Philosophy (with privacy / HIPAA-waiver section)
- `/data` — Data Vault
- `/bounties` — Bounty Program
- `/stay-in-touch` — Sign up for updates

Source copy lives in [`website-draft.md`](./website-draft.md). The site is a faithful rendering of that draft.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif headlines) + [Inter](https://fonts.google.com/specimen/Inter) (body)

All pages are statically prerendered.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm run start
```

## Project layout

```
src/
  app/
    layout.tsx              # site shell: header + footer + fonts
    page.tsx                # /  (Levi's Story)
    philosophy/page.tsx     # /philosophy
    data/page.tsx           # /data
    bounties/page.tsx       # /bounties
    stay-in-touch/
      page.tsx              # /stay-in-touch
      signup-form.tsx       # client form (submission stubbed)
    globals.css             # design tokens + .prose typography
  components/
    site-header.tsx
    site-footer.tsx
    container.tsx
    page-header.tsx
  lib/
    cn.ts                   # className utility
public/
  photos/                   # compressed Levi photos
```

## To wire up before publishing

- **Email signup backend.** `src/app/stay-in-touch/signup-form.tsx` currently
  stubs the submission with a `setTimeout`. Wire it to your provider of choice
  (Resend, Loops, ConvertKit, Mailchimp, a custom API route, etc.).
- **Contact email.** Replace the `hello@example.com` placeholder in
  `src/components/site-footer.tsx` and `src/app/stay-in-touch/page.tsx`.
- **Bounty submission email.** Same — referenced in
  `src/app/bounties/page.tsx` (currently links to `/stay-in-touch`).
- **Photos.** Six photos are in `public/photos/`. Curate the final selection
  and write better alt text in:
  - `src/app/page.tsx` (homepage hero + body + family strip)
- **Bulk-download archive.** `/data#bulk-download` anchors to a section but
  the actual download isn't implemented.
- **Analytics / SEO.** No analytics configured. `metadata` is set per-page in
  each `page.tsx` — extend with OG images, robots, sitemap as needed.

## Deployment

This is a stock Next.js app and deploys cleanly to Vercel:

```bash
npx vercel
```

No environment variables required for the current static implementation.
