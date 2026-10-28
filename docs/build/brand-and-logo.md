# Brand & logo

- Source: `brand_assets/Logo.png` (green + gold: mother and baby inside a heart, a small house, a gold heart).
- Processed by `node scripts/process-logo.mjs`. Re-run it whenever the source logo changes.
  - `src/assets/logo-mark.png`: mark only. Header, favicons.
  - `src/assets/logo-full.png`: full lockup. Use on cream only; on dark green put it on a cream badge (its light inner areas are transparent).
  - `src/assets/og-image.png`: 1200×630 social share image.
  - `public/favicon-32.png`, `public/apple-touch-icon.png`, `public/icon-512.png`.
- The header wordmark is HTML text next to the mark (crisp and bilingual).
- Tagline: "Your Comfort, Our Priority" / «راحتكم أولويتنا» (REVIEW-AR). Stored in `site.ts`.
- Colour roles: see [design-system.md](design-system.md).
