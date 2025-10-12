# 0rca Complete Frontend Design System

## 🎨 Color Palette & Theme System

### Primary Colors
```css
--background: #0b1c2c;        /* Deep Midnight Blue */
--foreground: #ffffff;        /* Pure White */
--primary: #33e0ff;          /* Aqua Cyan (Brand Color) */
--primary-foreground: #05090e; /* Abyss Black */
--border: #1e90a0;           /* Ocean Teal */
--secondary: #6b7b8c;        /* Slate Gray */
```

### Extended Color System
```css
/* Semantic Colors */
--card: oklch(1 0 0);                    /* White Cards */
--card-foreground: oklch(0.145 0 0);     /* Dark Text on Cards */
--muted: oklch(0.97 0 0);                /* Light Gray */
--muted-foreground: oklch(0.556 0 0);    /* Medium Gray Text */
--accent: oklch(0.97 0 0);               /* Light Accent */
--accent-foreground: oklch(0.205 0 0);   /* Dark Accent Text */
--destructive: oklch(0.577 0.245 27.325); /* Red for Errors */
--input: oklch(0.922 0 0);               /* Input Background */
--ring: oklch(0.708 0 0);                /* Focus Ring */

/* Effect Colors */
--scrim: rgba(0, 0, 0, 0.4);            /* Black Overlay */
--glow: #EBB800;                         /* Golden Yellow (Button Glow) */
--backdrop-blur: backdrop-blur-md;        /* Glass Effect */

/* Geometric Properties */
--radius: 0.625rem;                      /* 10px Border Radius */
--poly-roundness: 16px;                  /* Polygonal Button Corners */
```

### Dark Mode Support
```css
.dark {
  --background: oklch(0.145 0 0);        /* Dark Background */
  --foreground: oklch(0.985 0 0);        /* Light Text */
  --card: oklch(0.145 0 0);              /* Dark Cards */
  --border: oklch(0.269 0 0);            /* Dark Borders */
  --secondary: oklch(0.269 0 0);         /* Dark Secondary */
}
```

## 🔤 Typography System

### Font Stack
```css
/* Primary Fonts */
--font-mono: 'GeistMono', 'Courier New', monospace;
--font-display: 'Sentient', 'Georgia', serif;

/* Font Files */
@font-face {
  font-family: 'Sentient';
  src: url('/Sentient-Extralight.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: 'Sentient';
  src: url('/Sentient-LightItalic.woff') format('woff');
  font-weight: 300;
  font-style: italic;
}
```

### Typography Scale
```css
/* Display Headings */
.text-hero: text-5xl sm:text-6xl md:text-7xl font-sentient
.text-section: text-3xl md:text-4xl font-sentient
.text-card-title: text-xl font-sentient

/* UI Text */
.text-nav: uppercase font-mono text-foreground/80
.text-button: uppercase font-mono font-medium
.text-label: font-mono text-sm uppercase
.text-body: font-mono text-sm text-secondary
.text-caption: text-muted-foreground text-xs
```

### Text Hierarchy
- **Hero**: `text-5xl-7xl font-sentient` (48-72px)
- **Section Headers**: `text-3xl-4xl font-sentient` (30-36px)
- **Card Titles**: `text-xl font-sentient` (20px)
- **Navigation**: `uppercase font-mono text-foreground/80`
- **Body Text**: `font-mono text-sm-base text-secondary`
- **Captions**: `text-muted-foreground text-xs`

## 🧩 Component Architecture

### Button System
```tsx
/* Polygonal Button Design */
const buttonVariants = {
  base: `inline-flex relative uppercase border font-mono cursor-pointer 
         items-center font-medium justify-center gap-2 whitespace-nowrap 
         ease-out transition-all duration-300 outline-none
         [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_0,100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,0_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]`,
  
  variants: {
    default: `bg-background border-primary text-primary-foreground 
              [box-shadow:inset_0_0_54px_0px_var(--tw-shadow-color)] 
              shadow-[#EBB800] hover:shadow-[#EBB800]/80`,
    outline: `border-[var(--border)] text-foreground 
              hover:bg-[color:var(--border)]/10 bg-transparent`
  },
  
  sizes: {
    default: 'h-16 px-6 text-base',
    sm: 'h-14 px-6 text-sm'
  }
}

/* Geometric Properties */
--poly-roundness: 16px;
--hypotenuse: 32px; /* polyRoundness * 2 */
--hypotenuse-half: 6.5px; /* (polyRoundness / 2) - 1.5 */
```

### Card System
```tsx
/* Card Variants */
const cardVariants = {
  base: `bg-card text-card-foreground flex flex-col gap-6 
         rounded-xl border py-6 shadow-sm`,
  
  glass: `rounded-lg border border-[var(--border)]/40 p-6 
          backdrop-blur-md bg-[color:var(--scrim)]`,
  
  interactive: `hover:border-primary/50 transition-colors cursor-pointer`
}

/* Card Structure */
<Card>
  <CardHeader>     /* grid auto-rows-min items-start gap-2 px-6 */
    <CardTitle />   /* leading-none font-semibold */
    <CardAction />  /* col-start-2 row-span-2 justify-self-end */
  </CardHeader>
  <CardContent />   /* px-6 */
  <CardFooter />    /* flex items-center px-6 */
</Card>
```

### Input System
```tsx
const inputVariants = {
  base: `h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 
         text-base shadow-xs transition-[color,box-shadow] outline-none 
         placeholder:text-muted-foreground selection:bg-primary 
         selection:text-primary-foreground`,
  
  focus: `focus-visible:border-ring focus-visible:ring-ring/50 
          focus-visible:ring-[3px]`,
  
  error: `aria-invalid:ring-destructive/20 aria-invalid:border-destructive`
}
```

### Badge System
```tsx
const badgeVariants = {
  base: `inline-flex items-center justify-center rounded-md border 
         px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap 
         shrink-0 gap-1 transition-[color,box-shadow]`,
  
  variants: {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    outline: 'text-foreground hover:bg-accent hover:text-accent-foreground'
  }
}
```

### Layout System
```css
/* Container System */
.container: max-width responsive with auto margins
.container-sm: max-w-3xl mx-auto
.container-md: max-w-4xl mx-auto  
.container-lg: max-w-7xl mx-auto

/* Spacing Scale */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-28: 7rem;    /* 112px */

/* Standard Patterns */
.section-padding: py-20 md:py-28
.card-padding: px-6 py-6
.content-gap: gap-6
.button-gap: gap-3 sm:gap-4
```

## 🎭 Animation & Effects System

### Transition Library
```css
/* Base Transitions */
.transition-fast: transition-all duration-150 ease-out
.transition-normal: transition-all duration-300 ease-out
.transition-slow: transition-all duration-500 ease-out
.transition-colors: transition-colors ease-out duration-150
.transition-transform: transition-transform duration-300 ease-out

/* Easing Functions */
easing-out: cubic-bezier(0, 0, 0.2, 1)
easing-in: cubic-bezier(0.4, 0, 1, 1)
easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Reveal Animation System
```css
/* Scroll-triggered Reveals */
.reveal {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 600ms ease, transform 600ms ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered Animations */
.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 100ms; }
.reveal:nth-child(3) { transition-delay: 200ms; }
```

### Interactive States
```css
/* Hover Effects */
.hover-primary: hover:text-primary
.hover-glow: hover:shadow-[#EBB800]/80
.hover-lift: hover:-translate-y-1
.hover-scale: hover:scale-105
.hover-border: hover:border-primary/50
.hover-bg: hover:bg-primary/10

/* Focus States */
.focus-ring: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
.focus-primary: focus-visible:ring-primary/20

/* Active States */
.active-scale: active:scale-95
.active-glow: active:shadow-[#EBB800]
```

### Glass Morphism Effects
```css
/* Backdrop Effects */
.glass-light: backdrop-blur-md bg-[color:var(--scrim)]
.glass-heavy: backdrop-blur-lg bg-black/20
.glass-border: border border-[var(--border)]/40

/* Gradient Overlays */
.gradient-radial: bg-gradient-radial from-primary/20 to-transparent
.gradient-linear: bg-gradient-to-br from-primary/10 to-secondary/10
```

### SVG Animations
```css
/* Animated Paths */
.path-draw {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s ease-in-out forwards;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}

/* Pulsing Effects */
.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
```

## 📱 Responsive Design System

### Breakpoint Strategy
```css
/* Tailwind Breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */

/* Mobile-First Approach */
.responsive-text {
  @apply text-sm sm:text-base md:text-lg lg:text-xl;
}

.responsive-heading {
  @apply text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl;
}

.responsive-spacing {
  @apply py-12 sm:py-16 md:py-20 lg:py-28;
}
```

### Grid Systems
```css
/* Responsive Grids */
.grid-responsive-2: grid md:grid-cols-2 gap-6
.grid-responsive-3: grid md:grid-cols-2 lg:grid-cols-3 gap-6
.grid-responsive-4: grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6

/* Flexible Layouts */
.flex-responsive: flex flex-col sm:flex-row gap-4 sm:gap-6
.stack-mobile: flex flex-col lg:flex-row
```

### Navigation Patterns
```tsx
/* Desktop Navigation */
<nav className="flex max-lg:hidden items-center justify-center gap-x-10 
                fixed left-1/2 top-8 md:top-14 -translate-x-1/2 z-50">
  {/* Navigation links */}
</nav>

/* Mobile Menu */
<Dialog.Root>
  <Dialog.Trigger className="group lg:hidden p-2">
    <Menu className="group-[[data-state=open]]:hidden" />
    <X className="hidden group-[[data-state=open]]:block" />
  </Dialog.Trigger>
  <Dialog.Content className="fixed top-0 left-0 w-full z-40 py-28">
    {/* Mobile navigation */}
  </Dialog.Content>
</Dialog.Root>
```

### Container Patterns
```css
/* Responsive Containers */
.container-full: w-full px-4 sm:px-6 lg:px-8
.container-content: max-w-3xl mx-auto px-6
.container-wide: max-w-7xl mx-auto px-6
.container-section: container max-w-7xl mx-auto
```

## 🏗️ Layout Architecture

### Page Templates
```tsx
/* Standard Page Layout */
<div className="min-h-screen bg-background">
  <Header />  {/* Fixed header with auto-hide */}
  <main className="pt-32 pb-16">
    <div className="container mx-auto px-6">
      {/* Page content */}
    </div>
  </main>
</div>

/* Hero Page Layout */
<div className="flex flex-col h-svh justify-between relative">
  <GL />  {/* WebGL background */}
  <div className="absolute top-8 left-8 z-10">
    {/* Logo */}
  </div>
  <div className="pb-16 mt-auto text-center relative">
    {/* Hero content */}
  </div>
</div>

/* Section Layout */
<section className="py-20 md:py-28 text-center">
  <div className="container max-w-7xl mx-auto">
    <Reveal>
      <h2 className="text-3xl md:text-4xl font-sentient">
        {/* Section title */}
      </h2>
    </Reveal>
    {/* Section content */}
  </div>
</section>
```

### Header System
```tsx
/* Auto-hiding Header */
const Header = () => {
  const [visible, setVisible] = useState(true)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    // Observe hero sentinel
  }, [])
  
  return (
    <div className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${
      visible ? "opacity-100" : "opacity-0 -translate-y-2 pointer-events-none"
    }`}>
      <header className="relative container pt-8 md:pt-14">
        {/* Navigation */}
      </header>
    </div>
  )
}
```

### Z-Index Scale
```css
/* Z-Index Hierarchy */
z-background: -1     /* Background elements */
z-base: 0           /* Base content */
z-elevated: 10      /* Cards, dropdowns */
z-overlay: 20       /* Modals, overlays */
z-navigation: 30    /* Mobile menu overlay */
z-header: 40        /* Mobile menu content */
z-fixed: 50         /* Fixed header */
z-tooltip: 60       /* Tooltips */
z-toast: 70         /* Toast notifications */
```

## 🎨 Advanced Visual Effects

### WebGL Integration
```tsx
/* 3D Particle System */
<Canvas camera={{ position: [1.26, 2.66, -1.82], fov: 50 }}>
  <color attach="background" args={["#000"]} />
  <Particles 
    speed={1.0}
    noiseScale={0.6}
    noiseIntensity={0.52}
    pointSize={10.0}
    opacity={0.8}
  />
  <Effects>
    <shaderPass args={[VignetteShader]} />
  </Effects>
</Canvas>
```

### SVG Animations
```tsx
/* Animated Connection Lines */
<svg viewBox="0 0 100 50" className="w-full h-full">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="1.5" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <path 
    d="M10,15 L50,15 L90,15" 
    stroke="var(--primary)" 
    strokeWidth="0.6"
    filter="url(#glow)"
  >
    <animate 
      attributeName="stroke-opacity" 
      values="0.3;1;0.3" 
      dur="2.6s" 
      repeatCount="indefinite" 
    />
  </path>
</svg>
```

### Shader Effects
```glsl
/* Vignette Shader */
uniform float darkness;
uniform float offset;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec2 center = vec2(0.5, 0.5);
  float dist = distance(uv, center);
  float vignette = smoothstep(offset, offset + darkness, dist);
  gl_FragColor = vec4(color.rgb * (1.0 - vignette), color.a);
}
```

## 🎯 Implementation Guidelines

### Design Principles
1. **Cyberpunk Aesthetic**: Dark backgrounds, neon accents, geometric shapes
2. **Monospace Typography**: Technical, futuristic feel with GeistMono
3. **Glass Morphism**: Backdrop blur effects with subtle borders
4. **Polygonal Design**: Clipped corners and geometric button shapes
5. **Animated Interactions**: Smooth transitions and glow effects
6. **Mobile-First**: Responsive design starting from mobile

### Component Usage Patterns
```tsx
/* Page Structure */
<PageLayout>
  <PageHeader title="Forums" subtitle="Community discussions" />
  <PageContent>
    <CardGrid>
      <Card variant="glass" interactive>
        <CardHeader>
          <CardTitle>Discussion Topic</CardTitle>
          <Badge variant="outline">42 posts</Badge>
        </CardHeader>
        <CardContent>
          <p className="text-secondary text-sm">Description...</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">View Thread</Button>
        </CardFooter>
      </Card>
    </CardGrid>
  </PageContent>
</PageLayout>
```

### Accessibility Standards
```css
/* Focus Management */
.focus-visible: focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary

/* Color Contrast */
WCAG AA: 4.5:1 minimum contrast ratio
WCAG AAA: 7:1 enhanced contrast ratio

/* Screen Reader Support */
.sr-only: position absolute, width 1px, height 1px, overflow hidden
```

### Performance Optimizations
```tsx
/* Lazy Loading */
const LazyComponent = lazy(() => import('./Component'))

/* Image Optimization */
<Image 
  src="/image.jpg" 
  alt="Description" 
  width={800} 
  height={600}
  priority={false}
  placeholder="blur"
/>

/* Code Splitting */
const { Component } = await import('./heavy-component')
```

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **CSS Features**: CSS Grid, Flexbox, Custom Properties, Backdrop Filter
- **JavaScript**: ES2020+, Optional Chaining, Nullish Coalescing

### File Organization
```
components/
├── ui/           # Base UI components
├── sections/     # Page sections
├── layout/       # Layout components
└── features/     # Feature-specific components

styles/
├── globals.css   # Global styles
├── components/   # Component styles
└── utilities/    # Utility classes
```

## 🔧 Development Tools

### Build Configuration
```typescript
/* next.config.ts */
export default {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-*']
  },
  images: {
    formats: ['image/webp', 'image/avif']
  }
}
```

### Linting & Formatting
```json
/* .eslintrc.json */
{
  "extends": ["next/core-web-vitals", "@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "prefer-const": "error"
  }
}
```

### Testing Strategy
```tsx
/* Component Testing */
import { render, screen } from '@testing-library/react'
import { Button } from './button'

test('renders button with correct styles', () => {
  render(<Button>Click me</Button>)
  const button = screen.getByRole('button')
  expect(button).toHaveClass('font-mono', 'uppercase')
})
```