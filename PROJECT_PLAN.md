# GoldenCard Website – Technical & Design Plan

This document outlines the full-stack architecture and UX plan for GoldenCard and the GoldenEnergy subsite, using the bilingual brand content in `marketing-content.json`.

## 1) Tech stack summary (versions)
- Next.js 14.x (App Router)
- TypeScript 5.x
- Tailwind CSS 3.x
- Framer Motion 11.x
- Sanity CMS (optional, 2024-10 API)
- Testing: Playwright 1.48+ (e2e), Vitest/Jest + Testing Library (unit)
- Lint/Format: ESLint + Prettier
- Analytics: Vercel Analytics (optional) or GA4
- i18n: Next.js built-in i18n routing (default vi, secondary en)

## 2) Project file structure
```
root
├─ app/
│  ├─ (vi)/
│  │  ├─ page.tsx                # Home (vi)
│  │  ├─ services/page.tsx       # Services (vi)
│  │  ├─ goldenenergy/page.tsx   # GoldenEnergy (vi)
│  │  └─ contact/page.tsx        # Contact (vi)
│  ├─ (en)/
│  │  ├─ page.tsx                # Home (en)
│  │  ├─ services/page.tsx       # Services (en)
│  │  ├─ goldenenergy/page.tsx   # GoldenEnergy (en)
│  │  └─ contact/page.tsx        # Contact (en)
│  ├─ api/contact/route.ts       # Form submission endpoint
│  ├─ layout.tsx                 # Root layout, font, theme providers
│  └─ globals.css                # Tailwind base + CSS variables
├─ components/
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ ServiceCard.tsx
│  ├─ ProductGrid.tsx
│  ├─ CaseStudy.tsx
│  ├─ ContactForm.tsx
│  ├─ Footer.tsx
│  ├─ LocaleSwitcher.tsx
│  ├─ Container.tsx
│  └─ Section.tsx
├─ lib/
│  ├─ content.ts                 # Load marketing-content.json, typed
│  ├─ i18n.ts                    # Locale helpers
│  ├─ seo.ts                     # Metadata builders per page/locale
│  └─ analytics.ts               # (optional)
├─ public/
│  ├─ images/og/home.png
│  ├─ images/og/services.png
│  ├─ images/og/goldenenergy.png
│  └─ favicon.ico
├─ marketing-content.json        # Bilingual content source
├─ project-plan.json             # Machine-readable plan (this doc mirrored)
├─ next.config.mjs
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
├─ .eslintrc.cjs
├─ .prettierrc
└─ README.md
```

## 3) Design system
### Colors
Primary gold palette + neutrals:
- Gold scale: 50 #FFFBEB, 100 #FEF3C7, 200 #FDE68A, 300 #FCD34D, 400 #F59E0B, 500 #D4AF37, 600 #B38E1F, 700 #8C6D12, 800 #6B4E0B, 900 #4A3507
- Neutrals: 50 #F9FAFB, 100 #F3F4F6, 200 #E5E7EB, 300 #D1D5DB, 400 #9CA3AF, 500 #6B7280, 600 #4B5563, 700 #374151, 800 #1F2937, 900 #111827
- Accent: Green #10B981, Blue #2563EB, Red #DC2626

### Typography
- Headings: "Inter Tight", fallback system sans
- Body: Inter, fallback system sans
- Sizes:
  - h1: clamp(2.25rem, 2vw + 1.5rem, 3.5rem)
  - h2: clamp(1.75rem, 1.5vw + 1rem, 2.5rem)
  - h3: clamp(1.5rem, 1vw + 0.75rem, 2rem)
  - h4: 1.25rem
  - h5: 1.125rem
  - body: 1rem; small: 0.875rem

### Spacing scale
0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64

### Components
- Navbar: sticky, translucent on scroll, locale switcher
- Hero: headline, subheadline, CTAs, subtle motion
- ServiceCard: icon, title, bullets, link
- ProductGrid: responsive grid of items
- CaseStudy: story + KPIs
- ContactForm: validation, honeypot, success/error states
- Footer: contacts, social, legal, language

## 4) Sitemap and routing strategy
- Default locale: vi; locales: [vi, en]
- Paths: /(locale)/, /(locale)/services, /(locale)/goldenenergy, /(locale)/contact
- GoldenEnergy: start with path /goldenenergy to consolidate SEO; consider subdomain energy.goldencard.vn later. Rewrites map /goldenenergy/* to locale route internally.

## 5) Performance & SEO strategy
- Rendering choices:
  - Home: SSG + ISR(3600s)
  - Services: SSG + ISR(86400s)
  - GoldenEnergy: SSG + ISR(86400s)
  - Contact: SSR (for CSRF) or static + client action
- SEO:
  - Titles/descriptions from marketing-content.json per locale
  - OpenGraph/Twitter tags; canonical per locale
  - Schema.org: Organization, Service, Product, BreadcrumbList, FAQPage (optional)
- Performance:
  - LCP < 2.0s, CLS < 0.05, INP < 200ms
  - next/font preloads; image optimization; route-level code splitting; reduced motion support

## 6) Accessibility rules & Lighthouse targets
- WCAG AA contrast >= 4.5:1
- Keyboard navigable; visible focus
- Semantic landmarks (header, main, footer)
- ARIA labels for icons and controls
- Forms with labels, descriptions, error text
- Honor prefers-reduced-motion
- Lighthouse targets: Perf 95, A11y 100, Best Practices 100, SEO 100

## 7) Tailwind config + global CSS
### tailwind.config.js snippet
```js
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {50: '#FFFBEB',100:'#FEF3C7',200:'#FDE68A',300:'#FCD34D',400:'#F59E0B',500:'#D4AF37',600:'#B38E1F',700:'#8C6D12',800:'#6B4E0B',900:'#4A3507'},
        neutral: {50:'#F9FAFB',100:'#F3F4F6',200:'#E5E7EB',300:'#D1D5DB',400:'#9CA3AF',500:'#6B7280',600:'#4B5563',700:'#374151',800:'#1F2937',900:'#111827'}
      },
      fontFamily: {
        heading: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

### Global CSS variables (in `app/globals.css`)
```css
:root{
  --gc-gold:#D4AF37;
  --gc-gold-600:#B38E1F;
  --gc-text:#111827;
  --gc-bg:#FFFFFF;
  --gc-muted:#6B7280;
  --gc-accent:#10B981;
  --radius:12px;
}
@media(prefers-color-scheme:dark){
  :root{--gc-text:#F9FAFB;--gc-bg:#0B0B0C;--gc-muted:#9CA3AF;}
}
```

## Example semantic HTML for Home page
```html
<header>
  <nav aria-label="Main">...Navbar...</nav>
  
</header>
<main>
  <section id="hero" aria-labelledby="hero-heading">
    <h1 id="hero-heading">Giải pháp thẻ và năng lượng</h1>
    <p>Subheadline...</p>
    <div role="group" aria-label="Primary actions">
      <a class="btn btn-primary" href="#contact">Nhận tư vấn</a>
      <a class="btn btn-secondary" href="/services">Khám phá dịch vụ</a>
    </div>
  </section>
  <section id="services" aria-labelledby="services-heading">
    <h2 id="services-heading">Dịch vụ</h2>
    <div class="grid">...ServiceCard...</div>
  </section>
  <section id="why" aria-labelledby="why-heading">
    <h2 id="why-heading">Vì sao chọn GoldenCard</h2>
    <p>...</p>
  </section>
  <section id="products" aria-labelledby="products-heading">
    <h2 id="products-heading">Sản phẩm</h2>
    <div class="grid">...ProductGrid...</div>
  </section>
  <section id="case-studies" aria-labelledby="case-studies-heading">
    <h2 id="case-studies-heading">Dự án tiêu biểu</h2>
    <article>...CaseStudy...</article>
  </section>
  <section id="contact" aria-labelledby="contact-heading">
    <h2 id="contact-heading">Liên hệ</h2>
    <form aria-describedby="contact-desc">
      <p id="contact-desc">Nhập thông tin để nhận tư vấn.</p>
      ...ContactForm...
    </form>
  </section>
</main>
<footer>...Footer...</footer>
```

## Quick start (optional)
- Deploy target: Vercel
- SSG/ISR config via generateStaticParams and revalidate
- Pull content from `marketing-content.json` via a typed loader; migrate to Sanity later without route changes.
