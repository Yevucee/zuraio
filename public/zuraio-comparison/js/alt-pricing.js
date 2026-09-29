import { getAltPricingCopy } from './copy-alt-pricing.js';
import { getAltHomeCopy } from './copy-alt-home.js';
import { renderAltHomeHeader, renderAltHomeFooter } from './alt-homepage-chrome.js';

function table(headers, rows, secondaryCol) {
  const head = headers.map((h) => `<th scope="col">${h}</th>`).join('');
  const body = rows
    .map((row) => {
      const cells = row
        .map((cell, i) => {
          if (secondaryCol === i) {
            return `<td><strong>${row[0]}</strong><br><span class="alt-pricing-secondary">${cell}</span></td>`;
          }
          if (i === 0 && secondaryCol != null) return '';
          return `<td>${cell}</td>`;
        })
        .filter(Boolean)
        .join('');
      if (secondaryCol != null) {
        return `<tr><td><strong>${row[0]}</strong></td><td>${row[1]}</td><td>${row[2]}</td><td class="alt-pricing-secondary">${row[3]}</td></tr>`;
      }
      return `<tr>${cells}</tr>`;
    })
    .join('');
  return `<div class="table-wrap"><table class="compare-table alt-pricing-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function boot() {
  const locale = document.documentElement.lang === 'en' ? 'en' : 'de';
  const copy = getAltPricingCopy(locale);
  const homeCopy = getAltHomeCopy(locale);

  document.title = copy.title;
  renderAltHomeHeader(homeCopy, locale);

  const companyTable = table(copy.tableCompany, copy.companyRows);
  const indTable = table(copy.tableIndividual, copy.individualRows);
  const setupTable = table(copy.tableSetup, copy.setupRows);

  document.getElementById('alt-pricing-main').innerHTML = `
    <section class="page-hero pad">
      <div class="wrap">
        <h1>${copy.heading}</h1>
        <p class="lede">${copy.intro}</p>
        <p class="section-link"><a href="${copy.backHref}">${copy.backLink}</a></p>
      </div>
    </section>
    <section class="pad alt-home-section">
      <div class="wrap">
        <h2>${copy.companyHeading}</h2>
        <p class="lede">${copy.companyIntro}</p>
        ${companyTable}
      </div>
    </section>
    <section class="pad alt-home-section alt-home-section--muted">
      <div class="wrap">
        <h2>${copy.individualsHeading}</h2>
        <p class="alt-todo">${copy.individualsNote}</p>
        ${indTable}
      </div>
    </section>
    <section class="pad alt-home-section">
      <div class="wrap">
        <h2>${copy.setupHeading}</h2>
        ${setupTable}
        <p class="alt-home-pricing-foot">${copy.footnote}</p>
        <p class="alt-todo">${copy.employeeTodo}</p>
      </div>
    </section>`;

  renderAltHomeFooter(homeCopy, locale);
}

boot();
