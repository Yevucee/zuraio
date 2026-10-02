/** Shared final CTA band for alt-chrome pages. */
import { resolveRouteFromLocation } from './site-routes.js';
import { getLocaleFromPathname } from './path-locale.js';

function viewingLocale() {
  return getLocaleFromPathname() === 'de' ? 'de' : 'en';
}

function routeHref(key) {
  return resolveRouteFromLocation(key, viewingLocale(), location.pathname);
}

/**
 * @param {{ heading: string, body: string, button: string, buttonRoute?: string }} cta
 * @param {'paper'|'tint'} band
 */
export function renderAltPageCta(cta, band = 'paper') {
  const route = cta.buttonRoute ?? 'contact';
  const href = routeHref(route);
  return `
    <section class="alt-section alt-section--${band} alt-page-cta">
      <div class="wrap alt-page-cta__inner">
        <div class="alt-page-cta__copy">
          <h2>${cta.heading}</h2>
          <p class="lede">${cta.body}</p>
        </div>
        <div class="alt-page-cta__actions">
          <a class="btn btn-primary btn-lg alt-page-cta__btn" data-route="${route}" href="${href}">${cta.button}</a>
        </div>
      </div>
    </section>`;
}
