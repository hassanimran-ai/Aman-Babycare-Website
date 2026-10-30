// Book Your Service: step sequence, validation, engine selection and summary text. Pure functions, no DOM;
// BookingCard.astro renders them. Config: src/data/booking.ts. Pricing: src/lib/pricing.ts.
import { HOURS_RANGE, SCHEDULE, tiers, type Answers, type BookingService, type Opt, type Step } from '../data/booking';
import { PRICING, TIMINGS, type TimingId } from '../data/pricing';
import { arDays, arHours, arVisits, type Selection } from './pricing';

type Lang = 'ar' | 'en';

export type Screen =
  | { kind: 'count' | 'single' | 'multi'; id: string; step: Extract<Step, { kind: 'count' | 'single' | 'multi' }> }
  | { kind: 'age'; id: string; step: Extract<Step, { kind: 'ages' }>; index: number; total: number }
  | { kind: 'timing'; id: string; options: TimingId[] }
  | { kind: 'hours' | 'pets' | 'tier' | 'schedule' | 'review'; id: string };

const range = ([a, b]: readonly [number, number]) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

/** Timing options with the data they need; half/full day stay hidden until their hours are set. */
export const timingOptions = (options: TimingId[]) => options.filter((t) => t === 'hourly' || TIMINGS[t].hoursPerDay != null);

export const hourOptions = (service: string) => {
  const min = PRICING[service]?.minHours;
  return range([Math.max(HOURS_RANGE[0], min ?? HOURS_RANGE[0]), HOURS_RANGE[1]]);
};

export const scheduleOptions = {
  oneTimeDays: range(SCHEDULE.oneTimeDays),
  daysPerWeek: range(SCHEDULE.daysPerWeek),
  weeks: range(SCHEDULE.weeks),
  months: range(SCHEDULE.months),
};

/** The screens for one service, given the answers so far (age screens follow the count, hours follow "hourly"). */
export function stepsFor(svc: BookingService, a: Answers): Screen[] {
  const out: Screen[] = [];
  for (const step of svc.steps) {
    if (step.kind === 'ages') {
      const total = step.countKey ? ((a[step.countKey] as number) ?? 1) : 1;
      for (let i = 0; i < total; i++) out.push({ kind: 'age', id: `age-${i}`, step, index: i, total });
    } else if (step.kind === 'timing') {
      out.push({ kind: 'timing', id: 'timing', options: timingOptions(step.options) });
      if (a.timing === 'hourly') out.push({ kind: 'hours', id: 'hours' });
    } else if (step.kind === 'pets') {
      out.push({ kind: 'pets', id: 'pets' });
    } else {
      out.push({ kind: step.kind, id: step.key, step });
    }
  }
  out.push({ kind: 'tier', id: 'tier' }, { kind: 'schedule', id: 'schedule' }, { kind: 'review', id: 'review' });
  return out;
}

export function isValid(screen: Screen, a: Answers): boolean {
  switch (screen.kind) {
    case 'count':
    case 'single':
      return a[screen.step.key] != null;
    case 'multi':
      return Array.isArray(a[screen.step.key]) && (a[screen.step.key] as string[]).length > 0;
    case 'age':
      return Array.isArray(a[screen.step.key]) && (a[screen.step.key] as string[])[screen.index] != null;
    case 'timing':
      return a.timing != null && screen.options.includes(a.timing);
    case 'hours':
      return typeof a.hours === 'number';
    case 'pets':
      return ((a.dogs as number) ?? 0) + ((a.cats as number) ?? 0) > 0 || String(a.otherPet ?? '').trim() !== '';
    case 'tier':
      return a.tier != null;
    case 'schedule':
      if (a.tier === 'oneTime') return typeof a.days === 'number';
      if (a.tier === 'weekly') return typeof a.daysPerWeek === 'number' && typeof a.weeks === 'number';
      return typeof a.daysPerWeek === 'number' && typeof a.months === 'number';
    case 'review':
      return true;
  }
}

/** Answers that no longer match the screens (e.g. ages beyond a lowered count) are dropped. */
export function tidy(svc: BookingService, a: Answers): Answers {
  const next = { ...a };
  for (const step of svc.steps) {
    if (step.kind === 'ages' && Array.isArray(next[step.key])) {
      const total = step.countKey ? ((next[step.countKey] as number) ?? 1) : 1;
      next[step.key] = (next[step.key] as string[]).slice(0, total);
    }
  }
  if (next.timing !== 'hourly') delete next.hours;
  return next;
}

export function isComplete(svc: BookingService, a: Answers) {
  return stepsFor(svc, a).every((s) => isValid(s, a));
}

export function toSelection(svc: BookingService, a: Answers): Selection {
  const sel: Selection = {
    service: svc.id,
    tier: a.tier ?? 'oneTime',
    timing: svc.unit === 'trips' ? null : (a.timing ?? null),
    hours: a.hours,
    people: svc.people(a),
    days: a.days,
    daysPerWeek: a.daysPerWeek,
    weeks: a.weeks,
    months: a.months,
  };
  if (svc.id === 'home-cleaning' && a.home && a.size) sel.homeSize = `${a.home}:${a.size}`;
  if (svc.unit === 'trips') sel.tripsPerDay = a.trip === 'round' ? 2 : 1;
  return sel;
}

// ---------- Text ----------
const arCount = (k: number, one: string, two: string, few: string, many: string) =>
  k === 1 ? one : k === 2 ? two : k <= 10 ? `${k} ${few}` : `${k} ${many}`;
const en = (k: number, word: string, plural = `${word}s`) => `${k} ${k === 1 ? word : plural}`;
const list = (lang: Lang) => (lang === 'ar' ? '، ' : ', ');
const label = (opts: Opt[], id: unknown, lang: Lang) => opts.find((o) => o.id === id)?.label[lang] ?? '';
const labels = (opts: Opt[], ids: unknown, lang: Lang) => (Array.isArray(ids) ? ids.map((i) => label(opts, i, lang)).filter(Boolean).join(list(lang)) : '');

const nouns = {
  babies: { ar: (k: number) => arCount(k, 'مولود واحد', 'مولودان', 'مواليد', 'مولوداً'), en: (k: number) => en(k, 'baby', 'babies') },
  children: { ar: (k: number) => arCount(k, 'طفل واحد', 'طفلان', 'أطفال', 'طفلاً'), en: (k: number) => en(k, 'child', 'children') },
  people: { ar: (k: number) => arCount(k, 'شخص واحد', 'شخصان', 'أشخاص', 'شخصاً'), en: (k: number) => en(k, 'person', 'people') },
  dogs: { ar: (k: number) => arCount(k, 'كلب واحد', 'كلبان', 'كلاب', 'كلباً'), en: (k: number) => en(k, 'dog') },
  cats: { ar: (k: number) => arCount(k, 'قطة واحدة', 'قطتان', 'قطط', 'قطة'), en: (k: number) => en(k, 'cat') },
} as const;

/** "2 children (1–3, 3–6)" and the other service-specific answers. */
function detailText(svc: BookingService, a: Answers, lang: Lang): string {
  const parts: string[] = [];
  for (const step of svc.steps) {
    if (step.kind === 'count') {
      const noun = nouns[step.key as keyof typeof nouns];
      const k = (a[step.key] as number) ?? 1;
      if (noun) parts.push(noun[lang](k));
    } else if (step.kind === 'ages') {
      const ages = labels(step.options, a[step.key], lang);
      if (!ages) continue;
      if (step.countKey && parts.length) parts[parts.length - 1] += ` (${ages})`;
      else parts.push(lang === 'ar' ? `عمر المولود ${ages}` : `baby ${ages}`);
    } else if (step.kind === 'single') {
      const v = label(step.options, a[step.key], lang);
      if (v) parts.push(v);
    } else if (step.kind === 'multi') {
      const v = labels(step.options, a[step.key], lang);
      if (v) parts.push(v);
    } else if (step.kind === 'pets') {
      const pets = [
        (a.dogs as number) > 0 && nouns.dogs[lang](a.dogs as number),
        (a.cats as number) > 0 && nouns.cats[lang](a.cats as number),
        String(a.otherPet ?? '').trim(),
      ].filter(Boolean);
      if (pets.length) parts.push(pets.join(list(lang)));
    }
  }
  return parts.join(' · ');
}

export function timingText(a: Answers, lang: Lang): string {
  if (!a.timing) return '';
  const t = TIMINGS[a.timing];
  if (a.timing === 'hourly') return a.hours ? `${t.label[lang]} · ${lang === 'ar' ? arHours(a.hours) : en(a.hours, 'hr')}` : t.label[lang];
  return t.window ? `${t.label[lang]} ${t.window[lang]}` : t.label[lang];
}

const unitCount = (unit: BookingService['unit'], k: number, lang: Lang) => {
  if (lang === 'ar') return unit === 'visits' ? arVisits(k) : arDays(k);
  return unit === 'visits' ? en(k, 'visit') : en(k, 'day');
};

export function scheduleText(svc: BookingService, a: Answers, lang: Lang): string {
  if (a.tier === 'oneTime') return a.days ? unitCount(svc.unit, a.days, lang) : '';
  if (!a.daysPerWeek) return '';
  const perWeek = lang === 'ar' ? `${unitCount(svc.unit, a.daysPerWeek, 'ar')} أسبوعياً` : `${en(a.daysPerWeek, svc.unit === 'visits' ? 'visit' : 'day')}/week`;
  if (a.tier === 'weekly' && a.weeks) {
    const w = lang === 'ar' ? arCount(a.weeks, 'أسبوع واحد', 'أسبوعان', 'أسابيع', 'أسبوعاً') : en(a.weeks, 'week');
    return `${perWeek} × ${w}`;
  }
  if (a.tier === 'monthly' && a.months) {
    const m = lang === 'ar' ? arCount(a.months, 'شهر واحد', 'شهران', 'أشهر', 'شهراً') : en(a.months, 'month');
    return `${perWeek} × ${m}`;
  }
  return perWeek;
}

/**
 * One-line spec, e.g. "2 children (1–3, 3–6) · Day shift 8am–8pm · 6 days/week × 4 weeks".
 * level 1 drops the service details, level 2 keeps only the schedule (used to keep WhatsApp messages short).
 */
export function specText(svc: BookingService, a: Answers, lang: Lang, level: 0 | 1 | 2 = 0): string {
  const tierLabel = tiers.find((t) => t.id === a.tier)?.label[lang];
  const sched = [tierLabel, scheduleText(svc, a, lang)].filter(Boolean).join(' · ');
  const parts = level === 2 ? [sched] : level === 1 ? [timingText(a, lang), sched] : [detailText(svc, a, lang), timingText(a, lang), sched];
  return parts.filter(Boolean).join(' · ');
}

