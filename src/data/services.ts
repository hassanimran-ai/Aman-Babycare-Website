// Service pages: types, order and helpers. Each page's copy lives in src/data/service-pages/<slug>.ts.
// Titles, descriptions and H1s live in src/data/seo.ts. Rules: docs/build/service-pages.md,
// docs/build/culture-and-copy.md. Help and companionship only: never nursing, medical or clinical care.
// REVIEW-AR: all Arabic copy in src/data/service-pages/ is a first draft and needs a native review.
import type { L } from '../i18n/ui';
import type { IconName } from '../components/icons';
import type { Moded } from './seo';
import { business } from './business';
import newbornCare from './service-pages/newborn-care';
import babysitting from './service-pages/babysitting';
import elderlyCompanionship from './service-pages/elderly-companionship';
import homeCleaning from './service-pages/home-cleaning';
import errands from './service-pages/errands';
import pickUpDropOff from './service-pages/pick-up-drop-off';
import petSitting from './service-pages/pet-sitting';

export type ShiftId = 'day' | 'night' | 'live-in' | 'live-out' | 'hourly' | 'monthly';
type Block = { title: L; text: L };

export interface ServiceContent {
  slug: string;
  // featured: Newborn & Mother Care, a wide card above the rest; core: the headline services, shown
  // large; more: the smaller "more help at home" row.
  tier: 'featured' | 'core' | 'more';
  icon: IconName;
  /** Photo slot (src/lib/photos.ts); defaults to the slug. */
  photo?: string;
  name: L;
  card: L; // one line for cards
  tagline: L; // the emotional promise, shown as the lead under the keyword H1
  /** Services offered within this page (Newborn & Mother Care), shown as their own section. */
  subservices?: { icon: IconName; name: L; text: L }[];
  /** a) Answer-first intro: the first paragraph sits under the H1, the rest under this H2. */
  intro: { title: L; text: Moded<L>[] };
  /** b) Who it's for: 3–4 real situations. */
  who: { title: L; items: Block[] };
  /** c) What's included, and the limits (always non-medical). */
  included: { title: L; items: L[] };
  notIncluded: L[];
  /** d) Shifts & timing. Option labels and times come from business.ts. */
  shifts: { title: L; text: L; options: ShiftId[] };
  /** e) How it works: 3 steps, booking on WhatsApp. */
  steps: { title: L; items: Block[] };
  /** f) Why families choose Aman: this service's own paragraph; the points come from business.ts. */
  why: Block;
  /** g) Packages: packagesFor(slug) unless ids are given. */
  packages: Block & { ids?: string[] };
  /** h) Serving all of Riyadh: one paragraph, no district lists. */
  riyadh: Block;
  faqTitle: L;
  /** i) 6–8 questions (pet sitting: 4). The nationality question is added by serviceFaq().
   *  TODO(client): cancellation policy. Add a cancellation question to each page once it is known. */
  faq: { q: L; a: L }[];
  relatedTitle: L;
  related: string[]; // j) slugs, 3 of them
  whatsapp: L; // k) prefilled message
  /** Book Your Service card service id to preselect (src/data/booking.ts). */
  booking: string;
  /** Services hub comparison table. */
  hub: { bestFor: L; shifts: L; combine: string[] };
}

// Client-approved order: Newborn & Mother Care first, then the core services, then "more help at home".
export const services: ServiceContent[] = [newbornCare, babysitting, elderlyCompanionship, homeCleaning, errands, pickUpDropOff, petSitting];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
export const featuredServices = services.filter((s) => s.tier === 'featured');
export const coreServices = services.filter((s) => s.tier === 'core');
export const moreServices = services.filter((s) => s.tier === 'more');

/** The page's FAQ, plus the nationality question once business.ts answers it. Feeds both the visible
 *  FAQ and the FAQPage schema, so the two always match. */
export const serviceFaq = (s: ServiceContent) => {
  const nationality = business.caregiverNationalityChoice;
  return nationality
    ? [...s.faq, { q: { ar: 'هل يمكن اختيار جنسية مقدّم/ة الرعاية؟', en: "Can we choose the caregiver's nationality?" }, a: nationality }]
    : s.faq;
};

