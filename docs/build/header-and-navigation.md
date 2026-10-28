# Header & navigation

Self-contained component: `src/components/Header.astro`. The ribbon is `src/components/GlassRibbon.astro` (also used for the Packages tabs).

- Order: announcement bar (featured offer) → header.
- **Logo lockup** mirrors `brand_assets/Logo.png`: logo mark, the short name with a small gold heart, then "Baby Care & Home Services" and the Arabic line. Text comes from `site.name` / `site.shortName`. Never show the short name alone.
- **Navigation is a glass ribbon, never a hidden menu** (client request, Oct 2026): Home · Services · **Offers** (middle, gold, so it stands out) · Packages · FAQ. Only link pages that exist.
  - Phones and tablets: logo row, then the ribbon full width (icon over label). The header uses a negative sticky top, so the logo row scrolls away and the ribbon stays stuck.
  - Desktop: one sticky row: logo, ribbon in the middle (icon beside label), language toggle + "Book on WhatsApp".
  - The glass pill sits on the current page. It moves by `transform` only, with a short squish. Between pages it glides via cross-document View Transitions (`view-transition-name: nav-pill`); on the home page it follows the Offers/FAQ sections in view.
- The language toggle links to the same page in the other language, with `hreflang` and `lang` set.
- Sticky WhatsApp button on mobile (floating level), prefilled per page and language. Hidden on desktop, where the header CTA is visible.
