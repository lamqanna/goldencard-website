# GoldenCard Website

Multilingual marketing site for GoldenCard and GoldenEnergy, featuring localized content, detailed service offerings, and a conversion-focused contact flow.

## Getting Started

```bash
npm install
npm run dev
```

Visit <http://localhost:3000>. The app redirects to the default Vietnamese locale (`/vi`). Switch to English via the language selector in the navigation.

## Tooling

- Next.js 15 App Router with TypeScript
- Tailwind CSS v4 using GoldenCard design tokens and shadcn/ui utilities
- Framer Motion animations in the hero section
- Vitest + Testing Library (`npm run test:unit`) for component tests
- Playwright (`npm run test:e2e`) for end-to-end scenarios

## Structure

- `app/` – Route groups for each locale (`[locale]`), API endpoints, and shared layout
- `components/` – Modular UI components (hero, service cards, forms, navigation)
- `lib/` – Content loaders, i18n helpers, navigation logic, SEO builders
- `marketing-content.json` – Source-of-truth bilingual marketing copy

## Deployment

Optimized for Vercel. Run `npm run build` to generate the production output (ISR-enabled). Configure analytics, environment secrets, and Sanity CMS when ready to integrate dynamic content.

Notes:
- Set `NEXT_PUBLIC_SITE_URL` in environment for accurate OpenGraph canonical URLs.
- Place OG images at `public/images/og/{home|services|goldenenergy|contact}.png` to populate social previews; defaults are referenced in `lib/seo.ts`.
