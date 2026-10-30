// Packages and prices. Rules: docs/build/packages-and-pricing.md
// Prices come from src/data/pricing.ts (refPrice); DRAFT numbers from the client-supplied reference
// https://feelvaleo.com/en-sa/riyadh/babysitting — confirm every price before site.isLive = true.
import type { L } from '../i18n/ui';
import { refPrice } from './pricing';

export type PackageGroup = 'on-demand' | 'monthly' | 'elderly';

export interface Package {
  id: string;
  group: PackageGroup;
  service: string; // slug from mainServices
  name: L;
  detail: L;
  price: number | null; // SAR; null = ask on WhatsApp
  was?: number;
  perHour?: number;
  draft: boolean;
}

// tab: short label for the Packages page ribbon. REVIEW-AR
export const groups: { id: PackageGroup; name: L; tab: L; intro: L }[] = [
  {
    id: 'on-demand',
    name: { ar: 'عند الحاجة', en: 'On demand' },
    tab: { ar: 'عند الحاجة', en: 'On demand' },
    intro: {
      ar: 'ساعات أو أيام محددة، حين تحتاجون يداً إضافية في البيت.',
      en: 'A few hours or a few days, whenever you need an extra pair of hands.',
    },
  },
  {
    id: 'monthly',
    name: { ar: 'رعاية الأطفال الشهرية', en: 'Monthly babysitting' },
    tab: { ar: 'خطط الأطفال', en: 'Babysitting plans' },
    intro: {
      ar: 'الشخص نفسه من فريق الرعاية كل أسبوع، ليعتاد عليه أطفالكم وتطمئنوا.',
      en: 'The same caregiver every week, so your children settle in and you can relax.',
    },
  },
  {
    id: 'elderly',
    name: { ar: 'مرافقة كبار السن الشهرية', en: 'Monthly elderly companionship' },
    tab: { ar: 'خطط كبار السن', en: 'Elderly plans' },
    intro: {
      ar: 'صحبة يومية ثابتة لوالديكم، بإيقاع يناسبهم.',
      en: 'Steady daily company for your parents, at a pace that suits them.',
    },
  },
];

export const packages: Package[] = [
  // On demand
  {
    id: 'hourly-babysitting',
    group: 'on-demand',
    service: 'babysitting',
    name: { ar: 'رعاية أطفال بالساعة', en: 'Hourly babysitting' },
    detail: { ar: 'لمشوار أو مناسبة أو ليلة هادئة لكما', en: 'For an errand, a family occasion or an evening out' },
    price: refPrice('hourly-babysitting'),
    was: 425,
    perHour: 45,
    draft: true,
  },
  {
    id: 'weekly-5',
    group: 'on-demand',
    service: 'babysitting',
    name: { ar: 'خطة أسبوعية: 5 أيام', en: 'Weekly plan: 5 days' },
    detail: { ar: 'أسبوع عمل كامل مع شخص واحد من فريق الرعاية', en: 'A full working week with one caregiver' },
    price: refPrice('weekly-5'),
    perHour: 39.29,
    draft: true,
  },
  {
    id: 'weekly-6',
    group: 'on-demand',
    service: 'babysitting',
    name: { ar: 'خطة أسبوعية: 6 أيام', en: 'Weekly plan: 6 days' },
    detail: { ar: 'ستة أيام، ويوم الجمعة لكم', en: 'Six days, with Friday kept for family' },
    price: refPrice('weekly-6'),
    perHour: 39,
    draft: true,
  },
  {
    id: 'daily-elderly',
    group: 'on-demand',
    service: 'elderly-companionship',
    name: { ar: 'مرافقة كبار السن ليوم', en: 'Daily elderly companionship' },
    detail: { ar: 'يوم كامل من الصحبة والمساعدة', en: 'A full day of company and practical help' },
    price: refPrice('daily-elderly'),
    draft: true,
  },
  // Monthly babysitting
  {
    id: 'monthly-5',
    group: 'monthly',
    service: 'babysitting',
    name: { ar: '5 أيام × 4 أسابيع', en: '5 days × 4 weeks' },
    detail: { ar: 'لأيام العمل والدراسة', en: 'For school and work days' },
    price: refPrice('monthly-5'),
    was: 5150,
    perHour: 34.55,
    draft: true,
  },
  {
    id: 'monthly-6',
    group: 'monthly',
    service: 'babysitting',
    name: { ar: '6 أيام × 4 أسابيع', en: '6 days × 4 weeks' },
    detail: { ar: 'تغطية الأسبوع كله تقريباً', en: 'Almost the whole week covered' },
    price: refPrice('monthly-6'),
    was: 6320,
    perHour: 34,
    draft: true,
  },
  {
    id: 'monthly-7',
    group: 'monthly',
    service: 'babysitting',
    name: { ar: '7 أيام × 4 أسابيع', en: '7 days × 4 weeks' },
    detail: { ar: 'كل يوم من أيام الشهر', en: 'Every day of the month' },
    price: refPrice('monthly-7'),
    was: 10528,
    perHour: 33.82,
    draft: true,
  },
  {
    id: 'stay-in',
    group: 'monthly',
    service: 'babysitting',
    name: { ar: 'إقامة: 12 ساعة × 6 أيام × 4 أسابيع', en: 'Stay-in: 12 hrs × 6 days × 4 weeks' },
    detail: { ar: 'رعاية مقيمة في بيتكم لأيام طويلة', en: 'A live-in caregiver for long days' },
    price: refPrice('stay-in'),
    was: 10284,
    perHour: 35.7,
    draft: true,
  },
  // Monthly elderly companionship
  {
    id: 'elderly-5',
    group: 'elderly',
    service: 'elderly-companionship',
    name: { ar: '5 أيام × 4 أسابيع', en: '5 days × 4 weeks' },
    detail: { ar: 'صحبة في أيام الأسبوع', en: 'Company on weekdays' },
    price: refPrice('elderly-5'),
    was: 6550,
    perHour: 36,
    draft: true,
  },
  {
    id: 'elderly-6',
    group: 'elderly',
    service: 'elderly-companionship',
    name: { ar: '6 أيام × 4 أسابيع', en: '6 days × 4 weeks' },
    detail: { ar: 'روتين ثابت طوال الأسبوع', en: 'A steady routine all week' },
    price: refPrice('elderly-6'),
    was: 7800,
    perHour: 36,
    draft: true,
  },
  {
    id: 'elderly-7',
    group: 'elderly',
    service: 'elderly-companionship',
    name: { ar: '7 أيام × 4 أسابيع', en: '7 days × 4 weeks' },
    detail: { ar: 'لا يمر يوم دون صحبة', en: 'Never a day without company' },
    price: refPrice('elderly-7'),
    was: 8800,
    perHour: 36,
    draft: true,
  },
];

export const welcomeOffer = {
  name: { ar: 'عرض الترحيب: 6 ساعات رعاية أطفال', en: 'Welcome offer: 6 hours of babysitting' },
  detail: {
    ar: 'لأول حجز لكم معنا، لتتعرفوا على أمان بلا التزام.',
    en: 'For your first booking, so you can get to know Aman with no commitment.',
  },
  price: '[PRICE]',
};

export const packagesFor = (service: string) => packages.filter((p) => p.service === service);
export const packagesIn = (group: PackageGroup) => packages.filter((p) => p.group === group);
