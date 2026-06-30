import { INTERNAL_REVIEW_MODE } from './config.js';

export function isInternalReviewMode() {
  return INTERNAL_REVIEW_MODE;
}

/** Hides in-page internal markers. Ownership and status live in the team document, not on the site. */
export function initInternalReview() {
  document.body.classList.add('public-mode');
  document.querySelectorAll('[data-internal-only]').forEach((el) => {
    el.hidden = true;
    el.setAttribute('aria-hidden', 'true');
  });
}

export function refreshInternalReview() {}

export function enhanceFooterWithReview() {}
