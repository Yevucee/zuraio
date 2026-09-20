/** Static workflow comparison — no timing animation. */
export function initWorkflowComparison() {
  document.querySelectorAll('[data-workflow-compare] .compare-step').forEach((step) => {
    step.classList.add('is-lit');
  });
}

export function resetWorkflowComparison() {
  initWorkflowComparison();
}
