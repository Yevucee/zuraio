/** Shared helpers for alt homepage + pricing previews. */

export function isPreviewDevMode() {
  return (
    /localhost|127\.0\.0\.1/.test(location.hostname) ||
    location.search.includes('dev=1')
  );
}

export function stripPlaceholders(text, isDev, todos) {
  if (!text) return '';
  if (!text.includes('[')) return text;
  return text
    .split(/(\[[^\]]+\])/g)
    .map((part) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        todos?.push(part.slice(1, -1));
        if (isDev) return `<span class="alt-todo">${part}</span>`;
        return '';
      }
      return part;
    })
    .join('')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.,·])/g, '$1')
    .trim();
}

export function formatBoldMarkdown(text) {
  if (!text || !text.includes('**')) return text;
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/** Placeholders (hidden unless dev) + **bold** markdown. Returns safe HTML string. */
export function formatPreviewHtml(text, isDev, todos) {
  const stripped = stripPlaceholders(text, isDev, todos);
  return formatBoldMarkdown(stripped);
}
