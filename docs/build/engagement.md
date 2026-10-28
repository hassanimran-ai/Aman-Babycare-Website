# Engagement

Goal: a visitor who lands keeps scrolling and ends on WhatsApp.

- **Open on value:** the featured seasonal offer appears in the announcement bar and as a card in the hero, so it's the first thing seen.
- **Above the fold:** benefit headline, 3 trust points, one primary CTA.
- **Something to do mid-page:** the bundle builder lets visitors tick services and watch their WhatsApp message build up.
- **Urgency without pressure:** a countdown on the featured offer; an upcoming-occasions row.
- **Rhythm:** a CTA after every 2–3 sections. Alternate light and quiet-dark sections so the scroll feels like chapters.
- **Every page ends with a next step:** related services, packages, WhatsApp.
- **Honesty:** no fake reviews or numbers; "Be among our first families" instead.

## Motion (client-approved, Oct 2026)
All CSS in `src/styles/global.css`, transform/opacity (and `translate`) only, and switched off under `prefers-reduced-motion`.
- **Scroll reveal:** add `reveal` to a heading block or `reveal-group` to a grid; children finish one after another. Uses scroll-driven animations; unsupported browsers just show the content.
- **Hero:** `HeroBackdrop.astro` (arch, Najdi band, gold leaves drifting slowly) and `.parallax` on the hero photo.
- **Card tilt:** `data-tilt` on service and package cards; `CardTilt.astro` sets the angle on desktop pointers only (max 4°), with a lift shadow.
- **Self-drawing lines:** `HeartLine` and `Skyline` open from the reading start when scrolled into view.
- **Small touches:** WhatsApp button rings twice after 4s (`wa-pulse`), saving badges shimmer (`shimmer`), countdown digits flip on change.
- **Glass ribbons:** see `header-and-navigation.md`.
- Screenshots (`scripts/screenshot.mjs`) run with reduced motion so full-page captures show every section.
