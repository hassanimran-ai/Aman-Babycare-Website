# CLAUDE.md — Aman Baby Care & Home Services Website

## Project
Bilingual (Arabic-first) marketing website for "Aman Baby Care & Home Services" (أمان لرعاية المواليد والخدمات المنزلية), a home-care company in Riyadh, KSA.
Goal: rank on Google for Riyadh home-care searches and turn visitors into WhatsApp bookings.
Deadline: Saturday Oct 31, 2026, 6 PM. MVP first; mark later work with `// PHASE 2`.

## Always Do First
- Read `src/config/site.ts` (all business facts) and this file before any change.
- Do not start any design work until the `frontend-design` skill is installed and activated. Invoke it before writing UI code.
- Check `brand_assets/` for logo, colors, and images. Use real assets over placeholders. Style references live in `brand_assets/references/`.
- Read the matching rules file in `docs/build/` (index: `docs/build/README.md`) before working on that area: design system, brand/logo, culture & copy, imagery, services, service pages, packages, offers, header, engagement, visual QA, contact details.

## Stack (do not change)
- Astro (static output) + Tailwind CSS (installed via npm, never the CDN script) + TypeScript.
- Astro i18n: `ar` default at `/`, `en` at `/en/`. Same English slugs in both languages.
- Fonts self-hosted with @fontsource: IBM Plex Sans Arabic (Arabic), a serif display + clean sans for English headings/body. Preload the main Arabic weight only.
- Images through Astro `<Image>` / `<Picture>` (AVIF/WebP), with width/height set.
- Ship zero JavaScript by default. Use small islands only where interaction is needed (menu, bundle builder, cookie banner).
- Host: Cloudflare Pages.

## Business Facts (never invent)
- Every fact comes from `src/config/site.ts`. Unknown values stay as placeholders like `[WHATSAPP_NUMBER]`, `[CR_NUMBER]`, `[ADDRESS]`, `[PRICE]`.
- Do NOT write: licensed, certified, nurse, nursing, medical, hospital-grade, MOH, 24/7, "500+ families", or any number/credential not in `site.ts`.
- Prices and offers come only from `src/data/packages.ts` and `src/data/offers.ts`. Current prices are client-approved DRAFTS (from a reference site); they must be confirmed before `isLive` is set to true.
- Allowed trust claim: staff are background-checked.
- Do NOT create reviews, testimonials, ratings, or star icons. Use an honest "Be among our first families" block instead.
- No Review or AggregateRating schema.

## Services (one caregiver can combine several; sold as bundles)
Main: Babysitting, Home Cleaning, Elderly Companionship, Dog & Cat Sitting, Pick-up & Drop-off, Errands & Personal Assistance.
Newborn & mother care (one combined page): Newborn Care at Home, Feeding Support, Baby Bathing & Hygiene, Sleep & Comfort, Mother & Baby Support. Parked as PHASE 2 for now (client instruction); do not link to it. Personalized Care Plans live on the Packages page.

## SEO Rules (every page)
- One unique `<title>` (≤60 chars) and meta description (≤155 chars), in the page's language.
- Exactly one H1; H2/H3 in logical order; no repeated headings.
- Canonical URL, hreflang `ar` + `en` + `x-default` (→ Arabic), Open Graph + Twitter tags with an image.
- JSON-LD: LocalBusiness on all pages; Service on service pages; FAQPage where an FAQ block exists; BreadcrumbList on inner pages.
- Internal links: every service page links to Packages, the bundle builder, and 2–3 related services. No dead-end pages.
- Each page has unique content. Never duplicate a section across pages or within a page.
- Bilingual, descriptive alt text on every meaningful image; empty `alt=""` for decorative ones.
- `site.ts` has `isLive`. While false: `noindex, nofollow` on all pages and robots.txt disallows all.
- Keep sitemap, robots.txt, and 404 working after every change.

## Arabic & RTL
- `<html lang="ar" dir="rtl">` for Arabic, `lang="en" dir="ltr"` for English.
- Use logical utilities only (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`). Never hard-code left/right.
- Flip directional icons (arrows, chevrons) in RTL.
- Arabic copy: natural Saudi-friendly Modern Standard Arabic, not word-for-word translation. Mark any machine-translated text with `<!-- REVIEW-AR -->`.
- The language toggle links to the same page in the other language. No splash screen, no auto-redirect, no Google Translate.

## Culture & Imagery
- Modest imagery: women in hijab, Saudi/Gulf home interiors, no immodest clothing, no alcohol, no music or party imagery.
- Seasonal content (Ramadan, Eid al-Fitr, Eid al-Adha) is welcome. Do not add other religious occasions unless instructed. National occasions (Saudi Founding Day, Saudi National Day) and commercial ones (White Friday, back to school) are approved for offers.
- Warm, respectful, family-first tone.

## Conversion
- Sticky WhatsApp button on mobile; prefilled message per page and per language, built from `site.ts`.
- Above the fold: benefit headline, 3 trust points, one primary CTA.
- A CTA after every 2–3 sections on long pages.
- Forms (if any) need a PDPL consent checkbox linking to the privacy page.
- Analytics scripts (GA4, Meta, Snapchat) load only after cookie consent and only if their IDs are set.

## Design Guardrails
- Colors: only the brand tokens in `tailwind.config` (green primary, muted gold accent, cream base, soft pink tint + neutrals), matching the logo. Premium and minimalist: no gradients, no shiny gold. Never default Tailwind blue/indigo.
- Shadows: soft, layered, green-tinted, low opacity. No flat `shadow-md`.
- Type: headings tracking `-0.02em` (English only; never add letter-spacing to Arabic), body line-height 1.7 (1.8 for Arabic).
- Spacing: use a consistent scale (e.g. 4/8/12/16/24/32/48/64/96). No random values.
- Depth: base → elevated card → floating (sticky button, menu).
- Animation: only `transform` and `opacity`, gentle easing, respect `prefers-reduced-motion`. Never `transition-all`. No autoplay sliders or blocking popups.
- Images: keep photos bright and warm. Use overlays only behind text on hero images, never on service card photos.
- Every clickable element has hover, focus-visible, and active states. Tap targets ≥ 44px.

## Reference Designs
- A reference image or site guides style (colors, card shapes, spacing, mood), not structure.
- Do not copy duplicate sections, unverified claims, or fake reviews from any reference.

## Verify Before Saying Done
1. `npm run build` passes with no errors or warnings.
2. Run the dev server (`npm run dev`, http://localhost:4321) in the background; do not start a second instance.
3. Screenshot with `node scripts/screenshot.mjs <url> <label>` (Playwright; create the script if missing). Check mobile (375px), tablet (768px) and desktop (1440px), in Arabic and English. Screenshots are saved in `screenshots/` at the project root (gitignored); the client may ask to clear that folder at any time.
4. Read each screenshot and fix spacing, alignment, RTL mirroring, overflow, and contrast issues. Repeat the screenshot → review → fix loop until nothing is left to fix (minimum 2 rounds).
5. Run Lighthouse on mobile for the changed pages; target 95+ in Performance, Accessibility, Best Practices, and SEO.
6. Report what changed, what is still a placeholder, and any `REVIEW-AR` items.

## Hard Rules
- Never invent business facts, credentials, reviews, or statistics.
- Never use the Tailwind CDN or a single-file `index.html` build.
- Never break the Arabic/English page pairs or the hreflang links.
- Never hard-code left/right spacing.
- Never use `transition-all`.
