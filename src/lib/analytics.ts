// Analytics events (browser only). Nothing is sent unless the visitor accepted cookies AND a tag is
// loaded, which only happens when its ID is set in site.analytics. Never pass personal data: service
// ids and package types only.
// PHASE 2: the cookie banner sets window.amanConsent = true and then loads GA4 / Meta / Snapchat.
type Params = Record<string, string | number>;

interface Tags {
  amanConsent?: boolean;
  gtag?: (cmd: 'event', name: string, params: Params) => void;
  fbq?: (cmd: 'trackCustom', name: string, params: Params) => void;
  snaptr?: (cmd: 'track', name: string, params: Params) => void;
}

export function track(event: string, params: Params = {}) {
  const w = window as unknown as Tags;
  if (w.amanConsent !== true) return;
  w.gtag?.('event', event, params);
  w.fbq?.('trackCustom', event, params);
  w.snaptr?.('track', event, params);
}
