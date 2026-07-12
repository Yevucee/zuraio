const WITH_DURATION_MS = 2700;
const WITHOUT_DURATION_MS = 9000;
const HOLD_COMPLETE_MS = 5000;

let loopTimer = null;
let viewportObserver = null;
let stepTimers = [];

function clearStepTimers() {
  stepTimers.forEach((id) => window.clearTimeout(id));
  stepTimers = [];
}

function resetStepLights() {
  document.querySelectorAll('.compare-step').forEach((step) => {
    step.classList.remove('is-lit');
  });
}

function lightAllSteps() {
  document.querySelectorAll('.compare-step').forEach((step) => {
    step.classList.add('is-lit');
  });
}

function getStepActivationTimes(panelKey, durationMs) {
  const box = document.querySelector(`[data-compare-box="${panelKey}"]`);
  const track = box?.querySelector('.compare-progress__track');
  const steps = box?.querySelectorAll('.compare-step') ?? [];
  if (!steps.length) return [];

  const trackRect = track?.getBoundingClientRect();
  const usePosition =
    trackRect &&
    trackRect.width > 0 &&
    window.matchMedia('(min-width: 960px)').matches;

  if (usePosition) {
    return Array.from(steps).map((step) => {
      const icon = step.querySelector('.compare-step__icon');
      const iconRect = icon?.getBoundingClientRect();
      if (!iconRect) return 0;

      const centerX = iconRect.left + iconRect.width / 2;
      const ratio = Math.min(
        1,
        Math.max(0, (centerX - trackRect.left) / trackRect.width),
      );
      return ratio * durationMs;
    });
  }

  return Array.from(steps).map((_, index) => {
    const threshold = (index + 0.5) / steps.length;
    return threshold * durationMs;
  });
}

function scheduleStepLights(panelKey, durationMs) {
  const steps = document.querySelectorAll(
    `[data-compare-box="${panelKey}"] .compare-step`,
  );
  if (!steps.length) return;

  const activationTimes = getStepActivationTimes(panelKey, durationMs);

  steps.forEach((step, index) => {
    const timerId = window.setTimeout(() => {
      step.classList.add('is-lit');
    }, activationTimes[index] ?? 0);

    stepTimers.push(timerId);
  });
}

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

  document
    .querySelectorAll(`[data-compare-box="${panelKey}"] .compare-step`)
    .forEach((step) => step.classList.add('is-lit'));
}

function startPanelAnimation(panelKey, durationMs) {
  const progress = document.querySelector(`[data-compare-progress="${panelKey}"]`);
  const fill = progress?.querySelector('.compare-progress__fill');
  if (!progress || !fill) return;

  document
    .querySelectorAll(`[data-compare-box="${panelKey}"] .compare-step`)
    .forEach((step) => step.classList.remove('is-lit'));

  progress.classList.remove('is-complete');
  progress.classList.add('is-running');
  fill.style.transition = 'none';
  fill.style.width = '0%';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.transition = `width ${durationMs}ms linear`;
      fill.style.width = '100%';
      scheduleStepLights(panelKey, durationMs);
    });
  });
  window.setTimeout(() => setPanelComplete(panelKey), durationMs + 40);
}

function resetPanelsForRestart() {
  clearStepTimers();
  resetStepLights();

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
  clearStepTimers();
  ['with', 'without'].forEach((key) => {
    const progress = document.querySelector(`[data-compare-progress="${key}"]`);
    if (progress) progress.classList.add('is-complete');
    setPanelComplete(key);
  });
  lightAllSteps();
}

function stopAnimation(root) {
  root.dataset.progressActive = 'false';
  clearLoopTimer();
  clearStepTimers();
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
