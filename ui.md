# 0rca UI Design System

## 🎨 Color Palette

### Primary Colors
```css
--background: #0b1c2c;        /* Deep Midnight Blue */
--foreground: #ffffff;        /* Pure White */
--primary: #33e0ff;          /* Aqua Cyan (Brand Color) */
--primary-foreground: #05090e; /* Abyss Black */
--border: #1e90a0;           /* Ocean Teal */
--secondary: #6b7b8c;        /* Slate Gray */
```

### Accent & Effect Colors
```css
--scrim: rgba(0, 0, 0, 0.4); /* Black Overlay */
--glow: #EBB800;             /* Golden Yellow (Button Glow) */
--radius: 0.625rem;          /* 10px Border Radius */
```

## 🔤 Typography

### Fonts
- **Primary**: `GeistMono` (Monospace) - UI elements, navigation, buttons
- **Display**: `Sentient` (Custom) - Headlines and hero text
  - Extralight (200) - `/Sentient-Extralight.woff`
  - Light Italic (300) - `/Sentient-LightItalic.woff`

### Text Patterns
- **Navigation**: `uppercase font-mono text-foreground/80`
- **Headings**: `font-sentient text-5xl-7xl`
- **Body**: `font-mono text-sm-base text-secondary`
- **Descriptions**: `text-muted-foreground text-sm`

## 🧩 Component Patterns

### Buttons
```css
/* Polygonal clip-path design */
clip-path: polygon(var(--poly-roundness) 0, calc(100% - var(--poly-roundness)) 0, 100% 0, 100% calc(100% - var(--poly-roundness)), calc(100% - var(--poly-roundness)) 100%, 0 100%, 0 calc(100% - var(--poly-roundness)), 0 var(--poly-roundness));

/* Golden glow effect */
box-shadow: inset 0 0 54px 0px #EBB800;
```

### Cards
```css
/* Standard card styling */
bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm
```

### Layout Spacing
- **Container**: `container mx-auto px-6`
- **Gaps**: `gap-6` (24px) standard, `gap-3 sm:gap-4` for buttons
- **Padding**: `px-6 py-6` for cards, `pt-8 md:pt-14` for header

## 🎭 Animation & Effects

### Transitions
```css
/* Standard transitions */
transition-all duration-300 ease-out
transition-colors ease-out duration-150

/* Reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 600ms ease, transform 600ms ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover States
- **Links**: `hover:text-primary`
- **Cards**: `hover:border-primary/50`
- **Buttons**: `hover:brightness-90` or `hover:bg-primary/20`

## 📱 Responsive Patterns

### Breakpoints
- **Mobile**: Base styles
- **SM**: `sm:text-base`, `sm:text-6xl`, `sm:gap-4`
- **MD**: `md:text-7xl`, `md:pt-14`, `md:grid-cols-2`
- **LG**: `max-lg:hidden`, `lg:grid-cols-3`

### Navigation
- **Desktop**: Fixed centered nav with links
- **Mobile**: Hamburger menu (MobileMenu component)

## 🏗️ Layout Structure

### Page Structure
```tsx
<div className="min-h-screen bg-background pt-32 pb-16">
  <div className="container mx-auto px-6">
    {/* Page content */}
  </div>
</div>
```

### Header Pattern
```tsx
<header className="fixed z-50 top-0 left-0 w-full">
  <nav className="flex items-center justify-center gap-x-10 fixed left-1/2 top-8 md:top-14 -translate-x-1/2 z-50">
    {/* Navigation items */}
  </nav>
</header>
```

## 🎯 Usage Guidelines

### For Forums Implementation
1. Use `#0b1c2c` background with `#ffffff` text
2. Apply `#33e0ff` for primary actions and highlights
3. Use `GeistMono` for all UI text, `Sentient` for page titles
4. Implement card-based layouts with `rounded-xl border`
5. Add golden glow effects (`#EBB800`) for interactive elements
6. Maintain `gap-6` spacing and `px-6 py-6` padding
7. Use uppercase `font-mono` for section headers
8. Apply hover states with `transition-colors ease-out duration-150`

### Component Hierarchy
- **Page Title**: `text-5xl md:text-6xl font-sentient`
- **Section Headers**: `font-mono uppercase text-sm`
- **Body Text**: `text-secondary text-sm`
- **Meta Info**: `text-muted-foreground text-xs`