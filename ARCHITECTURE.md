# Portfolio Architecture

This portfolio uses a feature-based structure so the app shell stays thin and
the UI is organized by product area instead of by file type.

## Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css

features/
  theme/
    ThemeProvider.tsx
    ThemeToggle.tsx
  portfolio/
    PortfolioPage.tsx
    components/
      CaseStudy.tsx
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
