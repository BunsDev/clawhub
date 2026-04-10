# ClawHub Design System

This document captures the design principles, layout choices, component structures, and style guidelines used throughout the ClawHub platform.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing Scale](#spacing-scale)
5. [Border Radius](#border-radius)
6. [Layout Patterns](#layout-patterns)
7. [Component Library](#component-library)
8. [Page Templates](#page-templates)
9. [Responsive Behavior](#responsive-behavior)
10. [Accessibility Guidelines](#accessibility-guidelines)
11. [Motion & Interaction](#motion--interaction)
12. [Dark/Light Mode](#darklight-mode)

---

## Design Philosophy

ClawHub follows a **TUI-inspired (Terminal User Interface)** aesthetic that emphasizes:

- **Monospace-first typography** — All text uses IBM Plex Mono for a developer-centric feel
- **Sharp corners** — Minimal border radius (1-2px) for a crisp, utilitarian look
- **Dense information hierarchy** — Efficient use of space while maintaining clarity
- **Monochrome palette** — Neutral base with strategic accent colors
- **Functional over decorative** — Every element serves a purpose

### Core Tenets

1. **Builder-centric** — Designed for developers and power users
2. **Scannable** — Dense but navigable layouts
3. **Discoverable** — Clear pathways to explore content
4. **Trustworthy** — Security and verification indicators are prominent
5. **Fast** — Minimal visual weight, quick to parse

---

## Color System

### CSS Custom Properties

All colors are defined as CSS custom properties in `:root` and can be overridden for theming.

#### Core Palette (Dark Theme - Default)

```css
--bg: #0a0a0a;           /* Page background */
--bg-soft: #111111;      /* Subtle background variation */
--surface: #141414;      /* Card/component backgrounds */
--surface-muted: #1a1a1a;/* Muted surface for nested elements */
--ink: #e0e0e0;          /* Primary text */
--ink-soft: #818181;     /* Secondary/muted text */
--accent: #ffffff;       /* Primary accent (buttons, links) */
--accent-fg: #0a0a0a;    /* Text on accent backgrounds */
--accent-deep: #cccccc;  /* Darker accent variant */
```

#### Status Colors

```css
--status-success-bg: rgba(255, 255, 255, 0.06);
--status-success-fg: #a0a0a0;
--status-warning-bg: rgba(255, 255, 255, 0.06);
--status-warning-fg: #999999;
--status-error-bg: rgba(255, 255, 255, 0.06);
--status-error-fg: #b0b0b0;
```

#### Diff Colors (Code Comparison)

```css
--diff-added: #4a9;
--diff-added-strong: #3a8;
--diff-removed: #e55;
--diff-removed-strong: #c44;
```

#### Border & Line Colors

```css
--line: rgba(255, 255, 255, 0.08);
--border-ui: rgba(255, 255, 255, 0.15);
--border-ui-hover: rgba(255, 255, 255, 0.25);
--border-ui-active: rgba(255, 255, 255, 0.4);
```

### Usage Guidelines

- Use `--ink` for primary text, `--ink-soft` for secondary/metadata
- Use `--surface` for cards and elevated elements
- Use `--line` for subtle dividers, `--border-ui` for interactive element borders
- Use status colors sparingly and only for actual status communication

---

## Typography

### Font Stack

```css
--font-display: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
--font-body: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
--font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
```

All typography uses IBM Plex Mono to maintain the TUI aesthetic.

### Type Scale

| Token       | Size     | Use Case                          |
|-------------|----------|-----------------------------------|
| `--fs-xs`   | 0.72rem  | Badges, metadata, timestamps      |
| `--fs-sm`   | 0.82rem  | Secondary text, captions          |
| `--fs-base` | 0.88rem  | Body text (default)               |
| `--fs-md`   | 1rem     | Emphasized body, card titles      |
| `--fs-lg`   | 1.1rem   | Section titles                    |
| `--fs-xl`   | 1.25rem  | Page subtitles                    |
| `--fs-2xl`  | 1.5rem   | Page titles                       |
| `--fs-3xl`  | 2rem     | Hero headlines                    |

### Typography Guidelines

- **Letter spacing**: `-0.01em` for body text
- **Line height**: Use Tailwind's `leading-relaxed` for multi-line content
- **Font weight**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Text wrapping**: Use `text-balance` or `text-pretty` for headlines

---

## Spacing Scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
```

### Usage Guidelines

- Use `space-2` (8px) for tight spacing within components
- Use `space-3` (12px) for internal component padding
- Use `space-4` (16px) for standard component spacing
- Use `space-5` (24px) for section gaps
- Use `space-6` or higher for major section separation

---

## Border Radius

```css
--r-lg: 2px;
--r-md: 2px;
--r-sm: 1px;
--r-xs: 1px;
--r-pill: 1px;
```

ClawHub uses **minimal border radius** (1-2px) for a sharp, TUI-like aesthetic. This is intentional and should be maintained throughout the application.

---

## Layout Patterns

### Page Structure

```
┌─────────────────────────────────────────────────┐
│  Navbar (sticky, blur backdrop)                 │
├─────────────────────────────────────────────────┤
│  Main Content Area                              │
│  ┌───────────────────────────────────────────┐  │
│  │  Section (max-width: 1536px, centered)    │  │
│  │                                           │  │
│  │  Content...                               │  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
├─────────────────────────────────────────────────┤
│  Footer                                         │
└─────────────────────────────────────────────────┘
```

### Layout Widths

```css
--page-max: 1536px;     /* Maximum content width */
--page-narrow: 900px;   /* Narrow content (forms, articles) */
--page-min: 320px;      /* Minimum supported width */
```

### Detail Page Layout (Full-Width)

The detail pages use a **full-width layout** with a horizontal metadata bar:

```
┌─────────────────────────────────────────────────┐
│  Skill Header (title, version, badges)          │
├─────────────────────────────────────────────────┤
│  Metadata Bar                                   │
│  [Download] [Stats] [Details] [Tags] [Publisher]│
├─────────────────────────────────────────────────┤
│  Tab Content (README, Files, Compare, Versions) │
│  ─────────────────────────────────────────────  │
│  Full-width content area for maximum readability│
├─────────────────────────────────────────────────┤
│  Comments Section                               │
└─────────────────────────────────────────────────┘
```

### Grid System

Use CSS Grid for complex layouts:

```css
/* Results grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
}
```

### Flexbox Patterns

Use Flexbox for component-level layouts:

```css
/* Horizontal alignment */
display: flex;
align-items: center;
gap: var(--space-2);

/* Space between */
display: flex;
justify-content: space-between;
align-items: center;
```

---

## Component Library

### Cards (`.card`)

Base container for elevated content.

```css
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  padding: var(--space-4);
}
```

### Buttons

| Variant     | Use Case                    |
|-------------|----------------------------|
| `primary`   | Primary actions             |
| `secondary` | Secondary actions           |
| `ghost`     | Tertiary/subtle actions     |
| `danger`    | Destructive actions         |

### Badges (`.badge`)

| Variant   | Use Case                     |
|-----------|------------------------------|
| `default` | Standard badges              |
| `accent`  | Highlighted/featured items   |
| `compact` | Small inline badges          |

### Tabs

Tab navigation uses a simple button-based pattern:

```html
<div class="tab-header">
  <button class="tab-button is-active">Tab 1</button>
  <button class="tab-button">Tab 2</button>
</div>
<div class="tab-body">
  <!-- Content -->
</div>
```

### Forms

- Input fields use `--input-*` custom properties
- Focus states show `--border-ui-active`
- Labels use `--label-fg` color
- Error states use `--status-error-*` colors

---

## Page Templates

### Home Page

- Hero section with gradient background
- Quick discovery panels
- Trending/recent/staff picks sections
- Category navigation

### Search/Browse Pages

- Search input at top
- Filter sidebar (collapsible on mobile)
- Results grid or list view toggle
- Pagination or infinite scroll

### Detail Pages

- Full-width layout (no sidebar)
- Header with skill info, badges, actions
- Horizontal metadata bar
- Tabbed content area (README, Files, Compare, Versions)
- Comments section

### User/Publisher Pages

- Profile header with avatar, bio
- Stats overview
- Published skills list
- Activity/contribution history

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width    | Description           |
|------------|----------|-----------------------|
| Mobile     | < 640px  | Single column         |
| Tablet     | 640-900px| Adjusted layouts      |
| Desktop    | > 900px  | Full multi-column     |

### Mobile Considerations

- Navigation collapses to hamburger menu
- Metadata bar stacks vertically
- Cards become full-width
- Touch targets minimum 44px

### Key Responsive Patterns

```css
@media (max-width: 760px) {
  /* Stack layouts vertically */
  .detail-layout { grid-template-columns: 1fr; }
  
  /* Reorder for mobile */
  .detail-sidebar { order: -1; }
}

@media (max-width: 900px) {
  /* Metadata bar stacks */
  .metadata-bar-stats,
  .metadata-bar-details,
  .metadata-bar-tags {
    width: 100%;
    border-bottom: 1px solid var(--line);
  }
}
```

---

## Accessibility Guidelines

### Focus States

```css
:focus-visible {
  outline: 1px solid var(--ink);
  outline-offset: 2px;
}
```

### Screen Reader Support

- Use `.sr-only` class for visually hidden but accessible text
- Include proper ARIA labels on interactive elements
- Use semantic HTML elements (`<main>`, `<nav>`, `<article>`, etc.)

### Color Contrast

- Text on `--bg` meets WCAG AA (4.5:1 for normal text)
- Interactive elements have visible focus indicators
- Don't rely on color alone for status communication

### Keyboard Navigation

- All interactive elements are focusable
- Tab order follows visual order
- Escape closes modals/dialogs
- Arrow keys navigate within components

---

## Motion & Interaction

### Transition Speeds

```css
/* Fast interactions (hover, focus) */
transition: all 0.12s ease;

/* Medium interactions (expanding content) */
transition: all 0.2s ease;

/* Slow interactions (page transitions) */
transition: all 0.3s ease;
```

### Hover States

- Cards: subtle border color change, optional translateY(-2px)
- Buttons: background color shift
- Links: underline or color change

### Loading States

- Use skeleton loading for content areas
- Show progress indicators for async operations
- Provide feedback for user actions

---

## Dark/Light Mode

ClawHub defaults to **dark mode** with an optional light theme.

### Theme Switching

Themes are controlled via the `data-theme` attribute on the root element:

```html
<html data-theme="dark">  <!-- Default -->
<html data-theme="light"> <!-- Light mode -->
```

### Light Theme Overrides

Light mode inverts the color relationships:

```css
[data-theme="light"] {
  --bg: #f0f0f0;
  --surface: #ffffff;
  --ink: #0a0a0a;
  --ink-soft: #555555;
  --accent: #0a0a0a;
  --accent-fg: #f0f0f0;
}
```

---

## File Structure

```
src/
├── components/
│   ├── ui/                  # Base UI components (Button, Badge, Card)
│   ├── Skill*.tsx           # Skill-related components
│   ├── Soul*.tsx            # Soul-related components
│   ├── User*.tsx            # User-related components
│   └── Header.tsx           # Global navigation
├── routes/                  # TanStack Router pages
├── lib/                     # Utilities and helpers
└── styles.css               # Global styles and design tokens
```

---

## Contributing to the Design System

When adding new components or patterns:

1. **Check existing patterns** — Don't reinvent what already exists
2. **Use design tokens** — Always use CSS custom properties, never hardcoded values
3. **Maintain the TUI aesthetic** — Sharp corners, monospace, minimal decoration
4. **Document your additions** — Update this file with new patterns
5. **Test responsively** — Ensure layouts work from 320px to 1536px+
6. **Verify accessibility** — Check focus states, contrast, and screen reader support

---

## Version History

| Version | Date       | Changes                                    |
|---------|------------|--------------------------------------------|
| 1.0.0   | 2026-04-10 | Initial design system documentation        |
