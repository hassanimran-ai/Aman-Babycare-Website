# Services

The site's services are the **"Other services"** block of `brand_assets/reference-homepage-mockup.jpeg`. Source of truth: `mainServices` in `src/config/site.ts`; page content in `src/data/services.ts`.

| Tier | Slug | English | Arabic |
| --- | --- | --- | --- |
| core | `babysitting` | Babysitting | رعاية الأطفال |
| core | `elderly-companionship` | Elderly Companionship | مرافقة كبار السن |
| core | `home-cleaning` | Home Cleaning | تنظيف المنازل |
| more | `errands` | Errands & Personal Assistance | المشتريات والمساعدة الشخصية |
| more | `pick-up-drop-off` | Pick-up & Drop-off | التوصيل والاستقبال |
| more | `pet-sitting` | Dog & Cat Sitting | رعاية الكلاب والقطط |
| (card only) | | And more | والمزيد → opens WhatsApp to ask |

- **Order and tiers are client-approved** (Oct 2026): the three core services lead as large cards; the other three sit in a smaller "More help at home" row (`tier` in `src/data/services.ts`). The mock-up's "Other services" row repeats "More services", so it is not built twice.
- Each service has its own page at `/services/<slug>/` (Arabic) and `/en/services/<slug>/`.
- One caregiver can combine several services; this is sold through bundles and the bundle builder.
- **Parked (PHASE 2):** the Newborn & mother care block from the mock-up (`newbornServices` in `site.ts`). Do not link to it until it is built.
