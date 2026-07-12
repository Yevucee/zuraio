const WITH_DURATION_MS = 1800;
const WITHOUT_DURATION_MS = 9000;

function setPanelComplete(panelKey) {
  const progress = document.querySelector(`[data-compare-progress="${panelKey}"]`);
  const status = document.querySelector(`[data-compare-status="${panelKey}"]`);
  if (!progress) return;

  progress.classList.remove('is-running');
  progress.classList.add('is-complete');

  const fill = progress.querySelector('.compare-progress__fill');
  if (fill) fill.style.width = '100%';

  const tick = progress.querySelector('.compare-progress__tick');
  if (tick && panelKey === 'with') tick.hidden = false;

  if (status) {
    const completed = status.dataset.completedLabel || 'Completed';
    status.textContent = completed;
    status.classList.add('is-complete');
  }
}

function startPanelAnimation(panelKey, durationMs) {
  const progress = document.querySelector(`[data-compare-progress="${panelKey}"]`);
  if (!progress || progress.dataset.started === 'true') return;

  progress.dataset.started = 'true';
  const fill = progress.querySelector('.compare-progress__fill');
  if (!fill) return;

  fill.style.width = '0%';
  progress.classList.add('is-running');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.transition = `width ${durationMs}ms linear`;
      fill.style.width = '100%';
    });
  });

  window.setTimeout(() => setPanelComplete(panelKey), durationMs + 40);
}

function setImmediateComplete() {
  ['with', 'without'].forEach((key) => {
    const progress = document.querySelector(`[data-compare-progress="${key}"]`);
    if (progress) {
      progress.dataset.started = 'true';
      progress.classList.add('is-complete');
      const fill = progress.querySelector('.compare-progress__fill');
      if (fill) {
        fill.style.transition = 'none';
        fill.style.width = '100%';
      }
      const tick = progress.querySelector('.compare-progress__tick');
      if (tick) tick.hidden = key !== 'with';
    }
    setPanelComplete(key);
  });
}

export function initWorkflowComparison() {
  const root = document.querySelector('[data-workflow-compare]');
  if (!root || root.dataset.progressReady === 'true') return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    root.dataset.progressReady = 'true';
    setImmediateComplete();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        root.dataset.progressReady = 'true';
        startPanelAnimation('with', WITH_DURATION_MS);
        startPanelAnimation('without', WITHOUT_DURATION_MS);
        io.disconnect();
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -5% 0px' },
  );

  io.observe(root);
}

export function resetWorkflowComparison() {
  document.querySelectorAll('[data-compare-progress]').forEach((progress) => {
    progress.dataset.started = 'false';
    progress.classList.remove('is-running', 'is-complete');
    const fill = progress.querySelector('.compare-progress__fill');
    if (fill) {
      fill.style.transition = 'none';
      fill.style.width = '0%';
    }
    const tick = progress.querySelector('.compare-progress__tick');
    if (tick) tick.hidden = true;
  });

  document.querySelectorAll('[data-compare-status]').forEach((status) => {
    status.classList.remove('is-complete');
    if (status.dataset.completingLabel) {
      status.textContent = status.dataset.completingLabel;
    }
  });

  const root = document.querySelector('[data-workflow-compare]');
  if (root) root.dataset.progressReady = 'false';

  initWorkflowComparison();
}
