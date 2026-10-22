# Portfolio Architecture

This portfolio uses a feature-based structure so the app shell stays thin and
the UI is organized by product area instead of by file type.

## Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css

components/
  Button.tsx
  Card.tsx
  Typography/
    Heading.tsx
    Text.tsx

features/
  theme/
    ThemeProvider.tsx
    ThemeToggle.tsx
  portfolio/
    PortfolioPage.tsx
    components/
      CaseStudy.tsx
      TypingTitle.tsx
    sections/
      Hero.tsx
      Skills.tsx
      Projects.tsx
      Architecture.tsx
      Experience.tsx
      Footer.tsx
```

## Why This Structure

- `app/` only owns routing, metadata, and global providers.
- `features/theme` owns the color-mode state and toggle UI.
- `features/portfolio` owns the homepage composition and its section-level
  building blocks.
- Shared UI that only belongs to the portfolio stays inside the portfolio
  feature instead of becoming a generic global component.

## Shared UI / Reusable Components

- **Placement:** Put truly shared, generic UI in the top-level `components/` folder. Keep feature-specific building blocks inside `features/<feature>/components` so the feature remains self-contained.
- **API conventions:** Components should be composition-friendly: accept `className`, `children`, and small, well-documented props (e.g., `text`, `speed`, `badgeText`, `actions`). Prefer slots (`children` / `actions`) over many ad-hoc props.
- **Styling:** Use tokens from `app/globals.css` for colors/spacing. Prefer utility-first classes (Tailwind) plus a `className` prop for overrides.
- **Behavior:** Keep components uncontrolled by default (let callers manage state) and expose callbacks for interactions.
- **Examples:** `features/portfolio/components/TypingTitle.tsx` and `features/portfolio/components/CaseStudy.tsx` have been generalized to accept `className` and configurable props (e.g., `text`, `speed`, `badgeText`, `actions`) so they can be reused across multiple sections.

## Component Guidelines

- **Minimal surface area:** Export small, focused components (Cards, Buttons, FormFields, Typography primitives).
- **Accessibility:** Ensure semantic markup and keyboard focus states for interactive components.
- **Docs and stories:** Add a short README or Storybook story for non-trivial components so consumers know intended usage and props.


## Composition Flow

1. `app/layout.tsx` provides the theme provider.
2. `app/page.tsx` renders the feature entrypoint.
3. `features/portfolio/PortfolioPage.tsx` assembles the sections and the theme
   toggle.
4. The section components remain focused on presentation and content.

## Conventions

- Use Server Components by default.
- Add `use client` only for interactive state or browser APIs.
- Keep feature-specific helpers close to the feature that uses them.
- Prefer tokens from `app/globals.css` for theme-aware styling.

## Current Notes

- The theme toggle uses a class-based dark mode strategy on `html`.
- The font stack is local/system-based to keep builds offline-safe.
- The homepage is intentionally single-route and section-driven.
