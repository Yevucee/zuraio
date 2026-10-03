function openFaqItem(item) {
  const btn = item.querySelector('.faq-q');
  const panel = item.querySelector('.faq-a');
  if (!btn || !panel) return;

  const morePanel = item.closest('.alt-home-faq-more');
  if (morePanel?.hidden) {
    morePanel.hidden = false;
    const toggle = document.querySelector('[data-alt-faq-more]');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  btn.setAttribute('aria-expanded', 'true');
  panel.hidden = false;
}

/** Open FAQ item when URL hash matches item id (e.g. #chatgpt-copilot). */
export function initFaqFromHash() {
  const id = location.hash.replace(/^#/, '');
  if (!id) return;
  const item = document.getElementById(id);
  if (!item?.classList.contains('faq-item')) return;
  openFaqItem(item);
  requestAnimationFrame(() => {
    const header = document.querySelector('#site-header');
    const offset = (header?.getBoundingClientRect().height ?? 72) + 16;
    const top = item.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  });
}

export function initFaq() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    const panel = item.querySelector('.faq-a');
    if (!btn || !panel) return;

    if (btn.dataset.faqBound) return;
    btn.dataset.faqBound = '1';

    const toggle = () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel.hidden = open;
    };

    btn.addEventListener('click', toggle);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}
