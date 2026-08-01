# Mavorra Creative — Marketing Website

Production-ready marketing site for Mavorra Creative, a marketing company
helping businesses look trusted, professional and ready to grow through
branding, websites, campaign visuals, content, SEO and lead generation
systems — serving clients across the United Kingdom, Ghana, and the United
States. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer
Motion, GSAP/ScrollTrigger, and Lenis smooth scrolling.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for entrance animation, page transitions, and micro-interactions
- **GSAP + ScrollTrigger** for the pinned horizontal "Featured Work" gallery
- **Lenis** for inertia-based smooth scrolling
- **next/image** + **next/font** for optimized images and self-hosted, zero-layout-shift fonts (Fraunces + Manrope)
- **Resend** (optional) for delivering contact form submissions by email

## Getting started locally

Requires Node 18.17+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need:

```bash
cp .env.example .env.local
```

| Variable          | Required? | Purpose                                                                                   |
| ------------------ | --------- | ------------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`  | Optional  | Enables the `/api/contact` route to actually email submissions via [Resend](https://resend.com). Without it, submissions are logged server-side and the form still works end-to-end. |

## Editing content without touching component code

Everything editorial lives in `/data`, fully commented:

- **`data/site.ts`** — site name, URL, email, phone/WhatsApp, address, nav links, social links.
- **`data/services.ts`** — the eight à la carte services shown on the homepage.
- **`data/packages.ts`** — the four Marketing Buffet monthly package tiers.
- **`data/projects.ts`** — the "Featured Work" case studies, used by the homepage gallery, `/work`, and `/work/[slug]`.

To add or edit a case study, copy an existing object in `data/projects.ts`,
give it a unique `slug`, and update the copy. The `/work/[slug]` page is
generated automatically for every entry.

### Swapping in real images

- **Logos**: replace `/public/logo/mavorra-logo-dark.png` (dark wordmark, for
  light backgrounds) and `/public/logo/mavorra-logo-white.png` (white
  wordmark, for dark backgrounds) — keep the same filenames and a transparent
  background, and the header's automatic light/dark logo swap keeps working
  with no code changes.
- **Case study images**: each project in `data/projects.ts` points at
  `/public/work/<slug>/cover.jpg`, `detail-1.jpg`, and `detail-2.jpg`.
  Drop in real photography/mockups under the same filenames and paths (or
  update the `src` values in `data/projects.ts` if you rename them). The
  current images are generated abstract placeholder art in the brand palette.
- **OG image**: `/public/og-image.png` (1200×630) is used for social share
  previews — regenerate it with real brand artwork before launch.

## SEO

- Per-page metadata (title, description, canonical, Open Graph, Twitter
  Card) is set via the Next.js Metadata API in every route.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically from `data/projects.ts` and `data/site.ts`.
- JSON-LD structured data: `Organization` schema (with `areaServed`: UK,
  Ghana, US) on the homepage; `CreativeWork` + `BreadcrumbList` schema on
  every case study page.
- **Before launch**: update `siteConfig.url` in `data/site.ts` to your real
  production domain — it feeds `metadataBase`, canonical URLs, the sitemap,
  and JSON-LD.

## Deploying

### 1. Push to GitHub

```bash
git init                      # if you haven't already
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2. Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repository.
2. Vercel auto-detects Next.js — no configuration is required (no
   `vercel.json` needed).
3. If you're sending contact form emails, add `RESEND_API_KEY` under
   **Project Settings → Environment Variables**.
4. Deploy. Every push to `main` redeploys automatically; every PR gets a
   preview URL.

### 3. Point your domain

Add your domain under **Project Settings → Domains**, then update
`siteConfig.url` in `data/site.ts` to match and redeploy.

## Project structure

```
app/                  Routes (App Router): /, /work, /work/[slug], /about,
                       /contact, /privacy, /terms, /api/contact,
                       sitemap.ts, robots.ts
components/
  home/                Homepage sections (Hero, Marquee, Services,
                       FeaturedWork, Packages, Process, CtaBand)
  layout/              Header, Footer, MobileMenu, SmoothScrollProvider,
                       PageTransition
  work/                Project card + case study building blocks
  ui/                  Shared primitives (Button, Container, Magnetic,
                       RevealText, SectionHeading)
data/                  Editorial content — see above
lib/                   Fonts, motion variants, hooks, JSON-LD helpers
public/
  logo/                Brand wordmarks (dark + white)
  work/                Case study imagery
```

## Accessibility & performance notes

- Respects `prefers-reduced-motion`: parallax, pinning, and most animation
  fall back to simple fades or no motion.
- The "Featured Work" gallery only pins/scroll-jacks on desktop (≥768px);
  mobile uses native vertical scroll-snap instead.
- All interactive targets meet a 44px minimum tap size; no functionality is
  hover-only.
- Images are served via `next/image` (AVIF/WebP, responsive `sizes`) and
  fonts are self-hosted via `next/font` to avoid layout shift.
