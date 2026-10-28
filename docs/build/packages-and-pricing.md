# Packages & pricing

Data: `src/data/packages.ts`. Edit prices there only.

- The structure is modelled on the client-supplied Valeo Riyadh babysitting page (https://feelvaleo.com/en-sa/riyadh/babysitting).
- **All prices are DRAFT** (`draft: true`), copied from that page as a starting point. The client must confirm or replace them before `site.isLive` becomes true.
- Elderly plans are named **companionship**, never "care" or "nursing".
- Groups: On-demand (hourly, weekly), Monthly babysitting (5/6/7 days, stay-in), Monthly elderly companionship (5/6/7 days), Welcome offer.
- Services without a price (cleaning, pets, pick-up, errands) show "Ask for a price on WhatsApp".
- Currency: «ر.س» in Arabic, "SAR" in English. Prices use Western digits in both languages (common on Saudi sites); revisit if the client prefers Arabic-Indic digits.
- Never label a package "most popular" (that's a claim). "Lowest hourly rate" is allowed only when the maths shows it.

## Page layout
- The groups and the bundle builder sit behind one glass-ribbon tab bar (`GlassRibbon` with `variant="tabs"`), sticky under the nav. One panel shows at a time; `#on-demand`, `#monthly`, `#elderly` and `#builder` open the matching tab. Without JS all panels show.
