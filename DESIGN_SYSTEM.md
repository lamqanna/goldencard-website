# 🎨 Golden Energy Design System

## Color Palette (Inspired by WGourmet)

### Primary Colors
```css
--gold-50:  #FDFBF7    /* Lightest beige background */
--gold-100: #F8F4E8    /* Light beige */
--gold-200: #F0E9D2    /* Soft beige */
--gold-300: #E8DDB5    /* Medium beige */
--gold-400: #D4AF37    /* Primary gold */
--gold-500: #C19A2E    /* Deep gold */
--gold-600: #A88228    /* Darker gold */
```

### Neutral Colors
```css
--gray-50:  #FAFAFA    /* Almost white */
--gray-100: #F5F5F5    /* Light gray */
--gray-200: #E5E5E5    /* Border gray */
--gray-300: #D4D4D4    /* Divider gray */
--gray-700: #4A4A4A    /* Text gray */
--gray-900: #2D2D2D    /* Heading black */
```

### Accent Colors
```css
--green-500: #10B981   /* Success/Solar green */
--blue-500:  #3B82F6   /* Link blue */
```

---

## Typography

### Font Family
```typescript
// Headings: Playfair Display (Serif - Luxury feel)
// Body: Inter (Sans-serif - Modern & readable)
```

### Font Sizes
```css
--text-xs:   0.75rem   /* 12px */
--text-sm:   0.875rem  /* 14px */
--text-base: 1rem      /* 16px */
--text-lg:   1.125rem  /* 18px */
--text-xl:   1.25rem   /* 20px */
--text-2xl:  1.5rem    /* 24px */
--text-3xl:  1.875rem  /* 30px */
--text-4xl:  2.25rem   /* 36px */
--text-5xl:  3rem      /* 48px */
--text-6xl:  3.75rem   /* 60px */
```

### Font Weights
```css
--font-light:   300
--font-normal:  400
--font-medium:  500
--font-semibold: 600
--font-bold:    700
```

---

## Spacing System

```css
--space-1:  0.25rem   /* 4px */
--space-2:  0.5rem    /* 8px */
--space-3:  0.75rem   /* 12px */
--space-4:  1rem      /* 16px */
--space-6:  1.5rem    /* 24px */
--space-8:  2rem      /* 32px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-24: 6rem      /* 96px */
--space-32: 8rem      /* 128px */
```

---

## Components

### Buttons
- **Primary**: Gold background, white text, subtle shadow
- **Secondary**: White background, gold border, gold text
- **Ghost**: Transparent, gold text, hover gold background

### Cards
- **Shadow**: soft shadow (0 4px 24px rgba(0,0,0,0.06))
- **Border**: 1px solid gray-200
- **Radius**: rounded-xl (12px)
- **Padding**: p-8 (32px)

### Images
- **Aspect Ratio**: 16:9, 4:3, 1:1
- **Object Fit**: cover
- **Lazy Loading**: enabled
- **Format**: WebP with fallback

---

## Animation Tokens

### Timing
```css
--duration-fast: 150ms
--duration-base: 200ms
--duration-slow: 300ms
--duration-slower: 500ms
```

### Easing
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Motion Variants (Framer Motion)
```typescript
fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}

scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}
```

---

## Layout Grid

### Breakpoints
```css
--screen-sm:  640px
--screen-md:  768px
--screen-lg:  1024px
--screen-xl:  1280px
--screen-2xl: 1536px
```

### Container
```css
max-width: 1280px
padding: 0 1.5rem (mobile)
padding: 0 2rem (tablet+)
margin: 0 auto
```

### Grid System
- **2 columns**: mobile
- **3 columns**: tablet (md)
- **4 columns**: desktop (lg+)
- **Gap**: 1.5rem (24px) mobile, 2rem (32px) desktop

---

## Iconography

### Style
- **Type**: Outline/Linear
- **Weight**: 1.5px stroke
- **Size**: 24px default, 32px large, 16px small
- **Color**: gray-700 (body), gold-400 (accent)

### Icon Library
- Lucide React (lightweight, consistent)
- Custom solar/energy icons

---

## Imagery Guidelines

### Photos
- **Style**: High-quality, professional, bright
- **Subject**: Solar panels, installations, happy customers
- **Treatment**: Slight warm overlay (gold tint)
- **Compression**: WebP, 80% quality
- **Loading**: Lazy load below fold

### Illustrations
- **Style**: Minimal, line-art
- **Colors**: Gold + gray monochrome
- **Usage**: Benefits section, process steps

---

## Accessibility

- **Contrast Ratio**: WCAG AA minimum (4.5:1 text, 3:1 UI)
- **Focus States**: Visible outline (gold-400, 2px)
- **Alt Text**: All images
- **Semantic HTML**: Proper headings, landmarks
- **Keyboard Navigation**: Full support

---

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Total Blocking Time**: < 200ms
- **Cumulative Layout Shift**: < 0.1
- **Image Optimization**: WebP, lazy loading, responsive srcset
- **Code Splitting**: Route-based, component lazy load
