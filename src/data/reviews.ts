// Real reviews from Aman families only, added with their written consent. Never invent or edit one.
// The Reviews section stays hidden until at least 3 entries have consent: true. No Review/AggregateRating
// schema and no stars or ratings, ever.
export interface Review {
  name: string; // as the family agreed to be shown, e.g. "Sara A."
  district: string; // Riyadh district, e.g. "Al Malqa"
  service: string; // service slug from src/data/services.ts
  text: string; // in the language the family wrote it
  date: string; // YYYY-MM-DD
  consent: boolean; // written consent to publish
}

export const reviews: Review[] = [];

export const MIN_REVIEWS = 3;
export const publishableReviews = () => reviews.filter((r) => r.consent === true);
