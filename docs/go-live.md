# Zuraio preview site go-live checklist

## Homepage head (link previews)

Before treating the new marketing homepages as live, confirm that **root `index.html`**, **`de/`**, **`fr/`**, and **`it/`** serve the **new** homepage `<head>` (title, meta description, Open Graph, Twitter). Crawlers and chat apps read static HTML, not runtime JS.

Today, **`/index.html`** (and locale roots that still redirect to it) remain the **legacy** site copy (e.g. “digital executive assistant”). The new homepages live at:

- `/en/homepage-preview.html`
- `/de/homepage-preview.html`
- `/fr/homepage-preview.html`
- `/it/homepage-preview.html`

Go-live means promoting those pages (or equivalent) to locale roots with correct SEO head baked into the HTML.

After promotion, confirm each locale OG JPG is reachable, then spot-check link previews:

- `https://zuraio.ch/assets/og/zuraio-og-en.jpg` (and `-de.jpg`, `-fr.jpg`, `-it.jpg`) return **200**
- Test a homepage URL in [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and paste the same URL in a WhatsApp chat to confirm the 1200×630 JPG preview

## Legal pages

Impressum and privacy must pass `scripts/check-legal-go-live.mjs` (no bracket placeholders) before production sync to Mcwili/zuraio.

## Contact form

See [CONTACT-FORM-GO-LIVE.md](./CONTACT-FORM-GO-LIVE.md).
