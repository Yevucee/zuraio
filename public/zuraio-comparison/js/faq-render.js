/** Shared FAQ accordion markup for homepage preview and faq.html. */

export function renderFaqAccordionItem(item, index, { idPrefix = 'faq' } = {}) {
  const idAttr = item.id ? ` id="${item.id}"` : '';
  const btnId = `${idPrefix}-q-${index}`;
  const body = item.aHtml ?? item.a ?? '';
  return `
      <div class="faq-item"${idAttr}>
        <button class="faq-q" type="button" aria-expanded="false" id="${btnId}">${item.q}</button>
        <div class="faq-a" hidden role="region" aria-labelledby="${btnId}">
          <p>${body}</p>
        </div>
      </div>`;
}
