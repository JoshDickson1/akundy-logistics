# Akundy Logistics — Design System

Agent reference for the Akundy Logistics marketing site.

## Brand Foundation

- **Primary brand color:** orange — `#f97316` (Tailwind `brand`)
- **Foreground:** near-black `#0a0a0a` / near-white `#fafafa` in dark mode
- **Background:** white in light mode, `#080808` in dark mode
- **Surface cards:** white (`bg-white`) or `#141414/60` in dark mode
- **Borders:** `border-border` semantic token; subtle zinc tints on dark surfaces
- **Typeface:** Geist (via Google Fonts), fallback to system-ui
- **Accent type:** uppercase, tight tracking, heavy weight for headlines
- **Motto:** *Delivering Solutions. Building Value.*
- **Coverage:** Nigeria and international markets

## Navbar Pattern

File: `src/components/layout/navbar.tsx`

### Desktop

- Sticky header, white background in light mode, dark background in dark mode.
- Top **announcement tape**: orange bar with rounded bottom corners, inset side margins, and blurred gradient fade masks at each end.
- Centered **convex pill** navigation:
  - Black (`bg-black`) rounded-bottom pill with curved corner SVG masks.
  - Drop shadow: `drop-shadow(0 14px 24px rgba(0,0,0,0.2))`.
  - Nav items are text + chevron buttons for dropdowns; direct `NavLink` items for pages.
  - Active item: `bg-[#18181b]` + white text.
  - Hover: white text.
  - Height animates with spring (`stiffness: 300, damping: 28`) between closed (`56px`) and panel-specific open heights (`324px` for Services/Equipment, `252px` for Company).
- Left: `Logo` component.
- Right: `ThemeToggle` + `Request Quote` CTA (`bg-brand` / `hover:bg-brand/90`).

### Dropdown Panels

- Rendered inside the pill below the nav row.
- **Bento-grid layout:**
  - Services & Equipment: one large featured card spanning 2 cols × 2 rows + three compact cards + a "View all" dashed footer row.
  - Company: 2×2 grid of compact cards.
- Cards:
  - `bg-black` surface, `border-zinc-800`, `rounded-2xl`.
  - Hover: `hover:border-brand/40 hover:bg-zinc-950`.
  - Subtle orange radial gradient glow on hover.
  - Featured cards can contain a small component preview.
- Limited content: show 6 items max per panel; link to full listing page.

### Mobile

- Same sticky header.
- Centered convex pill (narrower, `min(92vw, 360px)`) containing a hamburger + "Menu" trigger.
- Tapping the pill expands the same black rounded-bottom container downward.
- Dropdown shows grouped nav items + nested sub-links + a `Request Quote` CTA at the bottom.
- Right side only shows `ThemeToggle`; CTA moves into the mobile dropdown.

## Footer Pattern

File: `src/components/layout/footer.tsx`

### Layout

- Full-width footer with a subtle grid background.
- **Grid background:** 80px × 80px orthogonal lines, `rgba(0,0,0,0.04)` in light mode, `rgba(255,255,255,0.04)` in dark mode.
- Top and bottom fade gradients to blend the grid into the footer background.
- White background in light mode; `#080808` in dark mode.

### Top Bento

Two large cards side by side on desktop:

1. **Brand card** (`lg:col-span-7`):
   - White surface, `rounded-[28px]`, subtle border + shadow.
   - `Logo` at top.
   - Large uppercase headline with orange accent words.
   - Short paragraph describing the company and coverage.

2. **Newsletter card** (`lg:col-span-5`):
   - Inverted surface: `bg-zinc-900` in light mode, `bg-white` in dark mode.
   - Same `rounded-[28px]`.
   - Headline + animated status text.
   - Rounded email input + submit button.

### Middle Section

- Left: link columns (`Company`, `Services`, `Equipment`).
- Right: contact pills (email, phone, location) as rounded button-like rows.

### Bottom Bar

- Copyright left.
- Center/right: Privacy Policy, Terms of Service and `ThemeToggle`.

## Animation Principles

- Use `motion/react` (not `framer-motion`) for all animations.
- Prefer spring transitions for height/position.
- Use `AnimatePresence mode="wait"` for swapping dropdown panels.
- Keep entrance/exit durations short (`0.18s`) for UI responsiveness.
- Hover transitions: `300ms` for borders and backgrounds.

## Dark Mode

- Implemented via `next-themes` + CSS variables in `src/index.css`.
- Use `dark:` Tailwind variants for inverted surfaces.
- Avoid hard-coded `#000` / `#fff`; use semantic tokens or the explicit dark-surface palette (`#080808`, `#141414`).

## Components to Reuse

- `Logo` — `src/components/logo.tsx`
- `ThemeToggle` — `src/components/theme-toggle.tsx`
- `Input` — `src/components/ui/input.tsx`
- `PageHeader` — `src/components/page-header.tsx` (uniform hero header for interior pages)
- `SectionHeader` — `src/components/section-header.tsx` (animated section header)
- `NavLink` from `react-router-dom` for internal navigation
- `Link` from `react-router-dom` for footer links

## Notes for Agents

- Keep the convex pill shape unique to the navbar; do not reuse it for other UI.
- Limit dropdown panel content; always provide a "View all" link to the full page.
- Use orange (`brand`) sparingly: CTAs, active/hover accents, headline highlights.
- Maintain generous border-radius (`rounded-2xl`, `rounded-[28px]`) for the bento/card aesthetic.
- When adding new sections, follow the bento-grid + large-radius + subtle-shadow language.
- Add new legal/policy pages to both the router (`src/App.tsx`) and the footer legal links.
- Keep the announcement tape's blurred side fades when modifying the navbar marquee.
