import { getAltHomeCopy } from './copy-alt-home.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';
import { trackAltHome } from './alt-homepage-analytics.js';
import { initFaq, initFaqFromHash } from './faq-accordion.js';
import { assetHref, detectSiteBase } from './path-locale.js';
import { resolveRouteFromLocation } from './site-routes.js';
import { isPreviewDevMode, formatPreviewHtml } from './alt-preview-utils.js';
import { initControlParticles } from './control-particles.js';
import { initAltPreviewMarquee } from './alt-integrations-marquee.js';
import { ALT_HOME_REASON_ICONS } from './alt-home-reason-icons.js';
import { ALT_HOME_BUILT_WITH_ICON, ALT_HOME_SKILL_ICONS } from './alt-home-skill-icons.js';
import { ROUTES_OUTCOME_CHECK } from './workflow-icons.js';

const DEMO_CACHE = '20260805v2';

const SPEECH_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a7 7 0 0 0-4 12.7V19a1 1 0 0 0 1 1h2v-3.3A7 7 0 0 0 12 3z"/></svg>`;

function previewLocale() {
  return document.documentElement.lang === 'de' ? 'de' : 'en';
}

function routeHref(routeKey) {
  return resolveRouteFromLocation(routeKey, previewLocale(), location.pathname);
}

function faqItemHref(anchorId) {
  const base = routeHref('faq');
  const path = base.split('#')[0];
  return `${path}#${anchorId}`;
}

function renderHeroTitle(copy, heroKey) {
  if (heroKey === 'a' && copy.hero.headlineLines?.length) {
    return copy.hero.headlineLines
      .map((line) => `<span class="alt-home-hero__line">${line}</span>`)
      .join('');
  }
  return copy.hero.variants[heroKey] ?? '';
}

function renderSameQuestion(copy) {
  const sq = copy.sameQuestion;
  if (!sq) return '';
  const chips = (sq.sourceChips ?? [])
    .map(
      (chip) =>
        `<li class="alt-sq-source-chips__item"><span class="alt-sq-source-chips__icon" aria-hidden="true">${ROUTES_OUTCOME_CHECK}</span><span>${chip}</span></li>`,
    )
    .join('');
  const logo = assetHref('assets/zuraio-logo-nav@2x.webp');
  return `
    <section class="alt-section alt-section--paper" id="same-question" aria-labelledby="alt-sq-h">
      <div class="wrap">
        <div class="alt-section-head alt-sq-head">
          <span class="marker alt-sq-eyebrow">${sq.eyebrow}</span>
          <h2 id="alt-sq-h" class="alt-reveal">${sq.heading}</h2>
          <p class="lede alt-sq-intro">${sq.intro}</p>
        </div>
        <div class="alt-sq-question-pill">
          <span class="alt-sq-question-pill__icon" aria-hidden="true">${SPEECH_ICON}</span>
          <div class="alt-sq-question-pill__text">
            <span class="alt-sq-question-pill__label">${sq.questionLabel}</span>
            <p class="alt-sq-question-pill__q">${sq.question}</p>
          </div>
        </div>
        <div class="alt-sq-bubbles">
          <figure class="alt-sq-bubble alt-sq-bubble--plain">
            <figcaption class="alt-sq-bubble__label">${sq.leftLabel}</figcaption>
            <blockquote class="alt-sq-bubble__body">${sq.leftAnswer}</blockquote>
          </figure>
          <figure class="alt-sq-bubble alt-sq-bubble--zuraio">
            <figcaption class="alt-sq-bubble__label">
              <img class="alt-sq-bubble__mark" src="${logo}" width="72" height="20" alt="" decoding="async" />
              <span>${sq.rightLabel}</span>
            </figcaption>
            <blockquote class="alt-sq-bubble__body">${sq.rightAnswer}</blockquote>
            <div class="alt-sq-sources">
              <span class="alt-sq-sources__label">${sq.sourcesLabel}</span>
              <ul class="alt-sq-source-chips">${chips}</ul>
            </div>
          </figure>
        </div>
        <p class="alt-sq-closing">${sq.closing}</p>
        <p class="alt-sq-link-wrap">
          <a class="alt-home-link-secondary" data-route="faq" href="${faqItemHref(sq.linkAnchor ?? 'chatgpt-copilot')}">${sq.link}</a>
        </p>
      </div>
    </section>`;
}
const FOUNDER_PREVIEW = 'zuraio/assets/team-preview';
const PRODUCT_IMG_WIDTH = 2080;
const PRODUCT_IMG_HEIGHT = 1560;

const HERO_REPLY_IMAGE = {
  en: 'assets/hero/zuraio-hero-reply-en@2x.webp',
  de: 'assets/hero/zuraio-hero-reply-de@2x.webp',
};

const HERO_REPLY_IMAGE_MOBILE = {
  en: {
    path: 'assets/hero/zuraio-hero-reply-en-mobile@3x.webp',
    width: 1170,
    height: 852,
  },
  de: {
    path: 'assets/hero/zuraio-hero-reply-de-mobile@3x.webp',
    width: 1170,
    height: 909,
  },
};

const SKILLS_PRESENTATION_IMAGE = {
  en: 'assets/skills/zuraio-skills-presentation-en@2x.webp',
  de: 'assets/skills/zuraio-skills-presentation-de@2x.webp',
};

function cacheBust(url) {
  if (!url) return url;
  return url.includes('?') ? url : `${url}?v=${DEMO_CACHE}`;
}

function initAltFaqMore() {
  const toggle = document.querySelector('[data-alt-faq-more]');
  const panel = document.querySelector('.alt-home-faq-more');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    panel.hidden = open;
    if (!open) initFaq();
  });
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

export function isAltHomeDevBuild() {
  return isPreviewDevMode();
}

function fmt(text, isDev, todos) {
  return formatPreviewHtml(text, isDev, todos);
}

function getHeroVariant() {
  const raw = new URLSearchParams(location.search).get('hero')?.toLowerCase();
  if (raw === 'c' || raw === 'h') return raw;
  return 'a';
}

function trustLines(trust) {
  if (Array.isArray(trust)) return trust.filter(Boolean);
  return (trust ?? '')
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseSkillExamples(band) {
  const cleaned = (band ?? '').replace(/\[.*?\]/g, '').trim();
  const colon = cleaned.indexOf(':');
  const tail = colon >= 0 ? cleaned.slice(colon + 1) : cleaned;
  return tail
    .split('·')
    .map((s) => s.trim().replace(/^["«]|["»]$/g, ''))
    .filter(Boolean);
}

function renderTrustLine(trust) {
  const lines = trustLines(trust);
  return `<ul class="alt-home-hero__trust-list">${lines
    .map(
      (line) =>
        `<li class="alt-home-hero__trust-item"><span class="alt-home-hero__trust-icon" aria-hidden="true">${ROUTES_OUTCOME_CHECK}</span><span>${line}</span></li>`,
    )
    .join('')}</ul>`;
}

function localeKey(locale) {
  return locale === 'de' ? 'de' : 'en';
}

/** Alt-home static assets live under `zuraio-comparison/assets/` (also copied to site `/assets/` on deploy). */
function altHomeAssetHref(relativePath) {
  const path = relativePath.replace(/^\//, '');
  const siteBase = detectSiteBase();
  if (siteBase) return `${siteBase}/${path}`;
  const segments = location.pathname.split('/').filter(Boolean);
  if (segments[0] === 'zuraio-comparison') {
    return `../${path}`;
  }
  return assetHref(path);
}

function heroReplyImageSrc(locale) {
  return altHomeAssetHref(HERO_REPLY_IMAGE[localeKey(locale)]);
}

function heroReplyMobileImageSrc(locale) {
  return altHomeAssetHref(HERO_REPLY_IMAGE_MOBILE[localeKey(locale)].path);
}

function skillsPresentationImageSrc(locale) {
  return altHomeAssetHref(SKILLS_PRESENTATION_IMAGE[localeKey(locale)]);
}

function renderProductFrameImg({ src, alt, imgAttrs = '', imgExtraClass = '', dataAttr = '' }) {
  return `
      <img
        class="alt-home-product-frame__img${imgExtraClass ? ` ${imgExtraClass}` : ''}"
        ${dataAttr}
        data-src="${src}"
        alt="${alt}"
        width="${PRODUCT_IMG_WIDTH}"
        height="${PRODUCT_IMG_HEIGHT}"
        decoding="async"
        ${imgAttrs}
      />`;
}

function renderHeroVisual(locale, copy) {
  const key = localeKey(locale);
  const src = heroReplyImageSrc(locale);
  const mobileSrc = heroReplyMobileImageSrc(locale);
  const mobile = HERO_REPLY_IMAGE_MOBILE[key];
  const alt = copy.hero.imageAlt ?? '';
  return `
    <div class="alt-home-product-frame alt-home-hero__frame" data-alt-hero-frame hidden>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 599px)"
          data-src="${mobileSrc}"
          width="${mobile.width}"
          height="${mobile.height}"
        />
        <img
          class="alt-home-product-frame__img"
          data-alt-hero-img
          data-src="${src}"
          data-mobile-width="${mobile.width}"
          data-mobile-height="${mobile.height}"
          alt="${alt}"
          width="${PRODUCT_IMG_WIDTH}"
          height="${PRODUCT_IMG_HEIGHT}"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
    </div>`;
}

function renderSkillsVisual(locale, copy) {
  const src = skillsPresentationImageSrc(locale);
  const alt = copy.skills.presentationImageAlt ?? '';
  return `
    <div class="alt-home-skills-head__visual" data-alt-skills-visual hidden>
      <div class="alt-home-product-frame alt-home-skills__frame" data-alt-skills-frame hidden>
        ${renderProductFrameImg({ src, alt, imgAttrs: 'loading="lazy"' })}
      </div>
    </div>`;
}

function probeProductImage(frame, img, onReady, onMissing) {
  if (!frame || !img) {
    onMissing();
    return;
  }
  const src = img.dataset.src;
  if (!src) {
    onMissing();
    return;
  }

  const ready = () => {
    img.src = src;
    const mobileSource = frame?.querySelector('picture source[data-src]');
    const mobileSrc = mobileSource?.dataset.src;
    if (mobileSource && mobileSrc) {
      mobileSource.srcset = mobileSrc;
    }
    img.classList.add('is-loaded');
    if (img.complete && img.naturalWidth > 0) {
      onReady();
      return;
    }
    img.addEventListener('load', onReady, { once: true });
    img.addEventListener('error', onMissing, { once: true });
  };

  const probe = new Image();
  probe.onload = ready;
  probe.onerror = onMissing;
  probe.src = src;
}

function initHeroVisualSlot() {
  const hero = document.querySelector('.alt-home-hero');
  const frame = document.querySelector('[data-alt-hero-frame]');
  const img = frame?.querySelector('[data-alt-hero-img]');
  const visualCol = document.querySelector('.alt-home-hero__visual');
  if (!hero || !frame) return;

  const setVisualVisible = (visible) => {
    hero.classList.toggle('alt-home-hero--has-visual', visible);
    hero.classList.toggle('alt-home-hero--text-only', !visible);
    frame.hidden = !visible;
    if (visualCol) visualCol.hidden = !visible;
  };

  setVisualVisible(false);

  probeProductImage(
    frame,
    img,
    () => setVisualVisible(true),
    () => {
      img?.remove();
      setVisualVisible(false);
    },
  );
}

function initSkillsVisualSlot() {
  const section = document.getElementById('skills');
  const outer = section?.querySelector('[data-alt-skills-visual]');
  const frame = section?.querySelector('[data-alt-skills-frame]');
  const img = frame?.querySelector('.alt-home-product-frame__img');
  if (!section || !outer || !frame) return;

  const show = () => {
    section.classList.add('alt-home-skills--has-visual');
    outer.hidden = false;
    frame.hidden = false;
  };

  const hide = () => {
    section.classList.remove('alt-home-skills--has-visual');
    outer.hidden = true;
    frame.hidden = true;
  };

  hide();

  probeProductImage(
    frame,
    img,
    show,
    () => {
      img?.remove();
      hide();
    },
  );
}

function renderMain(copy, locale, isDev) {
  const todos = [];
  const heroKey = getHeroVariant();

  const reasonsStripHtml = copy.reasons.cards
    .map(
      (c, i) => `
      <div class="alt-home-reasons-strip__item" role="listitem">
        <span class="alt-home-reasons-strip__icon" aria-hidden="true">${ALT_HOME_REASON_ICONS[i] ?? ''}</span>
        <div class="alt-home-reasons-strip__text">
          <h3 class="alt-home-reasons-strip__title">${c.title}</h3>
          <p class="alt-home-reasons-strip__body">${fmt(c.body, isDev, todos)}</p>
        </div>
      </div>`,
    )
    .join('');

  const skillsHtml = copy.skills.readyMade
    .map((skill, i) => {
      const title = skill.title ?? skill[0] ?? '';
      const body = skill.body ?? skill[1] ?? '';
      const sources = skill.sources ?? '';
      return `
      <article class="alt-home-skill-card">
        <span class="alt-home-skill-card__icon" aria-hidden="true">${ALT_HOME_SKILL_ICONS[i] ?? ''}</span>
        <h3 class="alt-home-skill-card__title">${title}</h3>
        <p class="alt-home-skill-card__body">${fmt(body, isDev, todos)}</p>
        <p class="alt-home-skill-card__sources">${sources}</p>
      </article>`;
    })
    .join('');

  const controlCardsHtml = (copy.control.cards ?? [])
    .map((c) => `<div class="ccard"><h4>${c.title}</h4><p>${c.body}</p></div>`)
    .join('');

  const stepsHtml = copy.start.steps
    .map((s, i) => {
      const title = s.title ?? '';
      const body = fmt(s.body ?? '', isDev, todos);
      const meta = s.titleMeta ? `<p class="alt-home-step__meta">${s.titleMeta}</p>` : '';
      return `
      <article class="alt-preview-card alt-home-step">
        <div class="alt-home-step__head">
          <span class="alt-home-step__num" aria-hidden="true">${i + 1}</span>
          <div class="alt-home-step__titles">
            <h3 class="alt-preview-card__title">${title}</h3>
            ${meta}
          </div>
        </div>
        <p>${body}</p>
      </article>`;
    })
    .join('');

  const teamHtml = (copy.team?.people ?? [])
    .map((p) => {
      const roleHtml = fmt(p.role ?? '', isDev, todos);
      return `
      <article class="alt-home-founder">
        <div class="alt-home-founder__photo">
          <picture>
            <source type="image/webp" srcset="${assetHref(`${FOUNDER_PREVIEW}/${p.img}.webp`)}">
            <img src="${assetHref(`${FOUNDER_PREVIEW}/${p.img}.webp`)}" alt="" width="250" height="312" loading="lazy" decoding="async" />
          </picture>
        </div>
        <h3 class="alt-home-founder__name">${p.name}</h3>
        ${roleHtml ? `<p class="alt-home-founder__role">${roleHtml}</p>` : ''}
        <p class="alt-home-founder__email"><a href="mailto:${p.email}">${p.email}</a></p>
      </article>`;
    })
    .join('');

  const faqItems = copy.faq?.items ?? [];
  const faqPrimary = faqItems.slice(0, 4);
  const faqMore = faqItems.slice(4);
  const faqItemHtml = (item, i) => `
      <div class="faq-item"${item.id ? ` id="${item.id}"` : ''}>
        <button class="faq-q" type="button" aria-expanded="false" id="alt-faq-q-${i}">${item.q}</button>
        <div class="faq-a" hidden role="region" aria-labelledby="alt-faq-q-${i}">
          <p>${item.aHtml ?? fmt(item.a ?? '', isDev, todos)}</p>
        </div>
      </div>`;
  const faqHtml =
    faqPrimary.map((item, i) => faqItemHtml(item, i)).join('') +
    (faqMore.length
      ? `<div class="alt-home-faq-more" hidden>
          ${faqMore.map((item, j) => faqItemHtml(item, j + 4)).join('')}
        </div>
        <button type="button" class="alt-home-faq-more-toggle faq-q" aria-expanded="false" data-alt-faq-more>
          ${copy.faq.moreLabel ?? 'More questions'}
        </button>`
      : '');

  const mainEl = document.getElementById('alt-home-main');
  if (!mainEl) return;

  const skillsEyebrow = copy.skills.eyebrowShort ?? copy.skills.eyebrow ?? '';
  const skillExamples = parseSkillExamples(copy.skills.band ?? '');
  const skillChips = skillExamples
    .map((ex) => `<span class="alt-home-skills-built__chip">${fmt(ex, isDev, todos)}</span>`)
    .join('');

  mainEl.innerHTML = `
    <section class="alt-section alt-home-hero alt-home-hero--text-only" id="hero">
      <div class="wrap alt-home-hero__grid">
        <div class="alt-home-hero__copy">
          <div class="alt-home-hero__stack">
            <span class="marker hero-eyebrow">${copy.hero.eyebrow}</span>
            <h1 data-alt-hero-title>${renderHeroTitle(copy, heroKey)}</h1>
            <p class="alt-home-hero__sub">${copy.hero.sub}</p>
            <div class="alt-home-hero__actions">
              <a class="btn btn-primary btn-lg alt-home-cta" data-alt-cta="hero" data-route="contact" href="${routeHref('contact')}">${copy.hero.cta}</a>
              <p class="alt-home-hero__micro">${copy.hero.ctaMicro}</p>
            </div>
            <div class="alt-home-hero__trust">${renderTrustLine(copy.hero.trust)}</div>
          </div>
        </div>
        <div class="alt-home-hero__visual" hidden>
          ${renderHeroVisual(locale, copy)}
        </div>
      </div>
      <div class="wrap alt-home-hero__tail">
        <hr class="alt-home-hero__strip-rule" aria-hidden="true" />
        <div class="alt-home-reasons-strip" role="list">${reasonsStripHtml}</div>
      </div>
    </section>

    <section class="alt-section alt-section--paper demo" id="demo" aria-labelledby="alt-demo-h">
      <div class="wrap">
        <div class="alt-section-head">
          <h2 id="alt-demo-h" class="alt-reveal">${copy.demo.heading}</h2>
        </div>
        <div class="demo-static alt-home-demo">
          <div class="demo-static__frame alt-home-demo__frame">
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
          <p class="demo-static__caption alt-home-demo__caption">${fmt(copy.demo?.caption ?? '', isDev, todos)}</p>
        </div>
      </div>
    </section>

    <section class="alt-section" id="skills" aria-labelledby="alt-skills-h">
      <div class="wrap">
        <div class="alt-home-skills-head">
          <div class="alt-section-head alt-home-skills-head__copy">
            <span class="marker alt-skills-eyebrow">${skillsEyebrow}</span>
            <h2 id="alt-skills-h" class="alt-reveal">${copy.skills.heading}</h2>
            <p class="lede">${copy.skills.intro}</p>
          </div>
          ${renderSkillsVisual(locale, copy)}
        </div>
        <div class="alt-home-skills-grid">${skillsHtml}</div>
        <div class="alt-home-skills-built">
          <div class="alt-home-skills-built__main">
            <p class="alt-home-skills-built__label">
              <span class="alt-home-skills-built__label-icon" aria-hidden="true">${ALT_HOME_BUILT_WITH_ICON}</span>
              ${copy.skills.footnoteLabel ?? ''}
            </p>
            <div class="alt-home-skills-built__chips">${skillChips}</div>
          </div>
          <a class="alt-home-link-secondary alt-home-skills-built__link" data-route="skills" href="${routeHref('skills')}">${copy.skills.link}</a>
        </div>
      </div>
    </section>

    <section class="alt-section alt-home-integrations" id="integrations" aria-labelledby="alt-int-h">
      <div class="wrap alt-home-integrations__head-wrap">
        <div class="alt-home-integrations__head">
          <h2 id="alt-int-h" class="alt-reveal">${copy.integrations.heading}</h2>
          <p class="alt-home-integrations__sub">${copy.integrations.line}</p>
        </div>
      </div>
      <div class="marquee-track alt-home-integrations__marquee" data-alt-marquee tabindex="0" aria-label="${locale === 'de' ? 'Integrationen' : 'Integrations'}">
        <div class="marquee-inner"></div>
      </div>
      <div class="wrap alt-home-integrations__foot">
        <p class="alt-home-integrations__link-wrap"><a class="alt-home-link-secondary" data-route="integrations" href="${routeHref('integrations')}">${copy.integrations.link}</a></p>
      </div>
    </section>

    ${renderSameQuestion(copy)}

    <section class="control alt-section alt-section--control" id="data-control" aria-labelledby="alt-control-h">
      <canvas class="control-particles" data-control-particles aria-hidden="true"></canvas>
      <div class="wrap">
        <div class="head-block alt-section-head">
          <span class="marker">${copy.control.eyebrow}</span>
          <h2 id="alt-control-h" class="alt-reveal">${copy.control.heading}</h2>
          <p class="lede">${copy.control.intro}</p>
          <p class="alt-control-intro-support">${copy.control.introSupport ?? ''}</p>
        </div>
        <div class="ctrl-panel">
          <div class="ctrl-grid">${controlCardsHtml}</div>
          <div class="alt-home-control-footer">
            <p class="ctrl-note"><span style="color:var(--soft-olive);">▣</span><span>${copy.control.note}</span></p>
            <p class="section-link">
              <a class="alt-home-it-link" data-alt-cta="it_factsheet" data-route="it-partner" href="${routeHref('it-partner')}">${copy.control.itLink}</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="alt-section alt-section--paper" id="how-start" aria-labelledby="alt-start-h">
      <div class="wrap">
        <div class="alt-section-head">
          <h2 id="alt-start-h" class="alt-reveal">${copy.start.heading}</h2>
        </div>
        <div class="alt-home-steps">${stepsHtml}</div>
      </div>
    </section>

    <section class="alt-section alt-section--paper alt-home-team" id="team" aria-labelledby="alt-team-h">
      <div class="wrap">
        <div class="alt-section-head">
          <h2 id="alt-team-h" class="alt-reveal">${copy.team.heading}</h2>
          <p class="lede">${copy.team.body}</p>
        </div>
        <div class="origin-portraits__grid alt-home-founders">${teamHtml}</div>
        <p class="alt-home-contact">${copy.team.contact ?? ''}</p>
        ${copy.team.contactFollowUp ? `<p class="alt-home-contact alt-home-contact__followup">${copy.team.contactFollowUp}</p>` : ''}
      </div>
    </section>

    <section class="alt-section alt-section--paper" id="faq" aria-labelledby="alt-faq-h">
      <div class="wrap">
        <div class="alt-section-head">
          <h2 id="alt-faq-h" class="alt-reveal">FAQ</h2>
        </div>
        <div class="faq-list alt-home-faq">${faqHtml}</div>
        <p class="alt-home-faq-links">
          <a class="alt-home-link-secondary" data-route="faq" href="${routeHref('faq')}">${copy.faq.linkAll}</a>
          <span class="alt-home-faq-links__sep" aria-hidden="true">·</span>
          <a class="alt-home-link-secondary" data-route="it-partner" href="${routeHref('it-partner')}">${copy.faq.linkIt}</a>
        </p>
      </div>
    </section>

    ${
      copy.aiTrademark
        ? `<section class="alt-section alt-section--paper alt-home-trademark-band" aria-label="Trademarks">
      <div class="wrap">
        <p class="alt-int-trademark">${copy.aiTrademark}</p>
      </div>
    </section>`
        : ''
    }

    <section class="alt-section alt-home-final" id="final">
      <div class="wrap alt-home-final__inner">
        <h2>${copy.closing.heading}</h2>
        <a class="btn btn-primary btn-lg alt-home-cta" data-alt-cta="closing" data-route="contact" href="${routeHref('contact')}">${copy.closing.cta}</a>
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
  initHeroVisualSlot();
  initSkillsVisualSlot();
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
  initAltFaqMore();
  initFaqFromHash();
  window.addEventListener('hashchange', initFaqFromHash);
  initAltHomeDemoVideo();
  initControlParticles();
  initAltPreviewMarquee();
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
