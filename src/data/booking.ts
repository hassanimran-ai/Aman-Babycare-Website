// "Book Your Service" config: services, timings, plans, extras and form options, in one place so they
// can later be edited from an admin panel (PHASE 2). Prices are NOT repeated here: they come from
// src/data/packages.ts by package id. Rules: docs/build/packages-and-pricing.md
// REVIEW-AR: Arabic is a first draft (feminine address, per the client's spec).
import type { L } from '../i18n/ui';
import type { IconName } from '../components/icons';
import { packages } from './packages';

export type Timing = 'hourly' | 'half-day' | 'full-day' | 'day-shift' | 'night' | '24-hours' | 'stay-in';
export type Plan = 'once' | 'weekly' | 'monthly';

// hoursPerDay: null = not confirmed yet; the hours line is then left out.
// window: fixed shift hours, shown under the label in place of "12 hrs/day".
export const timings: Record<Timing, { label: L; hoursPerDay: number | null; window?: L }> = {
  hourly: { label: { ar: 'بالساعة', en: 'Hourly' }, hoursPerDay: null },
  'half-day': { label: { ar: 'نصف يوم', en: 'Half day' }, hoursPerDay: null }, // TODO: client to confirm hours
  'full-day': { label: { ar: 'يوم كامل', en: 'Full day' }, hoursPerDay: null }, // TODO: client to confirm hours
  'day-shift': { label: { ar: 'مناوبة نهارية', en: 'Day shift' }, hoursPerDay: 12, window: { ar: '8ص–8م', en: '8am–8pm' } },
  night: { label: { ar: 'مناوبة ليلية', en: 'Night shift' }, hoursPerDay: 12, window: { ar: '8م–8ص', en: '8pm–8am' } },
  '24-hours': { label: { ar: '24 ساعة', en: '24 hours' }, hoursPerDay: 24 },
  'stay-in': { label: { ar: 'إقامة', en: 'Live-in' }, hoursPerDay: 12 }, // from the stay-in package name
};

// Childcare, newborn and elderly services share these client-confirmed timings.
const careTimings: Timing[] = ['hourly', 'day-shift', 'night', '24-hours', 'stay-in'];

export const plans: Record<Plan, L> = {
  once: { ar: 'مرة واحدة', en: 'One-time' },
  weekly: { ar: 'أسبوعياً', en: 'Weekly' },
  monthly: { ar: 'شهرياً', en: 'Monthly' },
};

export type Extra =
  | { id: string; kind: 'count'; label: L; min: number; max: number; default: number }
  | { id: string; kind: 'choice'; label: L; options: { id: string; label: L }[] };

const children = (label: L): Extra => ({ id: 'children', kind: 'count', label, min: 1, max: 6, default: 1 });

export interface BookingService {
  id: string;
  page: string; // service page slug (src/data/services.ts)
  name: L;
  icon: IconName;
  timings: Timing[];
  plans: Plan[];
  extras: Extra[];
}

const allPlans: Plan[] = ['once', 'weekly', 'monthly'];

// Client-requested order.
export const bookingServices: BookingService[] = [
  {
    id: 'newborn-care',
    page: 'newborn-care',
    name: { ar: 'رعاية المواليد', en: 'Newborn Care' },
    icon: 'baby',
    timings: careTimings,
    plans: allPlans,
    extras: [children({ ar: 'عدد المواليد', en: 'Number of babies' })],
  },
  {
    id: 'babysitting',
    page: 'babysitting',
    name: { ar: 'رعاية الأطفال', en: 'Babysitting' },
    icon: 'child',
    timings: careTimings,
    plans: allPlans,
    extras: [children({ ar: 'عدد الأطفال', en: 'Number of children' })],
  },
  {
    id: 'mother-baby-support',
    page: 'newborn-care',
    name: { ar: 'دعم الأم والطفل', en: 'Mother & Baby Support' },
    icon: 'mother',
    timings: careTimings,
    plans: allPlans,
    extras: [],
  },
  {
    id: 'home-cleaning',
    page: 'home-cleaning',
    name: { ar: 'تنظيف المنازل', en: 'Home Cleaning' },
    icon: 'sparkle',
    timings: ['hourly', 'half-day', 'full-day'],
    plans: allPlans,
    extras: [
      {
        id: 'home',
        kind: 'choice',
        label: { ar: 'نوع البيت', en: 'Home size' },
        options: [
          { id: 'apartment', label: { ar: 'شقة', en: 'Apartment' } },
          { id: 'villa', label: { ar: 'فيلا', en: 'Villa' } },
        ],
      },
    ],
  },
  {
    id: 'elderly-companionship',
    page: 'elderly-companionship',
    name: { ar: 'مرافقة كبار السن', en: 'Elderly Companionship' },
    icon: 'elder',
    timings: careTimings,
    plans: allPlans,
    extras: [],
  },
  {
    id: 'pet-sitting',
    page: 'pet-sitting',
    name: { ar: 'رعاية الكلاب والقطط', en: 'Dog & Cat Sitting' },
    icon: 'paw',
    timings: ['hourly', 'half-day'],
    plans: allPlans,
    extras: [
      { id: 'dogs', kind: 'count', label: { ar: 'عدد الكلاب', en: 'Dogs' }, min: 0, max: 5, default: 0 },
      { id: 'cats', kind: 'count', label: { ar: 'عدد القطط', en: 'Cats' }, min: 0, max: 5, default: 1 },
    ],
  },
  {
    id: 'pick-up-drop-off',
    page: 'pick-up-drop-off',
    name: { ar: 'التوصيل والاستقبال', en: 'Pick-up & Drop-off' },
    icon: 'car',
    timings: ['hourly', 'half-day'],
    plans: allPlans,
    extras: [
      {
        id: 'trip',
        kind: 'choice',
        label: { ar: 'المشوار', en: 'Trip' },
        options: [
          { id: 'one-way', label: { ar: 'ذهاب فقط', en: 'One-way' } },
          { id: 'round', label: { ar: 'ذهاب وعودة', en: 'Round trip' } },
        ],
      },
      {
        id: 'school',
        kind: 'choice',
        label: { ar: 'مشوار المدرسة؟', en: 'School run?' },
        options: [
          { id: 'no', label: { ar: 'لا', en: 'No' } },
          { id: 'yes', label: { ar: 'نعم', en: 'Yes' } },
        ],
      },
    ],
  },
  {
    id: 'errands',
    page: 'errands',
    name: { ar: 'المشتريات والمساعدة الشخصية', en: 'Errands & Personal Assistance' },
    icon: 'bag',
    timings: ['hourly', 'half-day', 'full-day'],
    plans: allPlans,
    extras: [],
  },
];

// "From" prices: each entry points at a package in packages.ts, so a price is only ever edited there.
// DRAFT mapping: confirm with the client which timing each package covers. Anything not listed is
// unknown and shows "Price on WhatsApp".
const priceMap: { service: string; timing: Timing; plan: Plan; packageId: string }[] = [
  { service: 'babysitting', timing: 'hourly', plan: 'once', packageId: 'hourly-babysitting' },
  { service: 'babysitting', timing: 'day-shift', plan: 'weekly', packageId: 'weekly-5' },
  { service: 'babysitting', timing: 'day-shift', plan: 'monthly', packageId: 'monthly-5' },
  { service: 'babysitting', timing: 'stay-in', plan: 'monthly', packageId: 'stay-in' },
  { service: 'elderly-companionship', timing: 'day-shift', plan: 'once', packageId: 'daily-elderly' },
  { service: 'elderly-companionship', timing: 'day-shift', plan: 'monthly', packageId: 'elderly-5' },
];

export const fromPrice = (service: string, timing: Timing, plan: Plan): number | null => {
  const entry = priceMap.find((p) => p.service === service && p.timing === timing && p.plan === plan);
  return (entry && packages.find((p) => p.id === entry.packageId)?.price) ?? null;
};

// Every combination, precomputed for the browser script (it has no access to packages.ts).
export const priceTable = Object.fromEntries(
  bookingServices.flatMap((s) => s.timings.flatMap((t) => s.plans.map((p) => [`${s.id}|${t}|${p}`, fromPrice(s.id, t, p)]))),
);

export const startTimes: { id: string; label: L }[] = [
  { id: 'morning', label: { ar: 'صباحاً', en: 'Morning' } },
  { id: 'afternoon', label: { ar: 'بعد الظهر', en: 'Afternoon' } },
  { id: 'evening', label: { ar: 'مساءً', en: 'Evening' } },
  { id: 'night', label: { ar: 'ليلاً', en: 'Night' } },
];

// Required; nothing pre-selected.
export const caregiverPreferences: { id: string; label: L }[] = [
  { id: 'female', label: { ar: 'أنثى', en: 'Female' } },
  { id: 'male', label: { ar: 'ذكر', en: 'Male' } },
  { id: 'none', label: { ar: 'لا يهم', en: 'No preference' } },
];

// Labels are editable here. Never add nursing or medical roles.
export const caregiverTypes: { id: string; label: L }[] = [
  { id: 'nanny', label: { ar: 'مربية', en: 'Nanny' } },
  { id: 'housekeeper', label: { ar: 'عاملة منزلية', en: 'Housekeeper' } },
  { id: 'companion', label: { ar: 'مرافِقة', en: 'Companion' } },
  { id: 'any', label: { ar: 'أي نوع', en: 'Any' } },
];
export const DEFAULT_CAREGIVER_TYPE = 'any';

export const mobility: { id: string; label: L }[] = [
  { id: 'independent', label: { ar: 'يتحرك باستقلالية', en: 'Independent' } },
  { id: 'assisted', label: { ar: 'يحتاج مساعدة في الحركة', en: 'Needs assistance' } },
];

export const petTypes: { id: string; label: L }[] = [
  { id: 'dog', label: { ar: 'كلب', en: 'Dog' } },
  { id: 'cat', label: { ar: 'قطة', en: 'Cat' } },
  { id: 'other', label: { ar: 'حيوان آخر', en: 'Other pet' } },
];
