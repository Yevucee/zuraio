/**
 * Wrap the messaging emphasis word in headings with .headline-em styling.
 */
export function formatHeadline(text, emphasis) {
  if (!text) return '';
  if (!emphasis) return text;

  const idx = text.indexOf(emphasis);
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const after = text.slice(idx + emphasis.length);
  return `${before}<span class="headline-em">${emphasis}</span>${after}`;
}

export function setHeadlineHtml(el, text, emphasis) {
  if (!el) return;
  el.innerHTML = formatHeadline(text, emphasis);
}
