# Services

The site's services are the **"Other services"** block of `brand_assets/reference-homepage-mockup.jpeg`. Source of truth: `mainServices` in `src/config/site.ts`; page content in `src/data/services.ts`.

| Slug | English | Arabic |
| --- | --- | --- |
| `babysitting` | Babysitting | رعاية الأطفال |
| `home-cleaning` | Home Cleaning | تنظيف المنازل |
| `elderly-companionship` | Elderly Companionship | مرافقة كبار السن |
| `pet-sitting` | Dog & Cat Sitting | رعاية الكلاب والقطط |
| `pick-up-drop-off` | Pick-up & Drop-off | التوصيل والاستقبال |
| `errands` | Errands & Personal Assistance | المشتريات والمساعدة الشخصية |
| (card only) | And more | والمزيد → opens WhatsApp to ask |

- Each service has its own page at `/services/<slug>/` (Arabic) and `/en/services/<slug>/`.
- One caregiver can combine several services; this is sold through bundles and the bundle builder.
- **Parked (PHASE 2):** the Newborn & mother care block from the mock-up (`newbornServices` in `site.ts`). Do not link to it until it is built.
