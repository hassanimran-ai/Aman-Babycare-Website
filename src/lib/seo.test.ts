import { describe, expect, it } from 'vitest';
import { seo, type Moded } from '../data/seo';
import type { L } from '../i18n/ui';

// Both keyword modes must fit Google's limits, whichever one is live.
const both = (v: Moded<L>): L[] => ('care' in v ? [v.care, v.worker] : [v]);

describe('seo.ts keyword map', () => {
  for (const [key, page] of Object.entries(seo)) {
    it(`${key}: titles ≤ 60 and descriptions ≤ 155 chars, in both modes and languages`, () => {
      for (const t of both(page.title)) for (const s of [t.ar, t.en]) expect(s.length, s).toBeLessThanOrEqual(60);
      for (const d of both(page.description)) for (const s of [d.ar, d.en]) expect(s.length, s).toBeLessThanOrEqual(155);
    });
  }
  it('never uses «خادمة»', () => {
    expect(JSON.stringify(seo)).not.toContain('خادمة');
  });
});
