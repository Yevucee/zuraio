# Zuraio preview site go-live checklist

## Homepage head (link previews)

Before treating the new marketing homepages as live, confirm that **root `index.html`**, **`de/`**, **`fr/`**, and **`it/`** serve the **new** homepage `<head>` (title, meta description, Open Graph, Twitter). Crawlers and chat apps read static HTML, not runtime JS.

Today, **`/index.html`** (and locale roots that still redirect to it) remain the **legacy** site copy (e.g. “digital executive assistant”). The new homepages live at:

- `/en/homepage-preview.html`
- `/de/homepage-preview.html`
- `/fr/homepage-preview.html`
- `/it/homepage-preview.html`

Go-live means promoting those pages (or equivalent) to locale roots with correct SEO head baked into the HTML.

## Legal pages

Impressum and privacy must pass `scripts/check-legal-go-live.mjs` (no bracket placeholders) before production sync to Mcwili/zuraio.

## Contact form

See [CONTACT-FORM-GO-LIVE.md](./CONTACT-FORM-GO-LIVE.md).
