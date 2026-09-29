import { getAltPricingCopy } from './copy-alt-pricing.js';
import { getAltHomeCopy } from './copy-alt-home.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';
import { isPreviewDevMode, formatPreviewHtml } from './alt-preview-utils.js';

function companyTable(headers, rows) {
  const head = headers.map((h) => `<th scope="col">${h}</th>`).join('');
  const body = rows
    .map(
      (row) => `<tr>
        <td>${row[0]}</td>
        <td><strong>${row[1]}</strong></td>
        <td>${row[2]}</td>
        <td class="alt-pricing-secondary">${row[3]}</td>
      </tr>`,
    )
    .join('');
  return `<div class="table-wrap"><table class="compare-table alt-pricing-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function simpleTable(headers, rows) {
  const head = headers.map((h) => `<th scope="col">${h}</th>`).join('');
  const body = rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('');
  return `<div class="table-wrap"><table class="compare-table alt-pricing-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function planDescriptionsList(plans) {
  return `<ul class="alt-pricing-plan-desc">${plans
    .map((p) => `<li><strong>${p.name}</strong> — ${p.desc}</li>`)
    .join('')}</ul>`;
}

function boot() {
  const locale = document.documentElement.lang === 'en' ? 'en' : 'de';
  const copy = getAltPricingCopy(locale);
  const homeCopy = getAltHomeCopy(locale);
  const isDev = isPreviewDevMode();
  const todos = [];

  document.title = copy.title;
  renderAltHomeHeader(homeCopy, locale);

  const employeeTodoHtml = copy.employeeTodo
    ? `<p class="alt-todo alt-pricing-employee-todo">${formatPreviewHtml(copy.employeeTodo, isDev, todos)}</p>`
    : '';

  document.getElementById('alt-pricing-main').innerHTML = `
    <section class="alt-pricing-section alt-pricing-section--hero">
      <div class="wrap">
        <h1>${copy.heading}</h1>
        <p class="lede">${copy.intro}</p>
        <p class="section-link"><a href="${copy.backHref}">${copy.backLink}</a></p>
      </div>
    </section>
    <section class="alt-pricing-section">
      <div class="wrap">
        <h2>${copy.companyHeading}</h2>
        <p class="lede">${copy.companyIntro}</p>
        <p class="alt-pricing-routing-note">${copy.companyRoutingLine}</p>
        ${companyTable(copy.tableCompany, copy.companyRows)}
      </div>
    </section>
    <section class="alt-pricing-section alt-pricing-section--muted">
      <div class="wrap">
        <h2>${copy.individualsHeading}</h2>
        ${simpleTable(copy.tableIndividual, copy.individualRows)}
        ${planDescriptionsList(copy.planDescriptions)}
        <p class="alt-pricing-company-note">${copy.companyKnowledgeLine}</p>
      </div>
    </section>
    <section class="alt-pricing-section">
      <div class="wrap">
        <h2>${copy.setupHeading}</h2>
        ${simpleTable(copy.tableSetup, copy.setupRows)}
        <p class="alt-home-pricing-foot">${copy.footnote}</p>
        ${isDev ? employeeTodoHtml : ''}
      </div>
    </section>
    <section class="alt-pricing-section alt-pricing-section--cta">
      <div class="wrap alt-pricing-cta">
        <p class="alt-pricing-cta__text">${copy.ctaLead}</p>
        <a class="btn btn-primary btn-lg" href="../contact.html">${copy.ctaButton}</a>
      </div>
    </section>`;

  renderAltHomeFooter(homeCopy, locale);
}

boot();
