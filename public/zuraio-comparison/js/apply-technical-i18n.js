import * as deBundle from './copy-de-technical.js';
import * as frBundle from './copy-fr-technical.js';
import * as itBundle from './copy-it-technical.js';
import * as enBundle from './copy-en.js';
import { langHrefForLocale } from './path-locale.js';

const BUNDLES = { en: enBundle, de: deBundle, fr: frBundle, it: itBundle };

let statusLabels;
let deployStatusLabels;
let technicalPages;
let faqItems;
let faqItHeading;
let faqItItems;
let faqCta;

function setActiveBundle(locale) {
  const bundle = BUNDLES[locale] ?? BUNDLES.en;
  if (!bundle) return false;
  statusLabels = bundle.statusLabels;
  deployStatusLabels = bundle.deployStatusLabels;
  technicalPages = bundle.technicalPages;
  faqItems = bundle.faqItems;
  faqItHeading = bundle.faqItHeading;
  faqItItems = bundle.faqItItems;
  faqCta = bundle.faqCta;
  return true;
}

function langHref(path, locale) {
  return langHrefForLocale(path, locale);
}

function setText(el, text) {
  if (el && text != null) el.textContent = text;
}

function setHtml(el, html) {
  if (el && html != null) el.innerHTML = html;
}

function fillSection(section, { marker, heading, lede }) {
  if (!section) return;
  setText(section.querySelector('.marker'), marker);
  setText(section.querySelector('h2'), heading);
  const ledeEl = section.querySelector('.lede');
  if (ledeEl && lede != null) setText(ledeEl, lede);
}

function fillCards(container, cards) {
  if (!container || !cards) return;
  container.querySelectorAll('.pcard, .layer-card').forEach((card, i) => {
    const data = cards[i];
    if (!data) return;
    setText(card.querySelector('h3'), data.title);
    setText(card.querySelector('p'), data.body);
  });
}

function fillList(listEl, items) {
  if (!listEl || !items) return;
  listEl.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function fillFlowSteps(listEl, steps, withBody = true) {
  if (!listEl || !steps) return;
  if (withBody) {
    listEl.innerHTML = steps
      .map(
        (step) =>
          `<li><strong>${step.title}</strong> — ${step.body}</li>`,
      )
      .join('');
  } else {
    listEl.innerHTML = steps.map((step) => `<li><strong>${step}</strong></li>`).join('');
  }
}

function fillLink(linkEl, label, href, locale) {
  if (!linkEl) return;
  linkEl.textContent = label;
  if (href) linkEl.href = langHref(href, locale);
}

function maturityClass(status) {
  if (status === 'available') return 'maturity-label--available';
  if (status === 'validation') return 'maturity-label--validation';
  return 'maturity-label--specified';
}

function applyTechnicalArchitecture(locale) {
  const copy = technicalPages.technicalArchitecture;
  const toc = document.querySelector('.tech-toc');
  if (toc) {
    setText(toc.querySelector('.toc-title'), copy.tocTitle);
    const nav = toc.querySelector('nav');
    if (nav) {
      nav.innerHTML = copy.toc
        .map((item) => `<a href="${item.href}">${item.label}</a>`)
        .join('');
    }
    toc.setAttribute('aria-label', copy.tocTitle);
  }

  setText(document.querySelector('.page-hero .hero-note'), copy.heroNote);
  const heroCtas = document.querySelectorAll('.page-hero .cta-row a');
  if (heroCtas[0]) {
    setText(heroCtas[0], copy.primaryCta);
    heroCtas[0].href = langHref('contact.html', locale);
  }
  if (heroCtas[1]) {
    setText(heroCtas[1], copy.secondaryCta);
    heroCtas[1].href = langHref('deployment-models.html', locale);
  }

  const overview = document.querySelector('#overview');
  fillSection(overview, copy.overview);
  fillCards(overview?.querySelector('.layer-grid'), copy.overview.layers);

  const svg = overview?.querySelector('.arch-svg');
  if (svg) {
    setText(svg.querySelector('#arch-title'), copy.overview.diagramTitle);
    setText(svg.querySelector('#arch-desc'), copy.overview.diagramDesc);
    svg.querySelectorAll('text').forEach((textEl, i) => {
      if (copy.overview.diagramLayers[i]) setText(textEl, copy.overview.diagramLayers[i]);
    });
  }
  setText(overview?.querySelector('.diagram-caption'), copy.overview.diagramCaption);

  const requestFlow = document.querySelector('#request-flow');
  fillSection(requestFlow, copy.requestFlow);
  fillFlowSteps(requestFlow?.querySelector('.flow-steps'), copy.requestFlow.steps);

  const maturity = document.querySelector('#maturity');
  fillSection(maturity, copy.maturity);
  maturity?.querySelectorAll('.maturity-panel').forEach((panel, i) => {
    const data = copy.maturity.panels[i];
    if (!data) return;
    const label = panel.querySelector('.maturity-label');
    if (label) {
      label.textContent = statusLabels[data.status];
      label.className = `maturity-label ${maturityClass(data.status)}`;
    }
    setText(panel.querySelector('h3'), data.title);
    fillList(panel.querySelector('ul'), data.items);
    const qual = panel.querySelector('.qualification');
    if (qual) {
      if (data.qualification) {
        qual.textContent = data.qualification;
        qual.hidden = false;
      } else {
        qual.hidden = true;
      }
    }
  });

  const models = document.querySelector('#models');
  fillSection(models, copy.models);
  fillList(models?.querySelector('ul'), copy.models.items);
  setText(models?.querySelector('.qualification'), copy.models.qualification);
  fillLink(models?.querySelector('a'), copy.models.link, copy.models.linkHref, locale);

  const integrationLayer = document.querySelector('#integration-layer');
  fillSection(integrationLayer, copy.integrationLayer);
  fillList(integrationLayer?.querySelector('ul'), copy.integrationLayer.items);
  setText(integrationLayer?.querySelector('.qualification'), copy.integrationLayer.qualification);
  fillLink(
    integrationLayer?.querySelector('a'),
    copy.integrationLayer.link,
    copy.integrationLayer.linkHref,
    locale,
  );

  const rollout = document.querySelector('#rollout');
  fillSection(rollout, copy.rollout);
  fillFlowSteps(rollout?.querySelector('.flow-steps'), copy.rollout.steps, false);

  const cta = document.querySelector('.cta-inline');
  setText(cta?.querySelector('h2'), copy.cta.heading);
  const ctaBtn = cta?.querySelector('.btn');
  setText(ctaBtn, copy.cta.button);
  if (ctaBtn) ctaBtn.href = langHref('contact.html', locale);
}

function contentSections() {
  return [...document.querySelectorAll('main > section')].filter(
    (section) =>
      !section.classList.contains('page-hero') &&
      !section.hasAttribute('data-i18n-en-only') &&
      !section.classList.contains('cta-band'),
  );
}

function applyKnowledge(locale) {
  const copy = technicalPages.knowledge;

  const skillos = document.querySelector('#skillos');
  fillSection(skillos, { marker: copy.skillos.marker, heading: copy.skillos.heading });
  const skillosLedes = skillos?.querySelectorAll('.lede');
  copy.skillos.ledes.forEach((text, i) => setText(skillosLedes?.[i], text));
  fillCards(skillos?.querySelector('.grid-cards'), copy.skillos.cards);

  const [skillsSection, sourcesSection, traceSection] = contentSections().filter(
    (section) => section.id !== 'skillos',
  );
  if (skillsSection) {
    fillSection(skillsSection, copy.skills);
    fillList(skillsSection.querySelector('ul'), copy.skills.items);
  }

  if (sourcesSection) {
    fillSection(sourcesSection, copy.sources);
    fillCards(sourcesSection.querySelector('.grid-cards'), copy.sources.cards);
    setText(sourcesSection.querySelector('.qualification'), copy.sources.qualification);
  }

  if (traceSection) {
    fillSection(traceSection, copy.traceability);
    fillList(traceSection.querySelector('ul'), copy.traceability.items);
    setText(traceSection.querySelector('.qualification'), copy.traceability.qualification);
    fillLink(
      traceSection.querySelector('a'),
      copy.traceability.link,
      copy.traceability.linkHref,
      locale,
    );
  }

  const cta = document.querySelector('.cta-band');
  setText(cta?.querySelector('h2'), copy.cta.heading);
  setText(cta?.querySelector('.lede'), copy.cta.lede);
  const btn = cta?.querySelector('.btn');
  setText(btn, copy.cta.button);
  if (btn) btn.href = langHref('contact.html', locale);
}

function applyDataControl(locale) {
  document.querySelectorAll('[data-i18n-en-only]').forEach((el) => {
    el.remove();
  });

  const copy = technicalPages.dataControl;
  const [ownership, identity, actions, policies, security] = contentSections();

  if (ownership) {
    fillSection(ownership, copy.ownership);
    fillCards(ownership.querySelector('.grid-cards'), copy.ownership.cards);
  }

  if (identity) {
    fillSection(identity, copy.identity);
    fillCards(identity.querySelector('.grid-cards'), copy.identity.cards);
    setText(identity.querySelector('.qualification'), copy.identity.qualification);
  }

  if (actions) {
    fillSection(actions, copy.actions);
    fillList(actions.querySelector('ul'), copy.actions.items);
    setText(actions.querySelector('.qualification'), copy.actions.qualification);
  }

  if (policies) {
    fillSection(policies, copy.policies);
    fillLink(policies.querySelector('a'), copy.policies.link, copy.policies.linkHref, locale);
  }

  if (security) {
    fillSection(security, copy.security);
    fillCards(security.querySelector('.grid-cards'), copy.security.cards);
    setText(security.querySelector('.qualification'), copy.security.qualification);
    fillLink(security.querySelector('a'), copy.security.link, copy.security.linkHref, locale);
  }

  const cta = document.querySelector('.cta-band');
  setText(cta?.querySelector('h2'), copy.cta.heading);
  setText(cta?.querySelector('.lede'), copy.cta.lede);
  const ctaLinks = cta?.querySelectorAll('.btn');
  if (ctaLinks?.[0]) {
    setText(ctaLinks[0], copy.cta.primary);
    ctaLinks[0].href = langHref(copy.cta.primaryHref, locale);
  }
  if (ctaLinks?.[1]) {
    setText(ctaLinks[1], copy.cta.secondary);
    ctaLinks[1].href = langHref(copy.cta.secondaryHref, locale);
  }
}

function applyDeploymentModels(locale) {
  const copy = technicalPages.deploymentModels;
  setText(document.querySelector('.page-hero .qualification'), copy.heroQualification);

  const [modelsSection, comparisonSection, agreementSection] = contentSections();
  fillSection(modelsSection, copy.models);

  modelsSection?.querySelectorAll('.pcard').forEach((card, i) => {
    const data = copy.models.cards[i];
    if (!data) return;
    const statusEl = card.querySelector('.deploy-status');
    if (statusEl) {
      statusEl.textContent = deployStatusLabels[data.status];
    }
    setText(card.querySelector('h3'), data.title);
    const intro = card.querySelector('p:not(.qualification)');
    setText(intro, data.intro);
    fillList(card.querySelector('ul'), data.items);
    const qual = card.querySelector('.qualification');
    if (qual) {
      if (data.qualification) {
        qual.textContent = data.qualification;
        qual.hidden = false;
      } else {
        qual.hidden = true;
      }
    }
  });

  fillSection(comparisonSection, copy.comparison);
  const table = comparisonSection?.querySelector('.compare-table');
  if (table) {
    const headRow = table.querySelector('thead tr');
    if (headRow) {
      headRow.innerHTML = copy.comparison.headers
        .map((h, i) =>
          i === 0 ? `<th scope="col">${h}</th>` : `<th scope="col">${h}</th>`,
        )
        .join('');
    }
    const tbody = table.querySelector('tbody');
    if (tbody) {
      tbody.innerHTML = copy.comparison.rows
        .map(
          (row) =>
            `<tr>${row
              .map((cell, i) =>
                i === 0 ? `<th scope="row">${cell}</th>` : `<td>${cell}</td>`,
              )
              .join('')}</tr>`,
        )
        .join('');
    }
  }

  if (agreementSection) {
    fillSection(agreementSection, copy.agreement);
    fillList(agreementSection.querySelector('ul'), copy.agreement.items);
  }

  const cta = document.querySelector('.cta-band');
  setText(cta?.querySelector('h2'), copy.cta.heading);
  setText(cta?.querySelector('.lede'), copy.cta.lede);
  const ctaLinks = cta?.querySelectorAll('.btn');
  if (ctaLinks?.[0]) {
    setText(ctaLinks[0], copy.cta.primary);
    ctaLinks[0].href = langHref(copy.cta.primaryHref, locale);
  }
  if (ctaLinks?.[1]) {
    setText(ctaLinks[1], copy.cta.secondary);
    ctaLinks[1].href = langHref(copy.cta.secondaryHref, locale);
  }
}

function applyAiGovernance(locale) {
  const copy = technicalPages.aiGovernance;
  const [governance, lifecycle, draftFirst, review, limitations] = contentSections();

  fillSection(governance, copy.governance);
  fillCards(governance?.querySelector('.grid-cards'), copy.governance.cards);

  fillSection(lifecycle, copy.lifecycle);
  const flow = lifecycle?.querySelector('.lifecycle-flow');
  if (flow) {
    flow.innerHTML = copy.lifecycle.stages
      .flatMap((stage, i) => {
        const parts = [`<span>${stage}</span>`];
        if (i < copy.lifecycle.stages.length - 1) {
          parts.push('<span class="lifecycle-arrow" aria-hidden="true">→</span>');
        }
        return parts;
      })
      .join('');
    flow.setAttribute(
      'aria-label',
      locale === 'it'
        ? 'Fasi del ciclo di vita SkillOS'
        : locale === 'fr'
          ? 'Phases du cycle de vie SkillOS'
          : 'Skill-Lifecycle-Phasen',
    );
  }
  fillList(lifecycle?.querySelector('ul'), copy.lifecycle.items);

  fillSection(draftFirst, copy.draftFirst);
  setText(draftFirst?.querySelector('.qualification'), copy.draftFirst.qualification);

  fillSection(review, copy.review);
  fillCards(review?.querySelector('.grid-cards'), copy.review.cards);
  setText(review?.querySelector('.qualification'), copy.review.qualification);
  fillLink(review?.querySelector('a'), copy.review.link, copy.review.linkHref, locale);

  fillSection(limitations, copy.limitations);
  const paras = limitations?.querySelectorAll('.pcard p');
  copy.limitations.paragraphs.forEach((text, i) => setText(paras?.[i], text));

  const cta = document.querySelector('.cta-band');
  setText(cta?.querySelector('h2'), copy.cta.heading);
  setText(cta?.querySelector('.lede'), copy.cta.lede);
  const btn = cta?.querySelector('.btn');
  setText(btn, copy.cta.button);
  if (btn) btn.href = langHref('contact.html', locale);
}

function applyIntegrations(locale) {
  const copy = technicalPages.integrations;
  const [methods, categories, components] = contentSections();

  fillSection(methods, copy.methods);
  fillCards(methods?.querySelector('.grid-cards'), copy.methods.cards);

  fillSection(categories, copy.categories);
  const categoriesLede = categories?.querySelector('.lede');
  if (categoriesLede) {
    if (copy.categories.lede) {
      categoriesLede.hidden = false;
      setText(categoriesLede, copy.categories.lede);
    } else {
      categoriesLede.hidden = true;
    }
  }
  fillCards(categories?.querySelector('.grid-cards'), copy.categories.cards);
  setText(categories?.querySelector('.qualification'), copy.categories.qualification);

  fillSection(components, copy.components);
  components?.querySelectorAll('.maturity-panel').forEach((panel, i) => {
    const data = copy.components.panels[i];
    if (!data) return;
    const label = panel.querySelector('.maturity-label');
    if (label && data.status) {
      label.textContent = statusLabels[data.status];
      label.className = `maturity-label ${maturityClass(data.status)}`;
      label.hidden = false;
    } else if (label) {
      label.hidden = true;
    }
    setText(panel.querySelector('h3'), data.title);
    const body = panel.querySelector('p');
    setText(body, data.body);
  });

  const cta = document.querySelector('.cta-band');
  setText(cta?.querySelector('h2'), copy.cta.heading);
  setText(cta?.querySelector('.lede'), copy.cta.lede);
  const ctaLinks = cta?.querySelectorAll('.btn');
  if (ctaLinks?.[0]) {
    setText(ctaLinks[0], copy.cta.primary);
    ctaLinks[0].href = langHref(copy.cta.primaryHref, locale);
  }
  if (ctaLinks?.[1]) {
    setText(ctaLinks[1], copy.cta.secondary);
    ctaLinks[1].href = langHref(copy.cta.secondaryHref, locale);
  }
}

function renderFaqItem(item, index) {
  const delay = index ? ` d${Math.min(index, 5)}` : '';
  const answer = item.answer;
  return `
    <div class="faq-item reveal${delay}">
      <button class="faq-q" type="button" aria-expanded="false">${item.question}</button>
      <div class="faq-a" hidden>
        <p>${answer}</p>
      </div>
    </div>`;
}

function applyFaq(locale) {
  const list = document.querySelector('.faq-list');
  if (list && faqItems) {
    list.innerHTML = faqItems.map((item, i) => renderFaqItem(item, i)).join('');
  }

  const itSection = document.querySelector('#it-questions');
  if (itSection && faqItItems) {
    const heading = itSection.querySelector('[data-faq-it-heading]');
    if (heading && faqItHeading) heading.textContent = faqItHeading;
    const itList = itSection.querySelector('.faq-list');
    if (itList) {
      itList.innerHTML = faqItItems
        .map((item, i) => renderFaqItem(item, i))
        .join('');
    }
  }

  const cta = document.querySelector('.cta-band');
  setText(cta?.querySelector('h2'), faqCta.heading);
  setText(cta?.querySelector('.lede'), faqCta.lede);
  const btn = cta?.querySelector('.btn');
  setText(btn, faqCta.button);
  if (btn) btn.href = langHref('contact.html', locale);
}

const pageHandlers = {
  technicalArchitecture: applyTechnicalArchitecture,
  knowledge: applyKnowledge,
  dataControl: applyDataControl,
  deploymentModels: applyDeploymentModels,
  aiGovernance: applyAiGovernance,
  integrations: applyIntegrations,
  faq: applyFaq,
};

export function applyTechnicalTranslations(locale) {
  if (!setActiveBundle(locale)) return false;

  document.querySelectorAll('[data-i18n-en-only]').forEach((el) => {
    el.hidden = locale !== 'en';
  });

  const pageId = document.body.dataset.page;
  const handler = pageHandlers[pageId];
  if (!handler) return false;
  if (locale === 'en' && pageId !== 'faq') return false;

  handler(locale);
  return true;
}

export function needsFaqReinit(locale, pageId) {
  return (locale === 'de' || locale === 'fr' || locale === 'it') && pageId === 'faq';
}
