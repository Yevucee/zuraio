const WITH_DURATION_MS = 1800;
const WITHOUT_DURATION_MS = 9000;
const HOLD_COMPLETE_MS = 5000;

let loopTimer = null;
let viewportObserver = null;

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
  const fill = progress?.querySelector('.compare-progress__fill');
  if (!progress || !fill) return;

  progress.classList.remove('is-complete');
  progress.classList.add('is-running');
  fill.style.transition = 'none';
  fill.style.width = '0%';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.transition = `width ${durationMs}ms linear`;
      fill.style.width = '100%';
    });
  });

  window.setTimeout(() => setPanelComplete(panelKey), durationMs + 40);
}

function resetPanelsForRestart() {
  document.querySelectorAll('[data-compare-progress]').forEach((progress) => {
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
}

function clearLoopTimer() {
  if (loopTimer) {
    window.clearTimeout(loopTimer);
    loopTimer = null;
  }
}

function runAnimationCycle(root) {
  if (root.dataset.progressActive !== 'true') return;

  clearLoopTimer();
  resetPanelsForRestart();
  startPanelAnimation('with', WITH_DURATION_MS);
  startPanelAnimation('without', WITHOUT_DURATION_MS);

  loopTimer = window.setTimeout(() => {
    runAnimationCycle(root);
  }, WITHOUT_DURATION_MS + HOLD_COMPLETE_MS);
}

function setImmediateComplete() {
  clearLoopTimer();
  ['with', 'without'].forEach((key) => {
    const progress = document.querySelector(`[data-compare-progress="${key}"]`);
    if (progress) progress.classList.add('is-complete');
    setPanelComplete(key);
  });
}

function stopAnimation(root) {
  root.dataset.progressActive = 'false';
  clearLoopTimer();
}

function startAnimation(root) {
  root.dataset.progressActive = 'true';
  runAnimationCycle(root);
}

export function initWorkflowComparison() {
  const root = document.querySelector('[data-workflow-compare]');
  if (!root) return;

  if (viewportObserver) {
    viewportObserver.disconnect();
    viewportObserver = null;
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    stopAnimation(root);
    setImmediateComplete();
    return;
  }

  viewportObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation(root);
        } else {
          stopAnimation(root);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -5% 0px' },
  );

  viewportObserver.observe(root);
}

export function resetWorkflowComparison() {
  const root = document.querySelector('[data-workflow-compare]');
  if (root) stopAnimation(root);
  resetPanelsForRestart();
  initWorkflowComparison();
}
