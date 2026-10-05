import { getSkillsTabsMeta, SKILLS_TAB_IDS } from './copy-alt-home-skills-tabs.js';

const PEOPLE_ICON = `<svg class="alt-skills-panel__workshop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;

function hl(text, n, label) {
  return `<span class="alt-skills-doc__hl" data-hl="${n}">
    <mark class="alt-skills-doc__mark">${text}</mark>
    <span class="visually-hidden">Highlight ${n}: ${label}</span>
    <span class="alt-skills-doc__hl-label" aria-hidden="true"><span class="alt-skills-doc__hl-dot">${n}</span>${label}</span>
  </span>`;
}

function hlBlock(innerHtml, n, label) {
  return `<span class="alt-skills-doc__hl alt-skills-doc__hl--block" data-hl="${n}">
    <mark class="alt-skills-doc__mark">${innerHtml}</mark>
    <span class="visually-hidden">Highlight ${n}: ${label}</span>
    <span class="alt-skills-doc__hl-label" aria-hidden="true"><span class="alt-skills-doc__hl-dot">${n}</span>${label}</span>
  </span>`;
}

function figuresRow(locale) {
  if (locale === 'de') {
    return `<span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Umsatz</span><span class="alt-skills-doc__fig-value">CHF 184'200</span><span class="alt-skills-doc__fig-note">+6 % gegenüber August</span></span><span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Offene Rechnungen</span><span class="alt-skills-doc__fig-value">CHF 42'750</span><span class="alt-skills-doc__fig-note">3 überfällig</span></span><span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Liquidität</span><span class="alt-skills-doc__fig-value">2,4 Monate</span><span class="alt-skills-doc__fig-note">der Fixkosten</span></span>`;
  }
  return `<span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Revenue</span><span class="alt-skills-doc__fig-value">CHF 184,200</span><span class="alt-skills-doc__fig-note">+6% vs August</span></span><span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Open invoices</span><span class="alt-skills-doc__fig-value">CHF 42,750</span><span class="alt-skills-doc__fig-note">3 overdue</span></span><span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Liquidity</span><span class="alt-skills-doc__fig-value">2.4 months</span><span class="alt-skills-doc__fig-note">of fixed costs</span></span>`;
}

function renderDocArchitecture(locale, meta) {
  const h = meta.panels.architecture.highlights;
  if (locale === 'de') {
    return `
      <div class="alt-skills-doc alt-skills-doc--quote">
        <span class="alt-skills-doc__badge">${meta.panels.architecture.badge}</span>
        <div class="alt-skills-doc__paper">
          <p class="alt-skills-doc__letterhead">${hl('Muster Architekten AG · Winterthur', 1, h[0].label)}</p>
          <h4 class="alt-skills-doc__title">Offerte 2026-041</h4>
          <p class="alt-skills-doc__subtitle">Umbau Einfamilienhaus, Winterthur</p>
          <p class="alt-skills-doc__meta">An: Familie Brunner</p>
          <table class="alt-skills-doc__table">
            <thead><tr><th>Phase (SIA 102)</th><th>Honorar</th></tr></thead>
            <tbody>
              <tr><td>31 Vorprojekt</td><td>CHF 8'400</td></tr>
              <tr><td>32 Bauprojekt</td><td>CHF 12'600</td></tr>
              <tr><td>33 Bewilligungsverfahren</td><td>CHF 4'200</td></tr>
              <tr><td>41 Ausschreibung</td><td>CHF 6'300</td></tr>
              <tr><td>Zwischentotal</td><td>CHF 31'500</td></tr>
              <tr><td>${hl('Rabatt für Stammkunden (5 %)', 2, h[1].label)}</td><td>CHF 1'575</td></tr>
              <tr class="alt-skills-doc__total"><td>Total exkl. MWST</td><td>CHF 29'925</td></tr>
            </tbody>
          </table>
          <p class="alt-skills-doc__terms">${hl('Zahlbar innert 30 Tagen. Es gelten unsere allgemeinen Bedingungen.', 3, h[2].label)}</p>
        </div>
      </div>`;
  }
  return `
    <div class="alt-skills-doc alt-skills-doc--quote">
      <span class="alt-skills-doc__badge">${meta.panels.architecture.badge}</span>
      <div class="alt-skills-doc__paper">
        <p class="alt-skills-doc__letterhead">${hl('Muster Architekten AG · Winterthur', 1, h[0].label)}</p>
        <h4 class="alt-skills-doc__title">Quote 2026-041</h4>
        <p class="alt-skills-doc__subtitle">Renovation of a detached house, Winterthur</p>
        <p class="alt-skills-doc__meta">To: Brunner family</p>
        <table class="alt-skills-doc__table">
          <thead><tr><th>Phase (SIA 102)</th><th>Fee</th></tr></thead>
          <tbody>
            <tr><td>31 Preliminary design</td><td>CHF 8,400</td></tr>
            <tr><td>32 Construction project</td><td>CHF 12,600</td></tr>
            <tr><td>33 Permit process</td><td>CHF 4,200</td></tr>
            <tr><td>41 Tender</td><td>CHF 6,300</td></tr>
            <tr><td>Subtotal</td><td>CHF 31,500</td></tr>
            <tr><td>${hl('Discount for repeat clients (5%)', 2, h[1].label)}</td><td>CHF 1,575</td></tr>
            <tr class="alt-skills-doc__total"><td>Total excl. VAT</td><td>CHF 29,925</td></tr>
          </tbody>
        </table>
        <p class="alt-skills-doc__terms">${hl('Payment within 30 days. Our standard terms apply.', 3, h[2].label)}</p>
      </div>
    </div>`;
}

function renderDocFiduciary(locale, meta) {
  const h = meta.panels.fiduciary.highlights;
  if (locale === 'de') {
    return `
      <div class="alt-skills-doc alt-skills-doc--report">
        <span class="alt-skills-doc__badge">${meta.panels.fiduciary.badge}</span>
        <div class="alt-skills-doc__paper">
          <h4 class="alt-skills-doc__title">Monatsreport September 2026</h4>
          <p class="alt-skills-doc__subtitle">Muster AG · für die VR-Sitzung vom 14. Oktober</p>
          <h5 class="alt-skills-doc__section">${hl('1. Auf einen Blick', 1, h[0].label)}</h5>
          <div class="alt-skills-doc__figures">${hlBlock(figuresRow('de'), 2, h[1].label)}</div>
          <h5 class="alt-skills-doc__section">2. Zu besprechen</h5>
          <ul class="alt-skills-doc__list">
            <li>${hl(`Die Beispiel GmbH ist 45 Tage im Verzug (CHF 18'300). Wir empfehlen diese Woche eine Mahnung.`, 3, h[2].label)}</li>
            <li>MWST-Abrechnung Q3 fällig am 30. November.</li>
            <li>Jahresabschluss: Unterlagen bis 31. Januar.</li>
          </ul>
        </div>
      </div>`;
  }
  return `
    <div class="alt-skills-doc alt-skills-doc--report">
      <span class="alt-skills-doc__badge">${meta.panels.fiduciary.badge}</span>
      <div class="alt-skills-doc__paper">
        <h4 class="alt-skills-doc__title">Monthly report September 2026</h4>
        <p class="alt-skills-doc__subtitle">Muster AG · for the board meeting on 14 October</p>
        <h5 class="alt-skills-doc__section">${hl('1. At a glance', 1, h[0].label)}</h5>
        <div class="alt-skills-doc__figures">${hlBlock(figuresRow('en'), 2, h[1].label)}</div>
        <h5 class="alt-skills-doc__section">2. Points to discuss</h5>
        <ul class="alt-skills-doc__list">
          <li>${hl('Beispiel GmbH is 45 days overdue (CHF 18,300). We suggest a reminder this week.', 3, h[2].label)}</li>
          <li>VAT return Q3 due on 30 November.</li>
          <li>Year-end close: documents by 31 January.</li>
        </ul>
      </div>
    </div>`;
}

function renderDocProperty(locale, meta) {
  const h = meta.panels.property.highlights;
  if (locale === 'de') {
    return `
      <div class="alt-skills-doc alt-skills-doc--email">
        <span class="alt-skills-doc__badge">${hl(meta.panels.property.badge, 3, h[2].label)}</span>
        <div class="alt-skills-doc__paper">
          <div class="alt-skills-doc__email-head">
            <p><span class="alt-skills-doc__email-k">An:</span> Frau Baumann</p>
            <p><span class="alt-skills-doc__email-k">Betreff:</span> AW: Waschmaschine in der Waschküche</p>
          </div>
          <div class="alt-skills-doc__email-body">
            <p>Guten Tag Frau Baumann</p>
            <p>${hl('Vielen Dank für Ihre Meldung. Unser Servicepartner prüft die Waschmaschine am Donnerstag, 8. Oktober, zwischen 8 und 10 Uhr. Bis dahin können Sie gerne die Maschine in Haus B benutzen.', 1, h[0].label)}</p>
            <p>${hl('Gemäss Hausordnung (Ziffer 5) bitten wir Sie, die Maschine bis zur Prüfung nicht zu benutzen.', 2, h[1].label)}</p>
            <p>Freundliche Grüsse<br>Muster Verwaltungen AG</p>
          </div>
        </div>
      </div>`;
  }
  return `
    <div class="alt-skills-doc alt-skills-doc--email">
      <span class="alt-skills-doc__badge">${hl(meta.panels.property.badge, 3, h[2].label)}</span>
      <div class="alt-skills-doc__paper">
        <div class="alt-skills-doc__email-head">
          <p><span class="alt-skills-doc__email-k">To:</span> Ms Baumann</p>
          <p><span class="alt-skills-doc__email-k">Subject:</span> Re: Washing machine in the laundry room</p>
        </div>
        <div class="alt-skills-doc__email-body">
          <p>Dear Ms Baumann,</p>
          <p>${hl('Thank you for letting us know. Our service partner will check the washing machine on Thursday, 8 October, between 8 and 10 am. Until then, you are welcome to use the machine in house B.', 1, h[0].label)}</p>
          <p>${hl('As set out in the house rules (section 5), please don\'t use the machine until it has been checked.', 2, h[1].label)}</p>
          <p>Kind regards,<br>Muster Verwaltungen AG</p>
        </div>
      </div>
    </div>`;
}

const DOC_RENDERERS = {
  architecture: renderDocArchitecture,
  fiduciary: renderDocFiduciary,
  property: renderDocProperty,
};

function renderUses(usesLabel, sources) {
  const chips = sources.map((s) => `<span class="alt-sq-source-chips__chip">${s}</span>`).join('');
  return `<div class="alt-skills-panel__uses">
    <span class="alt-skills-panel__uses-label">${usesLabel}</span>
    <div class="alt-skills-panel__uses-chips">${chips}</div>
  </div>`;
}

function renderPanelCopy(panel, meta, workshopLine) {
  return `
    <div class="alt-skills-panel__copy">
      <h3 class="alt-skills-panel__title">${panel.title}</h3>
      <p class="alt-skills-panel__body">${panel.body}</p>
      ${renderUses(panel.usesLabel, panel.sources)}
      <p class="alt-skills-panel__workshop">${PEOPLE_ICON}<span>${workshopLine}</span></p>
    </div>`;
}

function renderPanelDoc(tabId, locale, meta, caption) {
  const docHtml = DOC_RENDERERS[tabId](locale, meta);
  return `
    <div class="alt-skills-panel__doc">
      ${docHtml}
      <p class="alt-skills-doc__caption">${caption}</p>
    </div>`;
}

export function renderSkillsSectorTabs(copy, locale, routeHref) {
  const meta = getSkillsTabsMeta(locale === 'de' ? 'de' : 'en');
  const sk = copy.skills;
  const tabsHtml = meta.tabs
    .map((tab, i) => {
      const selected = i === 0;
      return `<button type="button" role="tab" id="skills-tab-${tab.id}" class="alt-skills-tabs__tab${selected ? ' is-active' : ''}" aria-selected="${selected}" aria-controls="skills-panel-${tab.id}" tabindex="${selected ? '0' : '-1'}" data-skills-tab="${tab.id}">${tab.label}</button>`;
    })
    .join('');

  const panelsHtml = SKILLS_TAB_IDS.map((tabId, i) => {
    const panel = meta.panels[tabId];
    const hidden = i !== 0;
    return `
      <div role="tabpanel" id="skills-panel-${tabId}" class="alt-skills-panel${hidden ? ' is-hidden' : ''}" aria-labelledby="skills-tab-${tabId}" data-skills-panel="${tabId}" aria-hidden="${hidden ? 'true' : 'false'}">
        <div class="alt-skills-panel__grid">
          ${renderPanelCopy(panel, meta, meta.workshopLine)}
          ${renderPanelDoc(tabId, locale === 'de' ? 'de' : 'en', meta, meta.docCaption)}
        </div>
      </div>`;
  }).join('');

  return `
    <div class="alt-skills-sector" data-alt-skills-sector>
      <div role="tablist" aria-label="${meta.tablistLabel}" class="alt-skills-tabs">${tabsHtml}</div>
      <div class="alt-skills-panels" data-skills-panels>${panelsHtml}</div>
      <p class="alt-skills-sector__foot">
        <span class="alt-skills-sector__foot-line">${sk.footer ?? ''}</span>
        <a class="alt-home-link-secondary alt-skills-sector__link" data-route="skills" href="${routeHref('skills')}">${sk.link}</a>
      </p>
    </div>`;
}

function tabIdFromHash(hash) {
  const id = (hash || '').replace(/^#/, '');
  if (id === 'skills-architecture') return 'architecture';
  if (id === 'skills-fiduciary') return 'fiduciary';
  if (id === 'skills-property') return 'property';
  return null;
}

function selectTab(root, tabId, { focusTab = false } = {}) {
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const panels = [...root.querySelectorAll('[role="tabpanel"]')];
  tabs.forEach((tab) => {
    const active = tab.dataset.skillsTab === tabId;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
    tab.tabIndex = active ? 0 : -1;
    if (active && focusTab) tab.focus();
  });
  panels.forEach((panel) => {
    const active = panel.dataset.skillsPanel === tabId;
    panel.classList.toggle('is-hidden', !active);
    panel.setAttribute('aria-hidden', active ? 'false' : 'true');
  });
  syncPanelMinHeight(root);
}

function syncPanelMinHeight(root) {
  const stack = root.querySelector('[data-skills-panels]');
  if (!stack) return;
  const panels = [...root.querySelectorAll('[role="tabpanel"]')];
  let max = 0;
  panels.forEach((panel) => {
    panel.classList.add('is-measuring');
    max = Math.max(max, panel.offsetHeight);
    panel.classList.remove('is-measuring');
  });
  stack.style.minHeight = `${max}px`;
}

function bindTabsKeyboard(root) {
  const tablist = root.querySelector('[role="tablist"]');
  if (!tablist) return;
  tablist.addEventListener('keydown', (e) => {
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const idx = tabs.findIndex((t) => t === document.activeElement);
    if (idx === -1) return;
    let next = idx;
    if (e.key === 'ArrowRight') next = (idx + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;
    e.preventDefault();
    const tab = tabs[next];
    selectTab(root, tab.dataset.skillsTab, { focusTab: true });
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });
}

export function initSkillsSectorTabs() {
  const root = document.querySelector('[data-alt-skills-sector]');
  if (!root) return;

  root.querySelectorAll('[role="tab"]').forEach((tab) => {
    tab.addEventListener('click', () => selectTab(root, tab.dataset.skillsTab, { focusTab: true }));
  });

  bindTabsKeyboard(root);

  const fromHash = tabIdFromHash(window.location.hash);
  if (fromHash) selectTab(root, fromHash);

  syncPanelMinHeight(root);
  window.addEventListener('resize', () => syncPanelMinHeight(root), { passive: true });

  window.addEventListener('hashchange', () => {
    const id = tabIdFromHash(window.location.hash);
    if (id) selectTab(root, id);
  });
}
