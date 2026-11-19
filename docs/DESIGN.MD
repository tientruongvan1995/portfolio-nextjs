# Design System

Last updated: 2026-11-16 · Scope: the portfolio landing page (`/[locale]`) and the Pokémon TeamFight game (`/[locale]/pokemon`).

This replaces the earlier travel-themed spec. Everything below is read from the code, not aspirational: if a value changes in CSS, change it here in the same commit.

Two surfaces share one foundation:

| Surface | Route | Foundation | Character |
| --- | --- | --- | --- |
| Portfolio | `/[locale]` | `src/features/portfolio/kit/*` + `tokens.css` | Editorial, one section per screen, monochrome ink accent |
| Pokémon TeamFight | `/[locale]/pokemon` | `src/features/game/styles/game.css` | Compact console, same warmth, one Poké-red accent |

Both read the site theme from `<html class="dark">`, both are bilingual (`en`, `vi`), and neither hard-codes a colour outside its token block.

---

## 1. Shared foundation

### 1.1 Theme

- The boot script in `src/app/layout.tsx` sets `html.dark` and `html.style.colorScheme` before paint from `localStorage.theme`, falling back to `prefers-color-scheme`.
- The user's choice is owned by `ThemeProvider`; components never read `matchMedia` directly.
- The locale boot sets `<html lang>` from the first path segment (`/en`, `/vi`).
- `html` carries the design settings: `data-type="service"`, `data-radius="soft"`, `data-buttons="solid"`.

### 1.2 Typeface

Rethink Sans everywhere, weights 400–700.

- Portfolio: loaded with a Google Fonts `<link>` in `PortfolioPage.tsx`.
- Game: loaded with `next/font/google` in `src/app/[locale]/pokemon/layout.tsx` as `--font-rethink`, with a `system-ui` fallback.
- Display weight is **400** on the landing; the game's page titles step up to 500. Headings earn hierarchy from size and tight tracking, not from weight 700.
- Display tracking: `-0.025em`, extra-large headlines `-0.035em`.
- Numerals in tables, scores and counters use `font-variant-numeric: tabular-nums`.

### 1.3 Motion

- One UI ease-out: `cubic-bezier(.2, .8, .2, 1)`.
- Hover transitions: `180ms` on the landing (`--dur`), 160–200 ms on the game; nothing loops except the loading spinner and the live dot.
- The landing gets one hero entrance and one dealt moment (`word-highlight`); everything else is hover-only.
- `prefers-reduced-motion: reduce` stops the spinner and non-essential transitions.

### 1.4 Accessibility floor

- Body text ≥ 4.5:1 on its own ground; large display text ≥ 3:1.
- Every interactive element has a visible `:focus-visible` ring in the accent colour.
- Numbers are tabular so columns do not jitter as they change.
- Live feedback (added, saved, battle outcome) is announced with `role="status"` / `role="alert"`, never colour alone.

---

## 2. Portfolio design system

### 2.1 Palette — `blush-aubergine`

Defined in `src/features/portfolio/kit/tokens.css`. Light and dark are two complete sets, aliased to semantic names so sections never reference a palette key.

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--p-bg` / `--bg` | `#edccbe` | `#1c0e17` | Page ground (dark = the game's canvas) |
| `--p-surface` / `--surface` / `--card` | `#e8c2b2` | `#2a1521` | Cards, panels, media ground (dark = the game's panel) |
| `--p-ink` / `--ink` | `#351a2b` | `#edccbe` | Primary text, monochrome accent |
| `--p-muted` / `--muted` | `#523340` | `#b2938f` | Secondary text (7.3:1 on blush) |
| `--p-accent` / `--accent` | `#351a2b` | `#edccbe` | Accent = ink; no second hue on the landing |
| `--p-accent-ink` | `#edccbe` | `#351a2b` | Text on accent |
| `--p-action` / `--action` | `#351a2b` | `#edccbe` | Buttons and links |
| `--p-action-ink` | `#edccbe` | `#351a2b` | Text on actions |
| `--line` | `ink 11%` | `ink 16%` | Hairlines |
| `--line-strong` | `ink 20%` | `ink 28%` | Emphasis rules |

Rules:

- No violet, lavender or second decorative hue. The accent **is** the ink.
- Dark mode shares the game's ground: `#1c0e17` canvas and `#2a1521` panels, so the two surfaces feel like one product at night.
- Colour never carries meaning alone; labels and numbers do the work.
- `--fx-*` mirrors the six core tokens for canvas/diagram code — never bypass it.

### 2.2 Spacing and grid

The 4/8 scale from `system.css`, one container for header, sections and footer:

| Token | Value |
| --- | --- |
| `--container` | `1280px` |
| `--gut` / `--pad` | `80px` (24 px ≤ 639 px) |
| `--gutter` | `24px` (12 px ≤ 639 px) |
| `--s-1 … --s-10` | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 |
| `--nav` | `72px` fixed (`56px` ≤ 639 px) |
| `--padt` / `--padb` | `120px` / `72px` (`96px` / `48px` ≤ 639 px) |
| `--hgap` / `--hpadb` | `48px` / `64px` (`40px` / `24px` ≤ 639 px) |

Layout law:

- **One section per screen** (two for Services and Work). `--ly-screen` and `--ly-fit` do the arithmetic; nothing is eyeballed.
- Both edges of a section land on the same container lines as the header and footer (equal edges).
- No captions under or over a visual. If it needs explaining, the copy is wrong.
- Text groups stay ≤ 700 px at 390 px wide so a screen never becomes two.

### 2.3 Type scale

| Role | Token | Size |
| --- | --- | --- |
| Hero H1 | `--ly-h1` (split pairing) | `clamp(40px, 3.048vw + 28.11px, 72px)` |
| Hero lead | `--ly-lead` | `clamp(17px, .286vw + 15.89px, 20px)` |
| Section H2 | `--t-h2` | `clamp(30px, 1.72vw + 23.3px, 48px)` |
| H3 / card title | `--t-h3` / `--t-card` | `24px` / `18px` |
| Lead / body | `--t-lead` / `--t-body` | `18px` / `16px` |
| Small / label | `--t-small` / `--t-label` | `14px` / `13px` |
| Stat | `--t-stat` | `clamp(28px, .952vw + 24.29px, 38px)` |

### 2.4 Radius and controls

- `data-radius="soft"`: `--r-sm 8`, `--r-md 12`, `--r-lg 20`, `--r-btn 8`.
- Buttons are `data-buttons="solid"`, height `--btn-h: 44px` (`36px` small).
- Nothing shares a radius with a different role: cards take `--r-lg`, controls take `--r-btn`.

### 2.5 Components

| Component | File | Notes |
| --- | --- | --- |
| `Nav` | `components/Nav.tsx` | Centre nav, fixed 72 px, equal edges with the container |
| `NavCurrent` | `components/NavCurrent.tsx` | Current-section marker (an `::after` underline) |
| `NavToggle` | `components/NavToggle.tsx` | Phone menu |
| `ThemeSwitch` | `src/features/theme/ThemeSwitch.tsx` | Owned by the theme feature; writes through `ThemeProvider` |
| `LocaleSwitch` | `src/features/language/LocaleSwitch.tsx` | Owned by the language feature; keeps the current path, swaps the locale |
| `Arrow` / `CodeLine` | `components/` | Monochrome, inline SVG, `currentColor` |
| Sections | `sections/LandingHero, Services, Approach, Work, Closing` | Composition only, no ad-hoc styling |

### 2.6 Copy

- All landing copy lives in the `landing` namespace of `src/locales/{en,vi}.json`, read with `getTranslations`.
- No invented facts, metrics or clients. If a number is not true, it is not on the page.
- One voice: plain sentences, second person, no exclamation marks, no "revolutionary".

---

## 3. Pokémon TeamFight design system

The game is a self-contained system in `src/features/game/styles/game.css`. Tokens live on the `.game` shell (rendered by `src/app/[locale]/pokemon/layout.tsx`); component modules only consume `var(--g-*)`.

### 3.1 Palette

Light reads like a warm printed console; dark is the same console at night. Values flip on `.dark .game`.

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--g-bg` | `#f4e6dd` | `#1c0e17` | Canvas |
| `--g-panel` | `#fff9f5` | `#2a1521` | Cards |
| `--g-panel-2` | `#edd8cb` | `#371d2b` | Inset blocks, chips, empty slots |
| `--g-ink` | `#2b1522` | `#f6e5db` | Primary text |
| `--g-ink-2` | `#6f4d5b` | `#c9a8a0` | Secondary text, labels |
| `--g-line` | `#dcc0b0` | `#45273a` | Borders, dividers |
| `--g-accent` | `#b2332d` | `#e0675c` | Poké red: CTAs, eyebrows, indices |
| `--g-accent-ink` | `#fdf6f1` | `#1c0e17` | Text on accent |
| `--g-pine` | `#2b6157` | `#7fc3b0` | Win, success, added |
| `--g-radius` | `22px` | — | Cards |
| `--g-radius-sm` | `14px` | — | Controls, slots, insets |
| `--g-shadow` | `0 24px 54px -36px rgba(43,21,34,.65)` | `0 24px 54px -30px rgba(0,0,0,.8)` | Card lift |

Colour rules:

- **One accent.** Red marks actions, the eyebrow, mode indices and "lost". `--g-pine` marks wins and positive toasts. Nothing else is coloured.
- **Type colour lives on the dot only.** Chips are neutral (`panel-2` + line) with a 7 px dot, so the label always passes contrast in both themes.
- Borders do the separation; shadows are a whisper, never the main depth cue.
- `color-scheme` is set per theme so native inputs and scrollbars follow.

### 3.2 Type

| Role | Class | Spec |
| --- | --- | --- |
| Page title | `.g-title` | `clamp(40px, 5.4vw, 68px)`, 500, `-0.04em`, `0.98` |
| Sub-page title | `.g-title--sm` | `clamp(32px, 3.6vw, 46px)`, 500, `-0.035em` |
| Card title | `.g-h2` | `19px`, 600, `-0.015em` |
| Lead | `.g-lead` | `17px` (16 phone), `1.55`, `--g-ink-2`, max `48ch` |
| Eyebrow | `.g-eyebrow` | `11px`, 600, `0.16em`, uppercase, `--g-accent` |
| Label | `.g-label` | `11px`, 600, `0.12em`, uppercase, `--g-ink-2` |
| Body | `.game` | `16px`, `1.5` |
| Numbers | `.g-num` | tabular-nums |

Pokémon and ability names are humanised in JS (`humanize()` in `src/features/game/utils/format.ts`), not by CSS `capitalize` — that is what keeps "(hidden)" lowercase.

### 3.3 Spacing, shape and rhythm

| Token / rule | Value |
| --- | --- |
| `.g-wrap` | `max-width: 1200px`, `padding-inline: 32px` (20 phone) |
| `.g-main` | `padding-block: 36px 52px` (28 / 48 phone) |
| Top bar | `64px` (58 phone), sticky, **opaque** `--g-bg` + 1 px line |
| Cards | `22px` radius, 1 px line, `--g-panel` |
| Controls | `46px` min height, `14px` radius |
| Inputs | `48px` height, `14px` radius |
| Icon buttons | `28px` circle |
| Gaps | 4 / 8 / 10 / 12 / 16 / 18 / 24 px |

The bar is deliberately opaque: a translucent bar ghosts scrolling content in headless captures and on slow compositors.

### 3.4 Components

**Top bar** — `.g-bar`, `.g-brand`, `.g-bar__in`. Inline pokéball mark drawn with `currentColor` + `--g-accent` and `--g-bg` (never the old PNG). Brand → `/pokemon`, `← Home` on sub-pages, `Portfolio ↗` → `/`.

**Primitives**

| Class | Purpose | Spec |
| --- | --- | --- |
| `.g-card` | Panel | `--g-panel`, 1 px line, `22px`, shadow |
| `.g-btn` + `--primary` | Main action | accent ground, `--g-accent-ink`, hover darkens + 1 px lift |
| `.g-btn--secondary` | Strong alternative | `--g-ink` ground, `--g-bg` text |
| `.g-btn--ghost` | Quiet action | transparent, line border, fills `panel-2` on hover |
| `.g-btn:disabled` | Off | neutral `panel-2` + `--g-ink-2` text, **no opacity fade** |
| `.g-field` / `.g-input` | Text input | 48 px, focus ring `0 0 0 3px accent 18%` |
| `.g-search` | Search row | input + solid Search button, magnifier inline |
| `.g-chip` | Neutral chip | 26 px pill, uppercase 11 px |
| `.g-chip--good` / `--bad` | Outcome | pine / accent tints |
| `.g-num` | Tabular figures | score, count, EXP |

Disabled buttons stay legible: opacity-based disabling made labels vanish on dark grounds.

**Type chip** — `BaseSmallType` → `.type[data-type]`. 24 px pill, `panel-2`, 1 px line, 10.5 px uppercase label and a 7 px dot with a 3 px halo at 18% of the dot colour.

| Type | Dot | Type | Dot | Type | Dot |
| --- | --- | --- | --- | --- | --- |
| normal | `#8f8479` | fire | `#d9533a` | water | `#4a86c8` |
| electric | `#c9a11b` | grass | `#4f9457` | ice | `#5eafbd` |
| fighting | `#a8542f` | poison | `#8f55a0` | ground | `#b8925a` |
| flying | `#8496c4` | psychic | `#c95c86` | bug | `#8a9a35` |
| rock | `#a08a5f` | ghost | `#6a5a9e` | dragon | `#6455c8` |
| dark | `#55494a` | steel | `#879096` | fairy | `#cf86ab` |

`unknown` `#7c8b86`, `shadow` `#4a3f52`. Adding a type = one `data-type` row, no component change.

**EXP chip** — `BaseExperienceBar`. `EXP` in 9.5 px caps + the value in 13 px 600 tabular. No progress bars: a bar whose fill is never explained reads as broken, so the number is shown plainly.

**Team row (builder)** — `PokemonTeamItem`. Grid `52px 1fr 28px`: pixelated sprite, name + type chips + abilities (ellipsised) + EXP, circular remove button that turns accent on hover.

**Team row (fight)** — `PokemonFightItem`. Grid `42px 1fr auto`: sprite, name + chips, EXP. Chips hide under 520 px so six rows stay one card.

**Roster card (home)** — `.roster`. 3 × 2 slots; filled slots take `panel-2` with a solid line, empty slots are dashed and show `01…06` + `EMPTY`. Footer carries the record `3W · 1T · 2L` or "No battles yet".

**Record card** — `SummaryBox`. `dl` of Won/Tied/Lost with a 22 px total, tabular.

**Toast** — builder feedback. Fixed bottom-centre, pill, 13 px, tinted pine (success) or accent (error), auto-dismissed at 1.8 s, `role="status"`. Kept off the layout flow so it is visible on a phone where the roster is below the fold.

**Spinner** — `PokeballLoadingSpinner`. 44 px pokéball, 1.1 s spin, `role="status"`, static under reduced motion.

**Footer** — `.g-foot`. Credits left, "Copyrights belong to Pokémon Company" right; stacks on phones.

### 3.5 Page composition

| Page | Grid | Behaviour |
| --- | --- | --- |
| Home | `1.05fr / 0.85fr` | Intro + two mode rows (01 create, 02 fight — locked until 6) + live roster |
| Create | `minmax(320px,400px) / 1fr` | Sticky team card (88 px top, clear of the bar) + find-a-Pokémon card |
| Fight — prepare | `1fr / 240px / 1fr` | Your team, VS + battle button, record |
| Fight — result | `1fr / 72px / 1fr` | Two team cards with WON / LOST / TIED chips + margin line |

Breakpoints:

| Width | Change |
| --- | --- |
| ≤ 1020 px | Create and fight collapse to one column; the find card comes first |
| ≤ 960 px | Home hero stacks; roster follows the intro |
| ≤ 860 px | Result teams stack, VS sits between them |
| ≤ 760 px | Detail card art stacks over the info |
| ≤ 700 px | Wrap padding 20 px, bar 58 px, mode metadata drops the count |
| ≤ 600 px | Builder header actions go full width, equal |
| ≤ 520 px | Fight rows drop type chips |

No horizontal overflow at 390, 900, 1280 or 1600.

### 3.6 States

- **Empty builder** — six dashed slots numbered `01…06`.
- **Locked fight** — the mode row is a non-link with `aria-disabled` and "N to go"; the fight route itself renders a "Your team needs six." card with a primary link back to the builder, never a redirect.
- **Full team** — "Add to team" and the random pick disable with the neutral disabled style.
- **Searching** — spinner inside the result area, card height reserved (`min-height: 300px`).
- **Not found** — "No Pokémon found." + the real range (1–1,154), no dead end.
- **Battle error** — inline `role="alert"` under the header, button re-enabled.
- **Result** — outcome in the headline *and* the chip, never colour alone; the score increments exactly once per battle.

### 3.7 Content rules

- Sentence case, second person, no exclamation marks. "Build the team. Take the fight."
- The rules of the game are stated where they matter: "The higher total EXP takes the battle."
- Pokémon names come from PokéAPI (lowercase, hyphenated) and read as titles; abilities are humanised.
- No fake opponents: the opponent is six real API Pokémon, labelled "Challenger".

---

## 4. File map

```
src/app/layout.tsx                     boot script, html settings, ThemeProvider
src/app/[locale]/pokemon/layout.tsx    .game shell + next/font + PlayerProvider
src/features/portfolio/kit/tokens.css  blush-aubergine palette, light + dark
src/features/portfolio/kit/system.css  spacing/type/radius/control scale
src/features/portfolio/kit/layout.css  one-section-per-screen arithmetic
src/features/portfolio/components/     Nav, NavCurrent, NavToggle, Arrow, CodeLine
src/components/                        Control.module.css (shared pill styles)
src/features/theme/                    ThemeProvider, useTheme, ThemeSwitch
src/features/language/                 LocaleSwitch, LocaleLang
src/features/portfolio/sections/       LandingHero, Services, Approach, Work, Closing
src/features/game/styles/game.css      --g-* tokens + g- primitives
src/features/game/GamePage.*           home
src/features/game/CreateTeam.*         builder
src/features/game/TeamFightPage.*      prepare + result
src/features/game/components/          primitives, pokemon, layout (GameBar, footer)
```

## 5. Do / Don't

**Do**

- Change a look by changing a token, in one place.
- Test every screen at 390 and 1440 in both themes and both locales.
- Keep one accent per surface and let scale, weight and spacing carry hierarchy.
- Use tabular numerals wherever a number can change.
- Keep card content inside the container edges.

**Don't**

- Don't add a second hue, gradient or glass panel to the game.
- Don't paint a type colour on chip text or backgrounds.
- Don't fade a disabled control to invisibility — neutralise it instead.
- Don't put captions under visuals, or a visual under a caption.
- Don't hard-code hex values in component modules; only `--g-*` / `--p-*`.
- Don't invent a metric, a client or a Pokémon fact to fill space.
- Don't reintroduce a desktop-only gate: the game is responsive at every width.
