import { getSkillsTabsMeta, SKILLS_TAB_IDS } from './copy-alt-home-skills-tabs.js';

const PEOPLE_ICON = `<svg class="alt-skills-panel__workshop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;

function legendRowId(tabId, n) {
  return `skills-legend-${tabId}-${n}`;
}

function marker(n) {
  return `<span class="alt-skills-doc__marker" aria-hidden="true">${n}</span>`;
}

/** One continuous highlight: marker + first word nowrap inside a single <mark>. */
function hlAll(text, n, tabId) {
  const id = legendRowId(tabId, n);
  const space = text.indexOf(' ');
  const first = space === -1 ? text : text.slice(0, space);
  const rest = space === -1 ? '' : text.slice(space + 1);
  const nowrapLead = rest ? `${marker(n)}${first} ` : `${marker(n)}${first}`;
  const tail = rest ? rest : '';
  return `<span class="alt-skills-doc__hl" data-hl="${n}" aria-describedby="${id}"><mark class="alt-skills-doc__mark"><span class="alt-skills-doc__hl-nowrap">${nowrapLead}</span>${tail}</mark></span>`;
}

function hlBlock(innerHtml, n, tabId) {
  const id = legendRowId(tabId, n);
  return `<span class="alt-skills-doc__hl alt-skills-doc__hl--block" data-hl="${n}" aria-describedby="${id}"><mark class="alt-skills-doc__mark"><span class="alt-skills-doc__hl-nowrap">${marker(n)}</span>${innerHtml}</mark></span>`;
}

function figuresRow(locale) {
  if (locale === 'de') {
    return `<span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Umsatz</span><span class="alt-skills-doc__fig-value">CHF 184'200</span><span class="alt-skills-doc__fig-note">+6 % gegenüber August</span></span><span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Offene Rechnungen</span><span class="alt-skills-doc__fig-value">CHF 42'750</span><span class="alt-skills-doc__fig-note">3 überfällig</span></span><span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Liquidität</span><span class="alt-skills-doc__fig-value">2,4 Monate</span><span class="alt-skills-doc__fig-note">der Fixkosten</span></span>`;
  }
  return `<span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Revenue</span><span class="alt-skills-doc__fig-value">CHF 184,200</span><span class="alt-skills-doc__fig-note">+6% vs August</span></span><span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Open invoices</span><span class="alt-skills-doc__fig-value">CHF 42,750</span><span class="alt-skills-doc__fig-note">3 overdue</span></span><span class="alt-skills-doc__fig"><span class="alt-skills-doc__fig-label">Liquidity</span><span class="alt-skills-doc__fig-value">2.4 months</span><span class="alt-skills-doc__fig-note">of fixed costs</span></span>`;
}

function renderDocArchitecture(locale, meta, tabId) {
  if (locale === 'de') {
    return `
      <div class="alt-skills-doc alt-skills-doc--quote">
        <span class="alt-skills-doc__badge">${meta.panels.architecture.badge}</span>
        <div class="alt-skills-doc__paper">
          <p class="alt-skills-doc__letterhead">${hlAll('Muster Architekten AG · Winterthur', 1, tabId)}</p>
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
              <tr><td>${hlAll('Rabatt für Stammkunden (5 %)', 2, tabId)}</td><td>CHF 1'575</td></tr>
              <tr class="alt-skills-doc__total"><td>Total exkl. MWST</td><td>CHF 29'925</td></tr>
            </tbody>
          </table>
          <p class="alt-skills-doc__terms">${hlAll('Zahlbar innert 30 Tagen. Es gelten unsere allgemeinen Bedingungen.', 3, tabId)}</p>
        </div>
      </div>`;
  }
  return `
    <div class="alt-skills-doc alt-skills-doc--quote">
      <span class="alt-skills-doc__badge">${meta.panels.architecture.badge}</span>
      <div class="alt-skills-doc__paper">
        <p class="alt-skills-doc__letterhead">${hlAll('Muster Architekten AG · Winterthur', 1, tabId)}</p>
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
            <tr><td>${hlAll('Discount for repeat clients (5%)', 2, tabId)}</td><td>CHF 1,575</td></tr>
            <tr class="alt-skills-doc__total"><td>Total excl. VAT</td><td>CHF 29,925</td></tr>
          </tbody>
        </table>
        <p class="alt-skills-doc__terms">${hlAll('Payment within 30 days. Our standard terms apply.', 3, tabId)}</p>
      </div>
    </div>`;
}

function renderDocFiduciary(locale, meta, tabId) {
  if (locale === 'de') {
    return `
      <div class="alt-skills-doc alt-skills-doc--report">
        <span class="alt-skills-doc__badge">${meta.panels.fiduciary.badge}</span>
        <div class="alt-skills-doc__paper">
          <h4 class="alt-skills-doc__title">Monatsreport September 2026</h4>
          <p class="alt-skills-doc__subtitle">Muster AG · für die VR-Sitzung vom 14. Oktober</p>
          <h5 class="alt-skills-doc__section">${hlAll('1. Auf einen Blick', 1, tabId)}</h5>
          <div class="alt-skills-doc__figures">${hlBlock(figuresRow('de'), 2, tabId)}</div>
          <h5 class="alt-skills-doc__section">2. Zu besprechen</h5>
          <ul class="alt-skills-doc__list">
            <li>${hlAll(`Die Beispiel GmbH ist 45 Tage im Verzug (CHF 18'300). Wir empfehlen diese Woche eine Mahnung.`, 3, tabId)}</li>
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
        <h5 class="alt-skills-doc__section">${hlAll('1. At a glance', 1, tabId)}</h5>
        <div class="alt-skills-doc__figures">${hlBlock(figuresRow('en'), 2, tabId)}</div>
        <h5 class="alt-skills-doc__section">2. Points to discuss</h5>
        <ul class="alt-skills-doc__list">
          <li>${hlAll('Beispiel GmbH is 45 days overdue (CHF 18,300). We suggest a reminder this week.', 3, tabId)}</li>
          <li>VAT return Q3 due on 30 November.</li>
          <li>Year-end close: documents by 31 January.</li>
        </ul>
      </div>
    </div>`;
}

function renderDocProperty(locale, meta, tabId) {
  const badge = meta.panels.property.badge;
  if (locale === 'de') {
    return `
      <div class="alt-skills-doc alt-skills-doc--email">
        <span class="alt-skills-doc__badge">${hlAll(badge, 3, tabId)}</span>
        <div class="alt-skills-doc__paper">
          <div class="alt-skills-doc__email-head">
            <p><span class="alt-skills-doc__email-k">An:</span> Frau Baumann</p>
            <p><span class="alt-skills-doc__email-k">Betreff:</span> AW: Waschmaschine in der Waschküche</p>
          </div>
          <div class="alt-skills-doc__email-body">
            <p>Guten Tag Frau Baumann</p>
            <p>${hlAll('Vielen Dank für Ihre Meldung.', 1, tabId)} Unser Servicepartner prüft die Waschmaschine am Donnerstag, 8. Oktober, zwischen 8 und 10 Uhr. Bis dahin können Sie gerne die Maschine in Haus B benutzen.</p>
            <p>${hlAll('Gemäss Hausordnung (Ziffer 5) bitten wir Sie, die Maschine bis zur Prüfung nicht zu benutzen.', 2, tabId)}</p>
            <p>Freundliche Grüsse<br>Muster Verwaltungen AG</p>
          </div>
        </div>
      </div>`;
  }
  return `
    <div class="alt-skills-doc alt-skills-doc--email">
      <span class="alt-skills-doc__badge">${hlAll(badge, 3, tabId)}</span>
      <div class="alt-skills-doc__paper">
        <div class="alt-skills-doc__email-head">
          <p><span class="alt-skills-doc__email-k">To:</span> Ms Baumann</p>
          <p><span class="alt-skills-doc__email-k">Subject:</span> Re: Washing machine in the laundry room</p>
        </div>
        <div class="alt-skills-doc__email-body">
          <p>Dear Ms Baumann,</p>
          <p>${hlAll('Thank you for letting us know.', 1, tabId)} Our service partner will check the washing machine on Thursday, 8 October, between 8 and 10 am. Until then, you are welcome to use the machine in house B.</p>
          <p>${hlAll('As set out in the house rules (section 5), please don\'t use the machine until it has been checked.', 2, tabId)}</p>
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

function renderLegend(tabId, panel, legendHeading) {
  const rows = panel.highlights
    .map(
      (h) => `<li class="alt-skills-panel__legend-item">
      <button type="button" class="alt-skills-panel__legend-row" id="${legendRowId(tabId, h.n)}" data-hl-target="${h.n}">
        <span class="alt-skills-panel__legend-marker" aria-hidden="true">${h.n}</span>
        <span class="alt-skills-panel__legend-text">${h.label}</span>
      </button>
    </li>`,
    )
    .join('');
  return `<div class="alt-skills-panel__legend">
    <p class="alt-skills-panel__legend-kicker">${legendHeading}</p>
    <ul class="alt-skills-panel__legend-list">${rows}</ul>
  </div>`;
}

function renderPanelCopy(tabId, panel, meta, workshopLine) {
  return `
    <div class="alt-skills-panel__copy">
      <h3 class="alt-skills-panel__title">${panel.title}</h3>
      <p class="alt-skills-panel__body">${panel.body}</p>
      ${renderUses(panel.usesLabel, panel.sources)}
      ${renderLegend(tabId, panel, meta.legendHeading)}
      <p class="alt-skills-panel__workshop">${PEOPLE_ICON}<span>${workshopLine}</span></p>
    </div>`;
}

function renderPanelDoc(tabId, locale, meta, caption) {
  const docHtml = DOC_RENDERERS[tabId](locale, meta, tabId);
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
          ${renderPanelCopy(tabId, panel, meta, meta.workshopLine)}
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

function setHighlightActive(panel, n, active) {
  if (!panel || n == null) return;
  panel.querySelectorAll(`[data-hl-target="${n}"]`).forEach((el) => {
    el.classList.toggle('is-hl-linked', active);
  });
  panel.querySelectorAll(`[data-hl="${n}"]`).forEach((el) => {
    el.classList.toggle('is-hl-linked', active);
  });
}

function bindHighlightLinking(root) {
  root.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
    const activate = (n) => setHighlightActive(panel, n, true);
    const deactivate = (n) => setHighlightActive(panel, n, false);

    panel.querySelectorAll('[data-hl-target]').forEach((btn) => {
      const n = btn.dataset.hlTarget;
      btn.addEventListener('mouseenter', () => activate(n));
      btn.addEventListener('mouseleave', () => deactivate(n));
      btn.addEventListener('focus', () => activate(n));
      btn.addEventListener('blur', () => deactivate(n));
    });

    panel.querySelectorAll('[data-hl]').forEach((hlEl) => {
      const n = hlEl.dataset.hl;
      hlEl.addEventListener('mouseenter', () => activate(n));
      hlEl.addEventListener('mouseleave', () => deactivate(n));
    });
  });
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
  bindHighlightLinking(root);

  const fromHash = tabIdFromHash(window.location.hash);
  if (fromHash) selectTab(root, fromHash);

  window.addEventListener('hashchange', () => {
    const id = tabIdFromHash(window.location.hash);
    if (id) selectTab(root, id);
  });
}
