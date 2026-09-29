import { getAltHomeCopy } from './copy-alt-home.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';
import { trackAltHome } from './alt-homepage-analytics.js';
import { initFaq } from './faq-accordion.js';
import { assetHref } from './path-locale.js';
const DEMO_CACHE = '20260805v2';

function cacheBust(url) {
  if (!url) return url;
  return url.includes('?') ? url : `${url}?v=${DEMO_CACHE}`;
}

function initAltHomeDemoVideo() {
  const videoEl = document.querySelector('.alt-home-demo [data-demo-video]');
  if (!videoEl) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const load = () => {
    if (videoEl.dataset.loaded === 'true') return;
    const raw = videoEl.dataset.src;
    if (!raw) return;
    videoEl.src = cacheBust(raw.startsWith('http') ? raw : assetHref('zuraio/assets/zuraio-demo.mp4'));
    videoEl.dataset.loaded = 'true';
  };

  const tryPlay = () => {
    if (reduceMotion.matches) {
      videoEl.pause();
      return;
    }
    videoEl.play().catch(() => {});
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          load();
          tryPlay();
        } else {
          videoEl.pause();
        }
      });
    },
    { rootMargin: '200px 0px', threshold: 0.15 },
  );
  observer.observe(videoEl);
}

const INTEGRATION_LOGOS = [
  ['bexio', 'bexio'],
  ['abacus', 'Abacus'],
  ['klara', 'Klara'],
  ['proffix', 'Proffix'],
  ['microsoft-365', 'Microsoft 365'],
  ['outlook', 'Outlook'],
  ['sharepoint', 'SharePoint'],
  ['teams', 'Teams'],
  ['sap', 'SAP'],
  ['microsoft-dynamics', 'Dynamics 365'],
  ['salesforce', 'Salesforce'],
  ['hubspot', 'HubSpot'],
  ['odoo', 'Odoo'],
  ['sage', 'Sage'],
];

export function isAltHomeDevBuild() {
  return (
    /localhost|127\.0\.0\.1/.test(location.hostname) ||
    location.search.includes('dev=1') ||
    document.body.dataset.devTodos === 'true'
  );
}

function markPlaceholders(text, isDev, todos) {
  if (!text || !text.includes('[')) return text;
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts
    .map((part) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        todos.push(part.slice(1, -1));
        if (isDev) return `<span class="alt-todo">${part}</span>`;
        return part;
      }
      return part;
    })
    .join('');
}

function getHeroVariant() {
  const raw = new URLSearchParams(location.search).get('hero')?.toLowerCase();
  if (raw === 'c' || raw === 'h') return raw;
  return 'a';
}

function renderMain(copy, locale, isDev) {
  const todos = [];
  const heroKey = getHeroVariant();
  const heroTitle = copy.hero.variants[heroKey];
  const assetBase = '../../zuraio/assets/';

  const reasonsHtml = copy.reasons.cards
    .map(
      (c) => `
      <article class="pain-card alt-home-reason">
        <span class="n">${c.title}</span>
        <p>${markPlaceholders(c.body, isDev, todos)}</p>
      </article>`,
    )
    .join('');

  const skillsHtml = copy.skills.readyMade
    .map(
      ([title, line]) => `
      <article class="hp-use-card alt-home-skill-card">
        <h3>${title}</h3>
        <p>${line}</p>
      </article>`,
    )
    .join('');

  const logosHtml = INTEGRATION_LOGOS.map(
    ([file, label]) =>
      `<li class="alt-home-logo"><img src="../assets/integrations/${file}.svg" alt="${label}" width="120" height="32" loading="lazy" decoding="async" /></li>`,
  ).join('');

  const compareHtml = `
    <article class="compare-trio__col alt-home-compare">
      <h3 class="compare-trio__name">ChatGPT</h3>
      <p class="compare-trio__body">${copy.compare.chatgpt}</p>
    </article>
    <article class="compare-trio__col alt-home-compare">
      <h3 class="compare-trio__name">Microsoft Copilot</h3>
      <p class="compare-trio__body">${copy.compare.copilot}</p>
    </article>
    <article class="compare-trio__col compare-trio__col--zuraio alt-home-compare alt-home-compare--zuraio">
      <h3 class="compare-trio__name">Zuraio</h3>
      <p class="compare-trio__body">${copy.compare.zuraio}</p>
    </article>`;

  const controlHtml = copy.control.points
    .map((p) => `<article class="ccard alt-home-control-point"><p>${markPlaceholders(p, isDev, todos)}</p></article>`)
    .join('');

  const stepsHtml = copy.start.steps
    .map(
      (s, i) => `
      <li class="alt-home-step">
        <span class="alt-home-step__num">${i + 1}</span>
        <p>${markPlaceholders(s, isDev, todos)}</p>
      </li>`,
    )
    .join('');

  const teamHtml = (copy.team?.people ?? [])
    .map(
      (p) => `
      <article class="origin-portraits__cell alt-home-founder">
        <picture>
          <source type="image/webp" srcset="${assetBase}${p.img}.webp">
          <img src="${assetBase}${p.img}.png" alt="" width="800" height="800" loading="lazy" decoding="async" />
        </picture>
        <h3>${p.name}</h3>
        <p class="alt-home-founder__role">${markPlaceholders(p.role ?? '', isDev, todos)}</p>
        <p class="alt-home-founder__email"><a href="mailto:${p.email}">${p.email}</a></p>
      </article>`,
    )
    .join('');

  const faqHtml = (copy.faq?.items ?? [])
    .map(
      (item, i) => `
      <div class="faq-item">
        <button class="faq-q" type="button" aria-expanded="false" id="alt-faq-q-${i}">${item.q}</button>
        <div class="faq-a" hidden role="region" aria-labelledby="alt-faq-q-${i}">
          <p>${item.aHtml ?? markPlaceholders(item.a ?? '', isDev, todos)}</p>
        </div>
      </div>`,
    )
    .join('');

  const mainEl = document.getElementById('alt-home-main');
  if (!mainEl) return;

  mainEl.innerHTML = `
    <section class="alt-home-hero" id="hero">
      <div class="wrap alt-home-hero__grid">
        <div class="alt-home-hero__copy">
          <span class="marker hero-eyebrow">${copy.hero.eyebrow}</span>
          <h1 data-alt-hero-title>${heroTitle}</h1>
          <p class="hero-lede">${copy.hero.sub}</p>
          <div class="cta-row">
            <a class="btn btn-primary btn-lg alt-home-cta" data-alt-cta="hero" href="../contact.html">${copy.hero.cta}</a>
          </div>
          <p class="alt-home-hero__micro">${copy.hero.ctaMicro}</p>
          <p class="alt-home-hero__trust">${copy.hero.trust}</p>
          <p class="alt-home-hero__sector">${copy.hero.sector}</p>
        </div>
        <div class="alt-home-hero__visual">
          <img
            src="${assetHref('zuraio/assets/zuraio-demo-mail.png')}"
            alt="${copy.hero.screenshotAlt}"
            width="1280"
            height="720"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>

    <section class="alt-home-section" id="reasons" aria-labelledby="alt-reasons">
      <div class="wrap">
        <div class="alt-home-reasons">${reasonsHtml}</div>
      </div>
    </section>

    <section class="alt-home-section alt-home-section--cloud" id="demo" aria-labelledby="alt-demo-h">
      <div class="wrap">
        <h2 id="alt-demo-h">${copy.demo.heading}</h2>
        <div class="demo-static alt-home-demo">
          <div class="demo-static__frame">
            <video
              data-demo-video
              data-src="zuraio/assets/zuraio-demo.mp4"
              poster="${assetHref('zuraio/assets/zuraio-demo-mail.png')}"
              width="1280"
              height="720"
              muted
              loop
              playsinline
              controls
              preload="none"
            ></video>
          </div>
          <p class="demo-static__caption alt-home-demo__caption">${markPlaceholders(copy.demo?.caption ?? '', isDev, todos)}</p>
        </div>
      </div>
    </section>

    <section class="alt-home-section" id="skills" aria-labelledby="alt-skills-h">
      <div class="wrap">
        <h2 id="alt-skills-h">${copy.skills.heading}</h2>
        <p class="lede">${copy.skills.intro}</p>
        <div class="alt-home-skills-grid">${skillsHtml}</div>
        <div class="alt-home-skills-band">${markPlaceholders(copy.skills.band, isDev, todos)}</div>
        <p class="section-link"><a class="alt-home-link-secondary" href="${copy.skills.linkHref}">${copy.skills.link}</a></p>
      </div>
    </section>

    <section class="alt-home-section alt-home-section--muted" id="integrations" aria-labelledby="alt-int-h">
      <div class="wrap">
        <h2 id="alt-int-h">${copy.integrations.heading}</h2>
        <p class="lede">${markPlaceholders(copy.integrations.line, isDev, todos)}</p>
        <ul class="alt-home-logos" aria-label="Integrations">${logosHtml}</ul>
        <p class="section-link"><a class="alt-home-link-secondary" href="../integrations.html">${copy.integrations.link}</a></p>
      </div>
    </section>

    <section class="alt-home-section" id="compare" aria-labelledby="alt-compare-h">
      <div class="wrap">
        <h2 id="alt-compare-h">${copy.compare.heading}</h2>
        <div class="compare-trio__grid alt-home-compare-grid">${compareHtml}</div>
      </div>
    </section>

    <section class="control pad alt-home-control" id="control" aria-labelledby="alt-control-h">
      <div class="wrap">
        <h2 id="alt-control-h">${copy.control.heading}</h2>
        <p class="alt-home-control__tagline">${copy.control.tagline ?? ''}</p>
        <div class="ctrl-grid alt-home-control-grid">${controlHtml}</div>
        <p class="alt-home-control__line">${copy.control.serversLine}</p>
        <p class="section-link">
          <a class="alt-home-it-link" data-alt-cta="it_factsheet" href="${copy.control.itHref}">${copy.control.itLink}</a>
        </p>
        <p class="alt-home-control__partner">${markPlaceholders(copy.control.partnerLine, isDev, todos)}</p>
      </div>
    </section>

    <section class="alt-home-section" id="how-start" aria-labelledby="alt-start-h">
      <div class="wrap">
        <h2 id="alt-start-h">${copy.start.heading}</h2>
        <ol class="alt-home-steps">${stepsHtml}</ol>
      </div>
    </section>

    <section class="alt-home-section alt-home-section--paper" id="team" aria-labelledby="alt-team-h">
      <div class="wrap">
        <h2 id="alt-team-h">${copy.team.heading}</h2>
        <p class="lede">${copy.team.body}</p>
        <div class="origin-portraits__grid alt-home-founders">${teamHtml}</div>
        <p class="alt-home-contact">${copy.team.contact ?? ''}</p>
      </div>
    </section>

    <section class="alt-home-section alt-home-section--paper" id="faq" aria-labelledby="alt-faq-h">
      <div class="wrap">
        <h2 id="alt-faq-h">FAQ</h2>
        <div class="faq-list alt-home-faq">${faqHtml}</div>
        <p class="section-link">
          <a class="alt-home-link-secondary" href="../faq.html">${copy.faq.linkAll}</a>
          ·
          <a class="alt-home-link-secondary" href="${copy.faq.linkItHref}">${copy.faq.linkIt}</a>
        </p>
      </div>
    </section>

    <section class="alt-home-final" id="final">
      <div class="wrap alt-home-final__inner">
        <h2>${copy.closing.heading}</h2>
        <a class="btn btn-primary btn-lg alt-home-cta" data-alt-cta="closing" href="../contact.html">${copy.closing.cta}</a>
        <p class="alt-home-final__tag">${copy.closing.tagline}</p>
      </div>
    </section>
  `;

  if (isDev && todos.length) {
    const list = document.getElementById('alt-home-todos');
    if (list) {
      list.hidden = false;
      list.innerHTML = `<h2 class="alt-todo-list__title">Placeholder TODOs</h2><ul>${[...new Set(todos)].map((t) => `<li><code>[${t}]</code></li>`).join('')}</ul>`;
    }
  }

  window.__altHomeTodos = [...new Set(todos)];
}

function bindAnalytics(heroVariant) {
  trackAltHome('hero_variant_view', { variant: heroVariant, page: 'alt_home_preview' });

  document.querySelectorAll('.alt-home-cta').forEach((el) => {
    el.addEventListener('click', () => {
      trackAltHome('cta_demo_click', {
        variant: heroVariant,
        section: el.dataset.altCta || 'unknown',
      });
    });
  });

  document.querySelector('.alt-home-it-link')?.addEventListener('click', () => {
    trackAltHome('it_factsheet_click', { variant: heroVariant });
  });

  const video = document.querySelector('[data-demo-video]');
  video?.addEventListener('play', () => {
    trackAltHome('video_play', { variant: heroVariant });
  }, { once: true });
}

export function bootAltHomepage() {
  const locale = document.documentElement.lang === 'en' ? 'en' : 'de';
  const copy = getAltHomeCopy(locale);
  if (!copy) {
    throw new Error('Alt home copy missing for locale: ' + locale);
  }
  const isDev = isAltHomeDevBuild();

  document.title = copy.metaTitle ?? 'Zuraio preview';

  const heroVariant = getHeroVariant();
  renderAltHomeHeader(copy, locale);
  renderMain(copy, locale, isDev);
  renderAltHomeFooter(copy, locale);
  initFaq();
  initAltHomeDemoVideo();
  bindAnalytics(heroVariant);
}

try {
  bootAltHomepage();
} catch (err) {
  console.error('[alt-homepage]', err);
  const main = document.getElementById('alt-home-main');
  const msg =
    document.documentElement.lang === 'en'
      ? 'This preview could not load. Please check the browser console.'
      : 'Die Vorschau konnte nicht geladen werden. Bitte prüfen Sie die Browser-Konsole.';
  if (main) {
    main.innerHTML = `<div class="wrap pad"><p>${msg}</p></div>`;
  }
}
