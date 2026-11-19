# Project Architecture

A Next.js App Router project with two product surfaces on one site:

- `/[locale]` — the portfolio landing page.
- `/[locale]/pokemon` — Pokémon TeamFight, a client-side game.

Both are bilingual (`en`, `vi` through `next-intl`), both follow the class-based
dark mode on `<html>`, and both are statically rendered. Tokens, type scales and
component specs live in `docs/DESIGN.MD`; this file covers structure and rules.

## Structure

```txt
src/
  app/
    layout.tsx                html/body, theme boot script, ThemeProvider, globals.css
    page.tsx                  redirect to /en
    globals.css               body reset + legacy Tailwind import
    api/status.ts             legacy Pages Router handler (not wired to App Router)
    [locale]/
      layout.tsx              locale guard, NextIntlClientProvider, LocaleLang
      loading.tsx
      page.tsx                portfolio entry + viewport themeColor
      pokemon/
        layout.tsx            .game shell, Rethink Sans, PlayerProvider
        loading.tsx
        page.tsx              game home
        team/create/page.tsx  team builder
        team/fight/page.tsx   prepare + result
  components/
    Control.module.css        the shared pill styles for the app's small controls
  features/
    theme/                    ThemeProvider, useTheme, ThemeSwitch
    language/                 LocaleSwitch, LocaleLang
    portfolio/
      PortfolioPage.tsx       imports kit CSS, composes Nav + sections + Closing
      PortfolioPage.module.css
      landingData.ts          email and static facts
      kit/                    the landing design system (global CSS, see below)
      sections/               LandingHero, Services, Approach, Work, Closing
      components/             Nav, NavCurrent, NavToggle, Arrow, CodeLine
    game/
      GamePage.tsx            home
      CreateTeam.tsx          builder
      TeamFightPage.tsx       prepare + result
      api/pokemon.ts          PokéAPI reads
      model/                  player and pokemon types
      context/player.tsx      localStorage store (team, record)
      hooks/team.tsx          draft, save, reset, user-facing messages
      components/             primitive/, pokemon/, layout/
      styles/game.css         --g-* tokens and g-* primitives
      utils/format.ts         humanize()
  i18n/                       routing, request config, locale-aware Link
  locales/                    en.json, vi.json
public/
  assets/                     files fetched by URL at runtime only (see below)
```

## Layers

- **`app/`** owns routing, metadata and global providers. No product UI lives here.
- **`features/`** owns one concern or product area each: `theme` (state and its
  control), `language` (the locale control and `<html lang>`), `portfolio` and `game`
  (product UI). Product features may import `features/theme` and `features/language`;
  they do not import each other.
- **`components/`** holds primitives that belong to no single concern. Today that is
  the shared `Control.module.css` both switches use; a component used by one feature
  stays in that feature.
- **`public/`** holds only what the browser fetches by URL at runtime:
  `kit-boot.js` and the modules it imports (`system.js`, `motion/`, `layout/`,
  `moments/`, `diagrams/`), the linked `ui/base.css` and `ui/code/fragment.css`,
  and the sheets their JavaScript fetches (`diagrams/diagram.css`,
  `moments/*/moment.css`). CSS that is `import`ed belongs in `src/` so Next bundles,
  hashes and orders it.

## Styling

Two token-driven systems, one per surface. Do not mix them.

**Landing** — global sheets in `features/portfolio/kit`, imported once by
`PortfolioPage.tsx`:

| Sheet | Role |
| --- | --- |
| `tokens.css` | `--p-*` palette and the semantic aliases (`--bg`, `--ink`, `--surface`, `--muted`, `--accent`, `--line`) |
| `system.css` | reset, base type, spacing/type/radius scales, buttons, cards, nav, fields, grid |
| `layout.css` | one-section-per-screen arithmetic (`--ly-screen`, `--ly-fit`) |
| `cards.css` | card and panel variants, media stages, code windows |
| `motion.css` | hero entrance, scroll reveals, hover micro-interactions |
| `diagram.css` | the architecture diagram |
| `icon.css` | the inline icon set |

Sections use the kit's global class names (`.hero`, `.wrap`, `.section`, `.btn`,
`.card`). `kit/tokens.css` is the **only** palette source for the landing;
`app/globals.css` supplies the body reset and the leftover Tailwind import, and
does not style the landing.

**Game** — `features/game/styles/game.css` defines `--g-*` on the `.game` shell,
with `.dark .game` overrides. Game components style themselves with CSS Modules.

Rules for new work:

- A new component uses CSS Modules and tokens only; no hex values in modules.
- A new global selector belongs in `kit/` as a primitive, not in a section file.
- One spacing, type and radius scale per surface. Never add a second one.
- Tailwind is legacy: it is still imported by `globals.css`, but neither surface
  uses its utilities. Do not start.
- A colour or theme change happens in the token block (`kit/tokens.css` or
  `game.css`), never at the call site.

## State and data

- **Theme** — `ThemeProvider` owns `theme` in `localStorage` and toggles `.dark` on
  `<html>`. The inline boot script in `app/layout.tsx` applies the stored value
  before first paint so there is no flash. `prefers-color-scheme` only seeds the
  first visit.
- **Game** — `PlayerProvider` keeps the team and record in `localStorage` behind a
  `useSyncExternalStore` store, so the server and client render the same markup.
  The team is clamped to six.
- **Battle** — six API Pokémon per side; the higher sum of `baseExperience` wins.
  Sprites come from `raw.githubusercontent.com` (allowed in `next.config.ts`
  `remotePatterns`).
- **Locale** — `next-intl`, with every route declared in `src/i18n/routing.ts`.
  Navigation uses the locale-aware `Link` from `src/i18n/navigation.ts`.

## Copy and i18n

- Landing copy lives in the `landing` namespace of `src/locales/{en,vi}.json` and is
  read with `getTranslations` (server) or `useTranslations` (client). `meta` is the
  app-level title and description.
- No visible sentence is hard-coded in a landing component.
- The game currently uses English strings inside its hooks and pages; moving them
  into their own namespace is the remaining i18n task.
- Vietnamese copy should read as Vietnamese, not as translated English word order.

## Conventions

- Server Components by default. Add `'use client'` only for state or browser APIs
  (theme, nav toggle, game).
- Links between routes use `@/i18n/navigation`; a plain `<a>` is for in-page
  anchors and external URLs only.
- Keep feature helpers next to the feature. Lift code to a shared folder only when
  a second feature needs it.
- Add `generateStaticParams` for new dynamic routes; the locale layout already
  provides it.
- Contrast, focus states, tabular numerals and the one-section-per-screen rule are
  specified in `docs/DESIGN.MD`.

## Current notes

- Dark mode is class-based on `<html>`; the stored choice wins over the OS setting.
- `docs/DESIGN.MD` is the source of truth for tokens, type, components and the
  game's breakpoints.
- `app/api/status.ts` still uses the Pages Router handler signature, so it is not
  served by the App Router. Either port it to a `GET` route handler or remove it.
