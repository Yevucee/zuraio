export function initMarquee() {
  document.querySelectorAll('[data-marquee]').forEach((track) => {
    const inner = track.querySelector('.marquee-inner');
    if (!inner || inner.dataset.cloned) return;
    inner.dataset.cloned = 'true';
    inner.innerHTML += inner.innerHTML;
    track.addEventListener('mouseenter', () => track.classList.add('is-paused'));
    track.addEventListener('mouseleave', () => track.classList.remove('is-paused'));
    track.addEventListener('focusin', () => track.classList.add('is-paused'));
    track.addEventListener('focusout', () => track.classList.remove('is-paused'));
  });
}
