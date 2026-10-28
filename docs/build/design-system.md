# Design system

Direction: **premium, classy, minimalist**. Quiet confidence, not shine. Think a well-kept Riyadh home in morning light, not a sale flyer.

## Colour (tokens in `tailwind.config.mjs`)
| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Primary | `green-700` | `#0A4A38` | Headings, primary buttons, dark bands |
| Primary deep | `green-900` | `#062A20` | Footer, closing band |
| Accent | `gold-500` | `#C69A45` | Hairlines, heart motif, badges, key numbers. Never large fills, never gradients |
| Accent text | `gold-700` | `#8A6421` | Gold text on light backgrounds (contrast safe) |
| Base | `cream-100` | `#FBF7F0` | Page background |
| Surface | `cream-50` | `#FFFDF9` | Cards |
| Soft tint | `pink-100` | `#F7E4E1` | Only behind baby/newborn moments |
| Text | `ink-900` / `ink-600` | | Body / secondary |

Never: Tailwind default blue/indigo, gradients, glitter, emoji, pure black.

## Type
- Arabic: IBM Plex Sans Arabic 400/500/700. Line-height 1.8. No letter-spacing, ever.
- English: Fraunces 600 for H1–H3 (tracking -0.02em), Inter 400/600 for body (line-height 1.7).
- Scale (rem): 0.875 / 1 / 1.125 / 1.5 / 2 / 2.75 / 3.75. Body max line length ~65ch.
- No ALL-CAPS labels, no eyebrow over every heading, no single highlighted word in headlines.

## Spacing
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px (Tailwind 1 2 3 4 6 8 12 16 24 32). Section padding: 64 on mobile, 96–128 on desktop.

## Depth & shape
- Levels: base (no shadow) → card (`shadow-card`) → floating (`shadow-float`: sticky WhatsApp, menu).
- Shadows are green-tinted, low opacity. Never `shadow-md`.
- Radii by hierarchy: photos use the **arch** shape or `rounded-[32px]`, cards `rounded-3xl`, buttons/chips `rounded-full`.

## Signature
1. **Arch frames**: hero and feature photos sit in tall arch-topped frames (the Gulf/Najdi window shape).
2. **Gold heart line**: one fine gold line from the logo's heart swoosh, at most once per section.
3. **Riyadh skyline**: line drawing in the closing band only.
Everything else stays quiet.

## Motion
- Only `transform` and `opacity`, 200–600ms, ease-out. Never `transition-all`.
- One hero load sequence. Interaction feedback (hover, open, select) is fine. No per-section fade-ups, no autoplay.
- `prefers-reduced-motion` disables all of it (`global.css`).

## States
Every clickable thing has hover, a `focus-visible` ring (gold-500, 2px offset) and an active state (scale .98). Tap targets ≥ 44px.

## Layout
- Logical properties only (`ms- me- ps- pe- start- end- text-start`). Directional icons flip in RTL (`rtl:-scale-x-100`).
- Container: `max-w-6xl` with a 16px gutter on mobile, 24px on tablet.
- Text starts at the reading edge (right in Arabic). Centre only short headings in closing bands.
