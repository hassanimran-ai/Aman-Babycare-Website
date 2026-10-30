// Pricing: the single source of truth for every price and pricing rule. The engine is src/lib/pricing.ts.
// Never invent a number or a rule here. Anything the client hasn't confirmed is null + TODO(client); the
// booking card then shows "Price on WhatsApp" for that service only. Rules: docs/build/packages-and-pricing.md
//
// Reference prices are client-approved DRAFTS copied from https://feelvaleo.com/en-sa/riyadh/babysitting.
// That page states hours for one plan only (stay-in: 12 hours, 6 days, 4 weeks), so every other plan's
// hoursPerDay is null. Hourly rates come from the draft overrides below until the client confirms hours.
import type { L } from '../i18n/ui';

export type Tier = 'oneTime' | 'weekly' | 'monthly';
export type TimingId = 'hourly' | 'half-day' | 'full-day' | 'day-shift' | 'night' | '24-hours' | 'stay-in';
export type Unit = 'hour' | 'visit' | 'trip';

export interface RefPackage {
  id: string; // also the package id in src/data/packages.ts
  price: number; // SAR, whole
  hoursPerDay: number | null; // null = not stated by the client; the package then gives no hourly rate
  daysPerWeek: number;
  weeks: number;
  label: L;
  timing?: TimingId;
}

export interface ServicePricing {
  unit: Unit; // how the service is charged
  tiers: Partial<Record<Tier, RefPackage[]>>;
  hourlyRateOverride?: Partial<Record<Tier, number>>; // SAR per unit, if the client gives rates directly
  minHours?: number | null; // hourly bookings only
  extraPersonPercent?: number | null; // per extra child / baby / pet / elder
  timingPercent?: Partial<Record<TimingId, number>> | null; // night / 24 h / live-in adjustments
  homeSizePercent?: Record<string, number> | null; // cleaning only, keyed "apartment:1-2" etc.
}

// "draft" keeps the "Draft prices" note under every total until the client's own price list replaces these.
export const PRICE_LIST_STATUS: 'draft' | 'final' = 'draft';

export const WEEKS_PER_MONTH = 4; // TODO(client): confirm a month is billed as 4 weeks
export const VAT_RATE: number | null = null; // TODO(client): VAT-registered? e.g. 0.15 adds a VAT line
// TODO(client): when one caregiver does several services in the same hours, is the price summed, or the
// highest line plus an add-on percentage for the others?
export const MULTI_SERVICE_RULE: 'sum' | 'highestPlusAddon' = 'sum';
export const ADDON_PERCENT: number | null = null; // TODO(client): used only by "highestPlusAddon"

// Hours a timing bills per day. "hourly" uses the hours the customer picks. Timings marked `adjusted`
// need a timingPercent in the service's pricing before they can be priced.
export const TIMINGS: Record<TimingId, { label: L; hoursPerDay: number | null; window?: L; adjusted: boolean }> = {
  hourly: { label: { ar: 'بالساعة', en: 'Hourly' }, hoursPerDay: null, adjusted: false },
  'half-day': { label: { ar: 'نصف يوم', en: 'Half day' }, hoursPerDay: null, adjusted: false }, // TODO(client): hours
  'full-day': { label: { ar: 'يوم كامل', en: 'Full day' }, hoursPerDay: null, adjusted: false }, // TODO(client): hours
  'day-shift': { label: { ar: 'مناوبة نهارية', en: 'Day shift' }, hoursPerDay: 12, window: { ar: '8ص–8م', en: '8am–8pm' }, adjusted: false },
  night: { label: { ar: 'مناوبة ليلية', en: 'Night shift' }, hoursPerDay: 12, window: { ar: '8م–8ص', en: '8pm–8am' }, adjusted: true },
  '24-hours': { label: { ar: '24 ساعة', en: '24 hours' }, hoursPerDay: 24, adjusted: true },
  'stay-in': { label: { ar: 'إقامة', en: 'Live-in' }, hoursPerDay: 12, adjusted: true }, // TODO(client): confirm 12 billable hours/day
};

// Shifts are billed at the tier's hourly rate: night 12 h, 24 hours 24 h, live-in 12 h (client decision, Oct 2026).
const sameRateShifts: ServicePricing['timingPercent'] = { night: 0, '24-hours': 0, 'stay-in': 0 };

// DRAFT hourly rates: the "From X SAR per hour" figures on the Packages page (the reference's "as low as"
// rates), approved by the client as booking-card rates until the final price list. TODO(client): confirm.
// Weekly uses 39.29 as approved; the 6-day weekly plan lists 39.
const babysittingRates = { oneTime: 45, weekly: 39.29, monthly: 33.82 };

// Reference packages (the Packages page shows these prices).
const babysitting: ServicePricing = {
  unit: 'hour',
  tiers: {
    oneTime: [
      // TODO(client): hours included in the 345 SAR hourly booking
      { id: 'hourly-babysitting', price: 345, hoursPerDay: null, daysPerWeek: 1, weeks: 1, timing: 'hourly', label: { ar: 'رعاية أطفال بالساعة', en: 'Hourly babysitting' } },
    ],
    weekly: [
      // TODO(client): hours per day for the weekly plans
      { id: 'weekly-5', price: 1259, hoursPerDay: null, daysPerWeek: 5, weeks: 1, label: { ar: 'خطة أسبوعية: 5 أيام', en: 'Weekly plan: 5 days' } },
      { id: 'weekly-6', price: 1489, hoursPerDay: null, daysPerWeek: 6, weeks: 1, label: { ar: 'خطة أسبوعية: 6 أيام', en: 'Weekly plan: 6 days' } },
    ],
    monthly: [
      // TODO(client): hours per day for the 5/6/7-day monthly plans
      { id: 'monthly-5', price: 4929, hoursPerDay: null, daysPerWeek: 5, weeks: 4, label: { ar: '5 أيام × 4 أسابيع', en: '5 days × 4 weeks' } },
      { id: 'monthly-6', price: 5143, hoursPerDay: null, daysPerWeek: 6, weeks: 4, label: { ar: '6 أيام × 4 أسابيع', en: '6 days × 4 weeks' } },
      { id: 'monthly-7', price: 8133, hoursPerDay: null, daysPerWeek: 7, weeks: 4, label: { ar: '7 أيام × 4 أسابيع', en: '7 days × 4 weeks' } },
      { id: 'stay-in', price: 8500, hoursPerDay: 12, daysPerWeek: 6, weeks: 4, timing: 'stay-in', label: { ar: 'إقامة: 12 ساعة × 6 أيام × 4 أسابيع', en: 'Stay-in: 12 hrs × 6 days × 4 weeks' } },
    ],
  },
  hourlyRateOverride: babysittingRates,
  minHours: null, // TODO(client)
  extraPersonPercent: null, // TODO(client): price for each extra child
  timingPercent: sameRateShifts,
};

const elderly: ServicePricing = {
  unit: 'hour',
  tiers: {
    // TODO(client): hours in the 300 SAR "full day" of companionship
    oneTime: [{ id: 'daily-elderly', price: 300, hoursPerDay: null, daysPerWeek: 1, weeks: 1, label: { ar: 'مرافقة كبار السن ليوم', en: 'Daily elderly companionship' } }],
    monthly: [
      // TODO(client): hours per day for the elderly monthly plans
      { id: 'elderly-5', price: 5715, hoursPerDay: null, daysPerWeek: 5, weeks: 4, label: { ar: '5 أيام × 4 أسابيع', en: '5 days × 4 weeks' } },
      { id: 'elderly-6', price: 6858, hoursPerDay: null, daysPerWeek: 6, weeks: 4, label: { ar: '6 أيام × 4 أسابيع', en: '6 days × 4 weeks' } },
      { id: 'elderly-7', price: 8050, hoursPerDay: null, daysPerWeek: 7, weeks: 4, label: { ar: '7 أيام × 4 أسابيع', en: '7 days × 4 weeks' } },
    ],
  },
  // DRAFT: "From 36 SAR per hour" on the Packages page. No weekly rate is listed, so weekly stays on WhatsApp.
  hourlyRateOverride: { oneTime: 36, monthly: 36 },
  minHours: null, // TODO(client)
  extraPersonPercent: null, // TODO(client): second person
  timingPercent: sameRateShifts,
};

// TODO(client): price lists for these services. Until then every line shows "Price on WhatsApp".
const unpriced = (unit: ServicePricing['unit']): ServicePricing => ({
  unit,
  tiers: {},
  minHours: null,
  extraPersonPercent: null,
  timingPercent: null,
});

// TODO(client): own price lists. Until then (client decision, Oct 2026) these use the babysitting rates, but
// not its packages.
const likeBabysitting = (): ServicePricing => ({ ...unpriced('hour'), hourlyRateOverride: babysittingRates, timingPercent: sameRateShifts });

export const PRICING: Record<string, ServicePricing> = {
  'newborn-care': likeBabysitting(),
  babysitting,
  'mother-baby-support': likeBabysitting(),
  'elderly-companionship': elderly,
  'home-cleaning': { ...unpriced('hour'), homeSizePercent: null }, // TODO(client): home size adjustments
  'pet-sitting': unpriced('hour'),
  'pick-up-drop-off': unpriced('trip'), // TODO(client): driving vs accompanying; per-trip price
  errands: unpriced('hour'),
};

const allRefPackages = Object.values(PRICING).flatMap((s) => Object.values(s.tiers).flat());

/** Listed price of a reference package, for the Packages page. */
export const refPrice = (id: string): number => {
  const p = allRefPackages.find((r) => r.id === id);
  if (!p) throw new Error(`Unknown reference package: ${id}`);
  return p.price;
};

// Build-log flag: reference packages that can't give an hourly rate yet.
export const packagesMissingHours = allRefPackages.filter((p) => p.hoursPerDay === null).map((p) => p.id);
