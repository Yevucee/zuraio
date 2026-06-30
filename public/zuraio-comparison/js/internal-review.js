import { INTERNAL_REVIEW_MODE } from './config.js';
import {
  STATUS_LABELS,
  statusLegend,
  globalTodos,
  dataControlCardReview,
  footerReviewItems,
  languageReview,
  getPageReviewStatus,
} from './page-review-status.js';

export function isInternalReviewMode() {
  return INTERNAL_REVIEW_MODE;
}

function statusClass(status) {
  const map = {
    approved: 'status-approved',
    draft: 'status-draft',
    placeholder: 'status-placeholder',
    'needs-verification': 'status-needs-verification',
    'missing-asset': 'status-missing-asset',
    'legal-review': 'status-legal-review',
    'technical-verification': 'status-needs-verification',
    'commercial-verification': 'status-needs-verification',
    'under-review': 'status-draft',
    'technical-debt': 'status-needs-verification',
    'open-decision': 'status-draft',
    'product-vision': 'status-needs-verification',
    'currently-accepted': 'status-approved',
    'not-connected': 'status-placeholder',
    missing: 'status-missing-asset',
    'language-review': 'status-needs-verification',
    'not-active': 'status-draft',
  };
  return map[status] ?? 'status-draft';
}

function statusLabel(status) {
  return STATUS_LABELS[status] ?? status.replace(/-/g, ' ').toUpperCase();
}

export function renderStatusBadge(status, text) {
  const label = text ?? statusLabel(status);
  return `<span class="status-label ${statusClass(status)}">${label}</span>`;
}

function renderReviewNote({ status, owner, note, action }) {
  const parts = [];
  if (status) parts.push(renderStatusBadge(status));
  if (owner) parts.push(`<span class="review-owner">Owner: ${owner}</span>`);
  const detail = note || action;
  if (detail) parts.push(`<span class="review-detail">${detail}</span>`);
  return `<div class="review-note">${parts.join('')}</div>`;
}

function renderGlobalTodo(todo) {
  return `
    <div class="review-source-todo" data-internal-only>
      <p class="review-source-title">TODO — ${todo.title}</p>
      <p class="review-source-owner">Owner: ${todo.owner}</p>
      <p class="review-source-body">${todo.body}</p>
    </div>`;
}

function renderPageReviewPanel() {
  const mount = document.getElementById('internal-review-panel');
  if (!mount) return;

  const { page, items } = getPageReviewStatus();

  const legendHtml = statusLegend
    .map(
      (entry) =>
        `<li><span class="status-label ${statusClass(entry.status)}">${statusLabel(entry.status)}</span> ${entry.definition}</li>`,
    )
    .join('');

  const itemsHtml = items
    .map(
      (item) => `
      <tr>
        <td>${item.area}</td>
        <td>${renderStatusBadge(item.status)}</td>
        <td>${item.owner ?? '—'}</td>
        <td>${item.action ?? '—'}</td>
      </tr>`,
    )
    .join('');

  const langHtml = languageReview
    .map(
      (item) => `
      <li>
        <strong>${item.label}</strong>
        ${renderStatusBadge(item.status)}
        <span class="review-owner">Owner: ${item.owner}</span>
        <span class="review-detail">${item.action}</span>
      </li>`,
    )
    .join('');

  mount.innerHTML = `
    <aside class="page-review-panel" aria-label="Internal page review status">
      <div class="wrap">
        <p class="page-review-kicker">Internal review only</p>
        <h2 class="page-review-title">PAGE REVIEW STATUS</h2>
        <p class="page-review-page"><strong>Page:</strong> ${page}</p>

        <details class="review-legend" open>
          <summary>Status definitions</summary>
          <ul class="review-legend-list">${legendHtml}</ul>
        </details>

        <div class="review-table-wrap">
          <table class="review-table">
            <thead>
              <tr>
                <th>Area</th>
                <th>Status</th>
                <th>Owner</th>
                <th>Next action</th>
              </tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
          </table>
        </div>

        <details class="review-lang">
          <summary>Language review</summary>
          <ul class="review-lang-list">${langHtml}</ul>
        </details>
      </div>
    </aside>`;
}

function applyDataControlReviewNotes() {
  dataControlCardReview.forEach((item) => {
    const card = document.querySelector(`[data-review-key="${item.key}"]`);
    if (!card) return;

    let note = card.querySelector(':scope > .review-note');
    if (!note && card.classList.contains('review-note')) note = card;

    if (!note) {
      note = document.createElement('div');
      note.dataset.internalOnly = 'true';
      if (card.tagName === 'P') {
        card.insertAdjacentElement('afterend', note);
      } else {
        card.appendChild(note);
      }
    }

    note.className = 'review-note';
    note.replaceChildren(document.createRange().createContextualFragment(renderReviewNote(item)));

    const title = card.querySelector('h4');
    if (title && !title.querySelector('.review-card-kicker')) {
      const kicker = document.createElement('span');
      kicker.className = 'review-card-kicker';
      kicker.dataset.internalOnly = 'true';
      kicker.textContent = item.title;
      title.prepend(kicker);
    }
  });
}

function applyFooterReviewNotes() {
  const mount = document.getElementById('footer-review-notes');
  if (!mount) return;
  mount.innerHTML = footerReviewItems
    .map(
      (item) => `
      <div class="footer-review-item" data-internal-only>
        <p class="footer-review-label">${item.label}</p>
        ${renderReviewNote(item)}
      </div>`,
    )
    .join('');
}

function applyIntegrationReviewTodos() {
  const mount = document.getElementById('integration-review-todos');
  if (!mount) return;
  const todos = globalTodos.filter((t) => t.id.startsWith('integration'));
  mount.innerHTML = todos.map(renderGlobalTodo).join('');
}

function hidePublicInternalElements() {
  document.querySelectorAll('[data-internal-only]').forEach((el) => {
    el.hidden = true;
    el.setAttribute('aria-hidden', 'true');
  });
  document.querySelectorAll('.todo-block[data-internal-only]').forEach((el) => {
    el.hidden = true;
  });
  const panel = document.getElementById('internal-review-panel');
  if (panel) panel.hidden = true;
}

function showInternalElements() {
  document.querySelectorAll('[data-internal-only]').forEach((el) => {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
  });
  document.querySelectorAll('.todo-block[data-internal-only]').forEach((el) => {
    el.hidden = false;
  });
}

export function initInternalReview() {
  const panelMount = document.getElementById('internal-review-panel');
  if (!panelMount) {
    const el = document.createElement('div');
    el.id = 'internal-review-panel';
    document.body.appendChild(el);
  }

  if (!INTERNAL_REVIEW_MODE) {
    document.body.classList.add('public-mode');
    document.body.classList.remove('internal-review-mode');
    hidePublicInternalElements();
    return;
  }

  document.body.classList.add('internal-review-mode');
  document.body.classList.remove('public-mode');
  showInternalElements();
  applyDataControlReviewNotes();
  applyIntegrationReviewTodos();
  renderPageReviewPanel();
}

export function refreshInternalReview() {
  if (!INTERNAL_REVIEW_MODE) {
    hidePublicInternalElements();
    return;
  }
  applyDataControlReviewNotes();
  renderPageReviewPanel();
}

export function enhanceFooterWithReview() {
  applyFooterReviewNotes();
  if (!INTERNAL_REVIEW_MODE) {
    hidePublicInternalElements();
  }
}
