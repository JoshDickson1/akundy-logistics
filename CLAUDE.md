# Akundy Logistics - Claude Guidelines

## Writing rules

- **No em-dashes ever.** Use commas, colons, or restructure the sentence instead. This applies to all code, copy, comments, and JSX strings.

## Design system

### Typography scale
- `.display-hero` — `clamp(3.5rem, 11vw, 13rem)`, weight 900, uppercase, leading 0.85. Full-bleed narrative sections.
- `.display-xl` — `clamp(2.5rem, 7vw, 8rem)`. Page hero headings.
- `.display-lg` — `clamp(2rem, 5vw, 5rem)`. Section headings.
- Fluid sizing via `clamp()` is preferred over fixed breakpoint font sizes.
- All display headings: uppercase, tight tracking (`-0.02em`), font-black.

### Color tokens
- `--brand` / `bg-brand`: `#f97316` (orange) — use sparingly for CTAs and accents only.
- `--foreground` / `--background` — always use semantic tokens, never hardcode `#000` or `#fff`.
- Section backgrounds: rotate through `bg-brand`, `bg-foreground`, `#fdf6ee` (warm cream), `#0f1f3d` (navy) for narrative sections.

### Layout
- Max content width: `max-w-[1400px]` for full-bleed sections, `max-w-6xl` for standard content.
- Border radius: `rounded-3xl` / `rounded-[28px]` for cards. `rounded-full` for pills/badges.
- Bento grid layouts throughout.

### Shadows
- `.shadow-soft`, `.shadow-soft-lg`, `.shadow-soft-xl` — use these, not Tailwind defaults.

### Animations
- GSAP + ScrollTrigger for scroll-driven effects (pin + scrub pattern).
- Motion (motion/react) for entrance animations and UI transitions.
- Spring config: `stiffness: 300, damping: 28`.

### Component conventions
- `StoryScroll` — full-bleed GSAP pin+scrub narrative. Lives in `src/components/ui/story-scroll.tsx`. Sections defined in a `sections` array at the top.
- `SectionHeader` — standard section eyebrow + title + description.
- `PageHeader` — interior page hero with brand-section background.
- The convex pill navbar is unique — do not replicate that shape elsewhere.
