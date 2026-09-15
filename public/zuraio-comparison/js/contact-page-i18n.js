import { getCopy } from './i18n.js';
import { SITE } from './config.js';

function contactPageCopy() {
  return getCopy().pages?.contact ?? {};
}

export function applyContactPageTranslations() {
  if (document.body.dataset.page !== 'contact') return;

  const page = contactPageCopy();
  const ui = page.formUi;
  if (!ui) return;

  const setText = (sel, text) => {
    if (text == null) return;
    document.querySelectorAll(sel).forEach((el) => {
      el.textContent = text;
    });
  };

  setText('.contact-form-wrap > .marker', ui.sectionMarker);
  setText('.contact-form-wrap > h2', ui.sectionHeading);
  const setLabel = (forId, text, required = false) => {
    const el = document.querySelector(`label[for="${forId}"]`);
    if (!el || text == null) return;
    el.innerHTML = required
      ? `${text} <span aria-hidden="true">*</span>`
      : text;
  };
  setLabel('name', ui.labels?.name, true);
  setLabel('company', ui.labels?.company, true);
  setLabel('role', ui.labels?.role);
  setLabel('email', ui.labels?.email, true);
  setLabel('phone', ui.labels?.phone);
  setLabel('company-size', ui.labels?.companySize);
  setLabel('interest', ui.labels?.interest);
  setLabel('message', ui.labels?.message);

  const companySize = document.getElementById('company-size');
  if (companySize && ui.placeholders?.companySize) {
    companySize.placeholder = ui.placeholders.companySize;
  }

  const interest = document.getElementById('interest');
  if (interest && ui.interestOptions?.length) {
    interest.innerHTML = [
      `<option value="">${ui.interestEmpty ?? ''}</option>`,
      ...ui.interestOptions.map(
        (opt) => `<option value="${opt.value}">${opt.label}</option>`,
      ),
    ].join('');
  }

  setText('.contact-form .form-trust', ui.trust);
  const submit = document.querySelector('#contact-form button[type="submit"]');
  if (submit && ui.submit) submit.textContent = ui.submit;

  const noscript = document.querySelector('.contact-form-wrap noscript p');
  if (noscript && ui.noscript) {
    noscript.innerHTML = `${ui.noscript} <a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>.`;
  }

  if (ui.sidebar) {
    const aside = document.querySelector('.contact-paths');
    if (aside) {
      setText('.contact-paths > .marker', ui.sidebar.marker);
      setText('.contact-paths > h2', ui.sidebar.heading);
      const cards = aside.querySelectorAll('.pcard');
      const s = ui.sidebar;
      if (cards[0]) {
        cards[0].querySelector('h3').textContent = s.demoTitle;
        cards[0].querySelector('p').textContent = s.demoBody;
      }
      if (cards[1]) {
        cards[1].querySelector('h3').textContent = s.emailTitle;
        const mail = SITE.contactEmail;
        cards[1].querySelector('p').innerHTML = `${s.emailBody} <a href="mailto:${mail}">${mail}</a>.`;
      }
      if (cards[2]) {
        cards[2].querySelector('h3').textContent = s.partnerTitle;
        cards[2].querySelector('p').textContent = s.partnerBody;
      }
      setText('.contact-paths .location', s.location);
    }
  }

  if (ui.partnerships) {
    const section = document.getElementById('partnerships');
    if (section) {
      const p = ui.partnerships;
      setText('#partnerships > .wrap > .marker', p.marker);
      setText('#partnerships > .wrap > h2', p.heading);
      setText('#partnerships > .wrap > .lede', p.lede);
      const cards = section.querySelectorAll('.grid-cards .pcard');
      if (cards[0] && p.whoTitle) {
        cards[0].querySelector('h3').textContent = p.whoTitle;
        const ul = cards[0].querySelector('ul');
        if (ul && p.whoItems) {
          ul.innerHTML = p.whoItems.map((li) => `<li>${li}</li>`).join('');
        }
      }
      if (cards[1] && p.expectTitle) {
        cards[1].querySelector('h3').textContent = p.expectTitle;
        const ul = cards[1].querySelector('ul');
        if (ul && p.expectItems) {
          ul.innerHTML = p.expectItems.map((li) => `<li>${li}</li>`).join('');
        }
      }
      const cta = section.querySelector('.btn-primary');
      if (cta && p.cta) cta.textContent = p.cta;
    }
  }
}
