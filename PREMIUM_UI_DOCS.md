# Premium UI Components Documentation

## 🎨 Overview

Premium, cinematic UI components for GoldenCard website built with Next.js, Tailwind CSS, and Framer Motion. Inspired by Apple, Stripe, and Vercel's design systems.

## 📦 Components

### 1. PremiumHero
Full-screen hero section with animated gradient backgrounds and floating glow orbs.

```tsx
import { PremiumHero } from '@/components/premium-ui'

<PremiumHero
  locale="vi"
  headline="Your headline here"
  subheadline="Your subheadline"
  trustBullets={["Bullet 1", "Bullet 2", "Bullet 3"]}
  ctaPrimary="Get Started"
  ctaSecondary="Learn More"
  ctaPrimaryLink="/contact"
  ctaSecondaryLink="/services"
/>
```

**Features:**
- Animated glow orbs (gold & teal)
- Glassmorphism badge
- Staggered text animations
- Magnetic button hover effects
- Scroll indicator
- Fully responsive

---

### 2. PremiumServiceCard
Floating service card with hover lift and glow effects.

```tsx
import { PremiumServiceCard } from '@/components/premium-ui'
import { Zap } from 'lucide-react'

<PremiumServiceCard
  icon={Zap}
  title="Service Title"
  description="Service description text"
  link="/services/example"
  index={0} // for stagger animation
  features={["Feature 1", "Feature 2", "Feature 3"]}
/>
```

**Features:**
- Gradient glow on hover
- Icon animation with shine effect
- Floating lift animation
- Optional features list
- Arrow animation on hover

---

### 3. PremiumContactForm
Interactive contact form with focus glow states.

```tsx
import { PremiumContactForm } from '@/components/premium-ui'

<PremiumContactForm
  heading="Contact Us"
  description="Get in touch with our team"
  labels={{
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    message: "Message"
  }}
  placeholders={{
    name: "John Doe",
    email: "john@example.com",
    phone: "+84 xxx xxx xxx",
    company: "Your Company",
    message: "Your message..."
  }}
  buttonText="Send Message"
  successMessage="Message sent!"
  errorMessage="Error occurred"
  privacyNote="Your data is protected"
/>
```

**Features:**
- Animated glow on focus
- Loading and success states
- Glassmorphism background
- Floating orb decorations
- Form validation ready

---

### 4. PremiumSection
Reusable section wrapper with variants.

```tsx
import { PremiumSection } from '@/components/premium-ui'

<PremiumSection
  variant="gradient" // 'light' | 'white' | 'gradient' | 'dark'
  withOrbs={true}
  eyebrow="Why Choose Us"
  title="Section Title"
  description="Section description"
>
  {/* Your content here */}
</PremiumSection>
```

**Variants:**
- `light` - Subtle gradient from white to gray
- `white` - Pure white background
- `gradient` - Gold/teal gradient with orbs
- `dark` - Dark background for contrast

---

### 5. PremiumNavbar
Glassmorphism navigation with scroll effects.

```tsx
import { PremiumNavbar } from '@/components/premium-ui'

<PremiumNavbar
  locale="vi"
  navItems={[
    { label: "Home", href: "/vi" },
    { label: "Services", href: "/vi/services" }
  ]}
  tagline="Your company tagline"
/>
```

**Features:**
- Scroll-triggered glassmorphism
- Gradient text logo
- Animated underline on hover
- Mobile menu with slide animation
- Sticky positioning

---

### 6. PremiumStats
Animated counter statistics.

```tsx
import { PremiumStats } from '@/components/premium-ui'

<PremiumStats
  stats={[
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 20000, suffix: "+", label: "Partners" },
    { value: 200, suffix: "+", label: "Customers" },
    { value: 20, suffix: "B", label: "VND Revenue" }
  ]}
/>
```

**Features:**
- Spring-based counter animation
- Gradient glow effect
- Viewport-triggered animation
- Responsive grid layout

---

### 7. PremiumCTABanner
Full-width gradient CTA section.

```tsx
import { PremiumCTABanner } from '@/components/premium-ui'

<PremiumCTABanner
  title="Ready to get started?"
  description="Join thousands of businesses using GoldenCard"
  ctaText="Get Started"
  ctaLink="/contact"
  secondaryCtaText="Learn More"
  secondaryCtaLink="/about"
/>
```

**Features:**
- Animated gradient background
- Floating glow orbs
- Dual CTA buttons
- Sparkle icon animation
- Mesh pattern overlay

---

## 🎬 Motion Variants

All components use standardized motion variants from `lib/motion-variants.ts`:

### Container Variants
- `staggerContainer` - Parent container with stagger children

### Entrance Animations
- `fadeUp` - Fade in from bottom (primary)
- `fadeUpScale` - Fade + scale up
- `fadeIn` - Simple opacity fade
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `scaleIn` - Scale up entrance
- `zoomIn` - Slow zoom (for backgrounds)

### Hover Effects
- `hoverLift` - Lift up on hover
- `hoverGlow` - Glow effect on hover
- `magneticButton` - Magnetic button effect

### Decorative
- `glowPulse` - Pulsing glow animation
- `float` - Floating animation
- `rotateSlow` - Slow rotation

---

## 🎨 CSS Utilities

### Glassmorphism
```html
<div className="glass">Content</div>
<div className="glass-dark">Dark content</div>
```

### Premium Shadows
```html
<div className="shadow-lux">Luxury shadow</div>
<div className="shadow-float">Floating shadow</div>
<div className="shadow-glow-gold">Gold glow</div>
<div className="shadow-glow-teal">Teal glow</div>
```

### Text Gradients
```html
<h1 className="text-gradient-gold">Gold gradient</h1>
<h1 className="text-gradient-brand">Brand gradient</h1>
<h1 className="text-gradient-elegant">Elegant gradient</h1>
```

### Transitions
```html
<div className="transition-smooth">Smooth transition</div>
<div className="transition-spring">Spring transition</div>
<div className="hover-lift">Lift on hover</div>
```

### Gradient Borders
```html
<div className="border-gradient-gold">Gold border</div>
<div className="border-gradient-brand">Brand border</div>
```

---

## 🚀 Performance Tips

1. **Lazy Loading**: Components use `whileInView` for scroll-triggered animations
2. **Reduced Motion**: Respects `prefers-reduced-motion` setting
3. **Spring Physics**: Uses optimized spring configs for smooth animations
4. **Viewport Config**: Animations trigger at `amount: 0.3` to prevent jank

---

## 📱 Responsive Behavior

All components are fully responsive:
- Mobile: Single column, larger touch targets
- Tablet: Adaptive grid layouts
- Desktop: Full layout with hover effects

Breakpoints follow Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## ♿ Accessibility

- **Focus States**: Custom focus-visible styles
- **ARIA Labels**: Proper labeling on interactive elements
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML structure
- **Reduced Motion**: Respects user preferences

---

## 🎯 Usage Example

Complete page example:

```tsx
import {
  PremiumHero,
  PremiumSection,
  PremiumServiceCard,
  PremiumStats,
  PremiumCTABanner,
  PremiumContactForm
} from '@/components/premium-ui'

export default function HomePage() {
  return (
    <>
      <PremiumHero {...heroProps} />
      
      <PremiumSection variant="white" title="Our Services">
        <div className="grid md:grid-cols-3 gap-8">
          <PremiumServiceCard {...service1} index={0} />
          <PremiumServiceCard {...service2} index={1} />
          <PremiumServiceCard {...service3} index={2} />
        </div>
      </PremiumSection>

      <PremiumSection variant="gradient">
        <PremiumStats stats={statsData} />
      </PremiumSection>

      <PremiumSection variant="white">
        <PremiumCTABanner {...ctaProps} />
      </PremiumSection>

      <PremiumSection variant="light">
        <PremiumContactForm {...formProps} />
      </PremiumSection>
    </>
  )
}
```

---

## 🛠️ Customization

### Color System
Edit `app/globals.css` CSS variables:
- `--gc-gold`: Primary gold color
- `--gc-gold-*`: Gold variants
- Teal colors in Tailwind config

### Animation Timing
Edit `lib/motion-variants.ts`:
- Adjust duration values
- Modify easing curves
- Change spring configs

### Typography
Current setup:
- **Headings**: DM Sans (500-600 weight)
- **Body**: Plus Jakarta Sans (300-600 weight)

---

## 📄 License

Part of GoldenCard website. All rights reserved.
