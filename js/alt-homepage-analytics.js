/** Analytics for alternative homepage — no-op unless a global tracker exists. */

export function trackAltHome(eventName, props = {}) {
  const payload = { ...props };

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
    return;
  }

  if (typeof window.plausible === 'function') {
    window.plausible(eventName, { props: payload });
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...payload });
  }
}
