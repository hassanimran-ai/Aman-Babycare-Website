# Service pages

Template: `src/components/service/ServicePage.astro`. Content: `src/data/services.ts` (one entry per service, both languages).

## Sections (in order)
1. Breadcrumbs (Home › Services › Service).
2. Hero: a service-specific promise (H1), a short intro, an arch photo, a WhatsApp CTA prefilled with the service name.
3. **A visit with Aman**: a numbered timeline of what actually happens (a real sequence, so the numbers are justified).
4. What's included / what to have ready (two short lists).
5. CTA band.
6. Packages for this service (from `packages.ts`), or "Ask for a price" + a link to `/packages/`.
7. Pairs well with: 2–3 related services and a link to the bundle builder (`/packages/#builder`).
8. Current seasonal offer tie-in.
9. Service FAQ (FAQPage schema).
10. Closing CTA.

## Rules
- Every page's copy is unique: no shared paragraphs between services.
- Schema: LocalBusiness (layout) + Service + BreadcrumbList + FAQPage.
- Title ≤ 60 chars, description ≤ 155 chars, in the page's language.
- Links: Packages, the bundle builder, 2–3 related services. No dead ends.
