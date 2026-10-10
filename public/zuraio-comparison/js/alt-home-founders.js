import { assetHref } from './path-locale.js';

const FOUNDER_PREVIEW = 'zuraio/assets/team-preview';

/** Prefer breaking before @ so the domain stays on one line when possible. */
export function formatFounderEmailHtml(email) {
  const raw = (email ?? '').trim();
  const at = raw.indexOf('@');
  if (at <= 0) return raw;
  const local = raw.slice(0, at);
  const domain = raw.slice(at + 1);
  return `<span class="alt-home-founder__email-local">${local}</span><wbr>@<span class="alt-home-founder__email-domain">${domain}</span>`;
}

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
        <p class="alt-home-founder__email"><a href="mailto:${p.email}">${formatFounderEmailHtml(p.email)}</a></p>
      </article>`,
    )
    .join('');
}
