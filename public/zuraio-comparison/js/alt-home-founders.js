import { assetHref } from './path-locale.js';

const FOUNDER_PREVIEW = 'zuraio/assets/team-preview';

/** Same founder cards as the alt homepage team section. */
export function renderAltHomeFounders(people, { gridClass = 'alt-home-founders' } = {}) {
  return (people ?? [])
    .map(
      (p) => `
      <article class="alt-home-founder">
        <div class="alt-home-founder__photo">
          <picture>
            <source type="image/webp" srcset="${assetHref(`${FOUNDER_PREVIEW}/${p.img}.webp`)}">
            <img src="${assetHref(`${FOUNDER_PREVIEW}/${p.img}.webp`)}" alt="" width="250" height="312" loading="lazy" decoding="async" />
          </picture>
        </div>
        <h3 class="alt-home-founder__name">${p.name}</h3>
        <p class="alt-home-founder__email"><a href="mailto:${p.email}">${p.email}</a></p>
      </article>`,
    )
    .join('');
}
