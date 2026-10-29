# Photos

Drop a photo here and it replaces the matching branded panel automatically. The file name (without extension) is the slot name; `.jpg`, `.jpeg`, `.png` or `.webp` all work. Alt text (both languages) and crop focus for each slot live in `src/lib/photos.ts`.

| # | File name | Where it shows |
| --- | --- | --- |
| 1 | `hero` | Home page hero |
| 2 | `babysitting` | Babysitting card + page |
| 3 | `home-cleaning` | Home cleaning card + page |
| 4 | `elderly-companionship` | Elderly companionship card + page |
| 5 | `pet-sitting` | Dog & cat sitting card + page |
| 6 | `pick-up-drop-off` | Pick-up & drop-off card + page |
| 7 | `errands` | Errands card + page |
| 8 | `trust` | Home page "background-checked" section |
| 9 | `services-hero` | Top of the Services page (shown only when present) |
| 10 | `packages-hero` | Top of the Packages page (shown only when present) |
| 11 | `how-it-works` | Home page "How it works" (shown only when present) |
| 12 | `first-families` | "Be among our first families" card on the home page (shown only when present) |
| 13–19 | `offer-white-friday`, `offer-ramadan`, `offer-founding-day`, `offer-eid-al-fitr`, `offer-eid-al-adha`, `offer-back-to-school`, `offer-national-day` | Home page offers: banner on the featured offer card, photo on each "Coming up" card (branded panel until present) |

The client delivers numbered files in `brand_assets/Website photos/` (`1.png` … `19.png`, numbers as above); they are converted to `<slot>.jpg` here.

Rules: see `docs/build/imagery.md` (modest, Gulf home settings, bright and warm).

## Credits
| File | Source | Author | Licence |
| --- | --- | --- | --- |
| `hero.jpg`, `babysitting.jpg`, `home-cleaning.jpg`, `elderly-companionship.jpg`, `pet-sitting.jpg`, `pick-up-drop-off.jpg`, `errands.jpg`, `trust.jpg`, `services-hero.jpg`, `packages-hero.jpg`, `how-it-works.jpg`, `first-families.jpg`, `offer-white-friday.jpg`, `offer-founding-day.jpg`, `offer-eid-al-fitr.jpg`, `offer-eid-al-adha.jpg`, `offer-back-to-school.jpg`, `offer-national-day.jpg` | AI-generated (Google Gemini, "Nano Banana"), supplied by the client, Oct 2026 | Client | Client-owned; illustrative, not real staff or clients |

Missing: `offer-ramadan` (the delivered `14.png` was a copy of `13.png`).
