# Header & navigation

The current version follows the Nestling reference; **the client will revise it later**, so keep it a self-contained component (`src/components/Header.astro`).

- Order: announcement bar (featured offer) → header.
- Desktop: logo mark + wordmark at the start, nav links in a soft pill in the middle, language toggle + "Book on WhatsApp" at the end.
- Nav: Home, Services, Packages, Offers (`#offers` on home), FAQ (`#faq` on home). Only link pages that exist.
- Mobile: logo + language toggle + menu button. The menu is a small island; it closes on Escape and on link tap.
- The language toggle links to the same page in the other language, with `hreflang` and `lang` set.
- Sticky WhatsApp button on mobile (floating level), prefilled per page and language. Hidden on desktop, where the header CTA is visible.
