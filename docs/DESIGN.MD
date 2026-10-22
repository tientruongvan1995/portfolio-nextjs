# Design System Inspired by AI-Driven Travel Experiences

## 1. Visual Theme & Atmosphere

This design system embodies sophisticated elegance with an exploration-forward narrative. The aesthetic marries premium travel imagery with minimalist dark interfaces, creating an immersive storytelling environment where nature photography dominates the visual hierarchy. The system leverages deep forest greens, warm golden hues, and near-black backgrounds to evoke a sense of wanderlust, serenity, and technological precision. Typography is refined with serif accents for editorial moments, paired with modern sans-serif for functionality. The overall mood is aspirational yet grounded—inviting users to discover extraordinary destinations through AI-enhanced personalization, while maintaining sophisticated restraint through high contrast and strategic whitespace.

**Key Characteristics**
- Deep, near-black dark mode as primary interface canvas
- Warm earth tones and emerald accents for accent content
- Photography-first hero layouts with overlay text hierarchy
- Minimal chrome; full-bleed imagery behind transparent components
- Serif typography for emotional/editorial voice; sans-serif for UI
- High contrast accessibility with subtle gradient overlays
- Soft rounded corners on interactive cards; sharp geometry on navigation
- Generous padding within containers; tight spacing in typography

## 2. Color Palette & Roles

### Primary
- **Dark Background** (`#000000`): Primary surface for all dark mode interfaces, used for main container backgrounds, creating maximum contrast for content layering
- **Near Black** (`#0E0E0E`): Subtle variation for section dividers and nested containers; provides depth without harsh transitions

### Accent Colors
- **Forest Green** (`#1A4D3E`): Secondary accent used in tag components, filter buttons, and interactive states; represents nature and sustainability themes
- **Golden Warm** (`#D4A574`): Tertiary accent for highlights, price tags, and premium CTA elements; evokes luxury travel experiences
- **Cream/Off-White** (`#E8E4DC`): Soft highlight color used in card surfaces and overlay panels over darker backgrounds

### Interactive
- **Emerald Active** (`#2D7A6E`): Button hover and focus states, active tab indicators
- **Gold Highlight** (`#E6D5B8`): Interactive element backgrounds, secondary buttons, and call-to-action accents

### Neutral Scale
- **Light Gray** (`#E6E6E6`): Divider lines, subtle borders, low-contrast text on light backgrounds
- **Medium Gray** (`#8B8B8B`): Secondary text, disabled states, icon fills
- **White** (`#FFFFFF`): Primary text on dark backgrounds, primary CTA text, high-contrast overlays

### Surface & Borders
- **Card Surface Dark** (`#1C1C1C`): Elevated card and container backgrounds with subtle lift from base
- **Border Subtle** (`#333333`): Low-contrast borders for component separation, icon outlines
- **Overlay Scrim** (`#00000066`): Semi-transparent dark overlay (40% opacity) for image text protection and depth layering

## 3. Typography Rules

### Font Family
**Primary:** `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` — modern, clean UI font for all functional elements

**Secondary:** `'Georgia', 'Times New Roman', serif` — elegant serif for editorial headlines, destination names, and premium section headers

**Fallback:** `system-ui, -apple-system, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display Hero | Georgia, serif | 56px | 400 | 1.2 | -0.5px | Large destination titles over imagery |
| Heading 1 | Segoe UI, sans-serif | 32px | 600 | 1.3 | -0.25px | Main section titles, primary page headers |
| Heading 2 | Segoe UI, sans-serif | 24px | 600 | 1.35 | 0px | Subsection headers, card titles |
| Heading 3 | Segoe UI, sans-serif | 18px | 600 | 1.4 | 0px | Component section labels, secondary titles |
| Body Large | Segoe UI, sans-serif | 16px | 400 | 1.6 | 0px | Primary body text, description paragraphs |
| Body Regular | Segoe UI, sans-serif | 14px | 400 | 1.5 | 0px | Standard UI text, labels, secondary content |
| Body Small | Segoe UI, sans-serif | 12px | 400 | 1.4 | 0px | Captions, helper text, metadata |
| Button | Segoe UI, sans-serif | 16px | 500 | 1.2 | 0.5px | All button text, action labels |
| Link | Segoe UI, sans-serif | 14px | 500 | 1.5 | 0px | Inline links, navigation items |
| Code | `'Monaco', 'Courier New', monospace | 12px | 400 | 1.6 | 0px | Price values, dates, code snippets |

### Principles
- **Contrast First:** All text maintains minimum 4.5:1 contrast ratio for WCAG AA compliance
- **Hierarchy Through Weight:** Bold weights (600+) reserved for headings; body copy consistently 400 for legibility
- **Serif for Emotion:** Georgia serif used sparingly on premium landing moments to elevate brand perception
- **Generous Line Height:** Body text uses 1.5–1.6 for readability on mobile; compact headings use 1.2–1.35
- **Negative Letter Spacing:** Display text tightened (-0.5px to -0.25px) for premium appearance and visual cohesion

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#D4A574` (Golden Warm)
- Text Color: `#000000` (Dark Background)
- Padding: `14px 32px`
- Border Radius: `8px`
- Font Size: `16px`
- Font Weight: `500`
- Border: none
- Box Shadow: `0 4px 12px rgba(212, 165, 116, 0.25)`
- Hover State: Background `#E6D5B8` (Gold Highlight), Box Shadow `0 6px 16px rgba(212, 165, 116, 0.35)`
- Active State: Background `#C89860`, Box Shadow `0 2px 8px rgba(212, 165, 116, 0.2)`
- Disabled State: Background `#8B8B8B`, Opacity `0.6`, Cursor `not-allowed`

**Secondary Button**
- Background: transparent
- Text Color: `#FFFFFF`
- Padding: `12px 24px`
- Border Radius: `8px`
- Font Size: `14px`
- Font Weight: `500`
- Border: `1px solid #E6E6E6`
- Box Shadow: none
- Hover State: Background `rgba(230, 230, 230, 0.1)`, Border `#FFFFFF`
- Active State: Background `rgba(230, 230, 230, 0.2)`
- Focus State: Outline `2px solid #D4A574`, Outline Offset `2px`

**Ghost Button**
- Background: transparent
- Text Color: `#FFFFFF`
- Padding: `10px 16px`
- Border Radius: `24px`
- Font Size: `14px`
- Font Weight: `500`
- Border: `1px solid rgba(255, 255, 255, 0.5)`
- Box Shadow: none
- Hover State: Background `rgba(255, 255, 255, 0.1)`, Border `#FFFFFF`
- Active State: Background `rgba(255, 255, 255, 0.15)`, Text Color `#E6D5B8`

### Cards & Containers

**Destination Card (Featured)**
- Background: `#1C1C1C` with `background-image` layered
- Border Radius: `16px`
- Padding: `16px`
- Border: `1px solid #333333`
- Box Shadow: `0 8px 32px rgba(0, 0, 0, 0.4)`
- Overlay: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%)`
- Min Height: `240px`
- Hover State: Box Shadow `0 12px 48px rgba(0, 0, 0, 0.5)`, Transform `translateY(-4px)`, Transition `all 0.3s ease`

**Information Card (Light)**
- Background: `#E8E4DC`
- Border Radius: `12px`
- Padding: `20px`
- Border: none
- Box Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Text Color: `#000000`
- Hover State: Box Shadow `0 4px 12px rgba(0, 0, 0, 0.12)`

**Tag/Chip Component**
- Background: `#1A4D3E` (Forest Green)
- Text Color: `#FFFFFF`
- Padding: `6px 12px`
- Border Radius: `20px`
- Font Size: `12px`
- Font Weight: `500`
- Border: none
- Box Shadow: none
- Hover State: Background `#2D7A6E`, Cursor `pointer`

### Inputs & Forms

**Text Input**
- Background: `#1C1C1C`
- Text Color: `#FFFFFF`
- Border: `1px solid #333333`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font Size: `16px`
- Line Height: `1.5`
- Placeholder Color: `#8B8B8B`
- Focus State: Border `#D4A574`, Box Shadow `0 0 0 3px rgba(212, 165, 116, 0.15)`
- Disabled State: Background `#0E0E0E`, Opacity `0.5`, Cursor `not-allowed`

**Text Area**
- Background: `#1C1C1C`
- Text Color: `#FFFFFF`
- Border: `1px solid #333333`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font Size: `14px`
- Line Height: `1.5`
- Resize: `vertical`
- Min Height: `100px`
- Focus State: Border `#D4A574`, Box Shadow `0 0 0 3px rgba(212, 165, 116, 0.15)`

**Checkbox / Radio**
- Width: `20px`
- Height: `20px`
- Border: `2px solid #E6E6E6`
- Border Radius: `4px` (checkbox) / `50%` (radio)
- Cursor: `pointer`
- Checked State: Background `#D4A574`, Border `#D4A574`
- Focus State: Box Shadow `0 0 0 3px rgba(212, 165, 116, 0.2)`

### Navigation

**Tab Navigation (Active/Inactive)**
- Background: transparent
- Text Color (Inactive): `#8B8B8B`
- Text Color (Active): `#FFFFFF`
- Padding: `12px 20px`
- Font Size: `14px`
- Font Weight: `500`
- Border Bottom: `2px solid transparent` (inactive) / `2px solid #D4A574` (active)
- Hover State: Text Color `#FFFFFF`, Border `#D4A574` (200ms transition)
- Cursor: `pointer`

**Bottom Navigation Icon**
- Size: `24px × 24px`
- Color (Inactive): `#8B8B8B`
- Color (Active): `#D4A574`
- Padding: `8px`
- Border Radius: `8px`
- Hover Background: `rgba(212, 165, 116, 0.1)`

### Badges

**Status Badge (Success)**
- Background: `rgba(45, 122, 110, 0.15)`
- Text Color: `#2D7A6E`
- Border: `1px solid #2D7A6E`
- Padding: `4px 8px`
- Border Radius: `12px`
- Font Size: `12px`
- Font Weight: `500`

**Status Badge (Warning)**
- Background: `rgba(212, 165, 116, 0.15)`
- Text Color: `#D4A574`
- Border: `1px solid #D4A574`
- Padding: `4px 8px`
- Border Radius: `12px`
- Font Size: `12px`
- Font Weight: `500`

## 5. Layout Principles

### Spacing System
- **Base Unit:** `8px`
- **Scale:** `8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px, 80px, 96px`
- **Usage Context:**
  - **Micro (8px–12px):** Internal button padding, icon spacing, tight form layouts
  - **Small (16px–24px):** Component padding, section margins on mobile, vertical rhythm
  - **Medium (32px–40px):** Section spacing, card gaps, horizontal padding in containers
  - **Large (48px–64px):** Major section breaks, page-level margins, full-width section gaps
  - **XL (80px–96px):** Hero sections, major layout divisions, top-level page margins

### Grid & Container
- **Max Width:** `1200px` for desktop content containers
- **Column Strategy:** 12-column grid on desktop; 4-column on tablet; single-column on mobile
- **Horizontal Padding:** `20px` on mobile, `32px` on tablet, `40px` on desktop
- **Container Margin:** Centered with `auto` horizontal margins above max-width breakpoint
- **Section Pattern:** Full-bleed background images with overlay scrim, text content contained within max-width; alternating left/right layouts for destinations

### Whitespace Philosophy
- **Generous Vertical Rhythm:** Large sections breathe with 48–64px gaps; creates scanning hierarchy
- **Tight Internal Padding:** Component internals use compact spacing (12–16px) to maintain visual density while section-level gaps remain expansive
- **Asymmetric Layouts:** Hero imagery takes 100% width; overlaid text and cards use constrained containers for focus

### Border Radius Scale
- **Sharp (0px):** Images, full-width sections, modal backdrops
- **Subtle (4px):** Checkboxes, tight form inputs, secondary components
- **Rounded (8px):** Buttons, standard form inputs, cards, navigation items
- **Fully Rounded (12px–16px):** Featured cards, emphasized components, premium surfaces
- **Pill (24px–50%):** Tag chips, badge elements, icon buttons, minimal interactive surfaces

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 | No shadow | Flat background surfaces, disabled states |
| Level 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | Subtle hover states, secondary cards |
| Level 2 | `0 4px 12px rgba(0, 0, 0, 0.25)` | Primary buttons, featured cards, popovers |
| Level 3 | `0 8px 32px rgba(0, 0, 0, 0.4)` | Destination cards, elevated surfaces |
| Level 4 | `0 12px 48px rgba(0, 0, 0, 0.5)` | Card hover states, modal overlays |

**Shadow Philosophy:** Shadows are used sparingly and consistently to create visual hierarchy without distraction. Deep blacks (`#000000`) with graduated opacity percentages (8%–50%) create layered depth that aligns with the premium travel brand. Shadows increase subtly on interaction to indicate elevation and responsiveness. Over dark backgrounds, shadows use higher opacity to maintain contrast; over light surfaces, opacity is reduced for refinement. No drop shadows on typography; shadows reserved for containers and interactive surfaces only.

## 7. Do's and Don'ts

### Do
- Always maintain **4.5:1 contrast ratio** for text against any background
- Use **full-bleed hero imagery** with overlay scrim (`rgba(0, 0, 0, 0.4)` minimum) for text legibility
- Layer **cards with consistent 12–16px border radius** for modern polish
- Employ **generous vertical spacing** (48–64px) between major sections for breathing room
- Apply **hover transitions of 200–300ms** on all interactive elements for smooth feedback
- Use **serif (Georgia) typography** only on hero headlines and premium editorial moments
- Implement **tab focus indicators** with 3px outline in `#D4A574` at 2px offset for keyboard accessibility
- Provide **both icon and text labels** in navigation for mobile clarity
- Use **color transitions** (not just opacity) on hover states for perceived interactivity
- Validate form inputs with **real-time feedback** using status badges above/below fields

### Don't
- Don't use **pure white (#FFFFFF) as primary background**; stick to `#000000` or `#1C1C1C` for visual consistency
- Don't apply **shadows to text elements** or typography—use color contrast instead
- Don't mix **more than two accent colors** in a single component
- Don't use **border radius below 4px** on interactive elements; maintain minimum roundness for touch targets
- Don't place **text directly over unmodified images**; always apply scrim overlay or background darkening
- Don't exceed **three font sizes** within a single component family
- Don't use **abrupt color transitions** on hover; always animate with `transition: all 0.3s ease`
- Don't stack **more than two rows of tags** in a single card; prioritize and truncate
- Don't ignore **dark mode context**; test all colors against `#000000` backgrounds for contrast
- Don't apply **focus states only via color**; include outline or clear visual indicator for keyboard users

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width | Key Changes |
|-----------------|-------|-------------|
| Mobile | 320px–639px | Single column layout, full-width cards, 20px horizontal padding, 32px section gaps, touch targets 48px minimum |
| Tablet | 640px–1023px | 2-column grid for cards, 32px horizontal padding, 48px section gaps, hero height 240px |
| Desktop | 1024px–1439px | 3-column grid, 40px horizontal padding, 64px section gaps, 1200px max-width container, hero height 320px |
| Large Desktop | 1440px+ | 1200px fixed max-width centered, 4-column grid for card layouts, max hero height 400px |

### Touch Targets
- **Minimum Size:** `48px × 48px` for all tappable elements on mobile (buttons, icon buttons, links)
- **Spacing:** Minimum `16px` gap between adjacent touch targets to prevent mis-taps
- **Hover Area:** Desktop interactive elements scale to `16px × 16px` minimum with 8px padding buffer
- **Button Padding:** Mobile buttons use `14px vertical × 32px horizontal`; desktop maintains consistency with increased font size

### Collapsing Strategy
- **Hero Section:** Height reduces from 400px (large desktop) → 320px (desktop) → 240px (tablet) → 200px (mobile); text size scales from 56px → 40px → 28px
- **Cards:** 4-column grid collapses to 3-column (desktop) → 2-column (tablet) → 1-column (mobile) with consistent 16px gaps
- **Navigation:** Tab navigation remains horizontal on tablet+; bottom navigation appears on mobile below fold
- **Containers:** Padding reduces from 40px (desktop) → 32px (tablet) → 20px (mobile); margins scale proportionally
- **Typography:** Heading sizes reduce by 8–12px at each breakpoint; body text remains 16px on mobile for readability
- **Imagery:** Aspect ratio preserved; images scale fluidly with `max-width: 100%` and `object-fit: cover`

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Golden Warm (`#D4A574`) — use for primary action buttons, highlights
- **Secondary CTA:** Emerald Active (`#2D7A6E`) — use for secondary actions, active states
- **Background:** Dark Background (`#000000`) — primary canvas for all dark mode
- **Accent Surface:** Near Black (`#0E0E0E`) — nested containers, dividers
- **Text Primary:** White (`#FFFFFF`) — all text on dark backgrounds
- **Text Secondary:** Medium Gray (`#8B8B8B`) — disabled, placeholder, secondary text
- **Borders:** Border Subtle (`#333333`) — component separators, input strokes
- **Light Surface:** Cream/Off-White (`#E8E4DC`) — information cards, light overlays
- **Overlay Scrim:** Overlay Scrim (`#00000066`) — image text protection, depth layering

### Iteration Guide

1. **Always layer dark mode backgrounds** with `#000000` as base; use `#1C1C1C` only for elevated containers (cards, popovers)
2. **Apply shadow elevation incrementally:** Level 2 shadows for primary buttons and featured cards; Level 3+ only for hover/active states
3. **Maintain typography hierarchy** by restricting serif to 56px+ headlines only; all UI copy uses sans-serif Segoe UI
4. **Ensure 200–300ms transitions** on all color and transform properties to signal interactivity without feeling sluggish
5. **Use accent colors sparingly:** Golden Warm `#D4A574` reserved for primary actions and premium highlights; Emerald `#1A4D3E` for secondary tags/filters
6. **Scale padding and margins consistently** using the 8px base unit; never use arbitrary values—always snap to scale
7. **Apply overlay scrims** (`rgba(0, 0, 0, 0.4)` minimum) over all image backgrounds containing text for WCAG contrast compliance
8. **Use border-radius 8px as default** for buttons and form inputs; increase to 12–16px only for featured cards; use 4px for tight components
9. **Test all focus states** with keyboard navigation; provide 2px outline in `#D4A574` at 2px offset minimum for tab users
10. **Implement responsive scaling** at breakpoints: headings reduce 8–12px per tier, container padding scales (40px → 32px → 20px), card grids collapse (4 → 3 → 2 → 1)