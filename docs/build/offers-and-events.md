# Offers & events

Data: `src/data/offers.ts`. Seasonal offers layer a discount on top of the packages.

## Calendar (from Oct 2026)
| Event | Arabic | Date | Type |
| --- | --- | --- | --- |
| White Friday | الجمعة البيضاء | late Nov 2026 | Commercial |
| Ramadan 1448 | رمضان | ~8 Feb 2027* | Religious |
| Saudi Founding Day | يوم التأسيس | 22 Feb | National |
| Eid al-Fitr | عيد الفطر | ~10 Mar 2027* | Religious |
| Eid al-Adha | عيد الأضحى | ~16 May 2027* | Religious |
| Back to school | العودة للمدارس | Aug | Commercial |
| Saudi National Day | اليوم الوطني | 23 Sep | National |

\* Hijri dates depend on moon sighting; always label them "expected".

## Rules
- Exactly one offer has `featured: true`. It shows in the announcement bar, the hero card and the offers panel. Switch it by moving the flag.
- `endsAt` (ISO date) drives the countdown. Once it has passed, the countdown hides itself.
- Discounts stay `[DISCOUNT]` until the client sends real numbers.
- Motifs (SVG, brand colours): crescent for Ramadan & the Eids, palm for Founding/National Day, tag for White Friday, pencil for back to school.
- No other religious occasions.
