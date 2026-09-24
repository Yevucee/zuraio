# Local English homepage preview (not deployed)

## Where to open

From this worktree:

```bash
cd /workspace/.worktrees/homepage-preview-en
npm install   # if needed
npm run dev
```

**URL:** [http://localhost:5173/zuraio-comparison/en/homepage-preview.html](http://localhost:5173/zuraio-comparison/en/homepage-preview.html)

(`noindex` — not linked from production navigation.)

## Git isolation

| Item | Value |
|------|--------|
| Worktree path | `/workspace/.worktrees/homepage-preview-en` |
| Branch | `cursor/homepage-preview-local-en` (local only — **do not push** unless you decide to publish) |
| Upstream | Tracks `origin/main` at creation time; preview files are local additions |

Main repo `/workspace` and the live homepage (`public/zuraio-comparison/index.html`) are unchanged by this preview.

## Deploy path (for context)

1. **Development repo:** `Yevucee/zuraio` (`origin` in this clone)
2. **Production mirror:** `Mcwili/zuraio` via `.github/workflows/sync-to-mcwili.yml` (`MCWILI_PUSH_TOKEN`)
3. **Live site:** GitHub Pages → **https://zuraio.ch** (`.github/workflows/deploy.yml` on Mcwili)

This preview is **not** part of that pipeline until you merge and deploy deliberately.

## Files added for preview

- `public/zuraio-comparison/en/homepage-preview.html`
- `public/zuraio-comparison/css/homepage-preview.css`
- `public/zuraio-comparison/js/homepage-preview-page.js`

## Claims to verify with product / marketing

Aligned with existing English copy in `js/copy-en.js` where possible; still confirm:

1. **“Executive assistant”** — site copy often says “digital assistant”; positioning is intentional for this preview.
2. **Client meeting briefing flow** — illustrative; which sources (email, CRM, ERP, documents) apply depends on deployment and integrations (qualified on page).
3. **“Outputs can show sources”** — copy-en notes not every output is source-backed; varies by component.
4. **“Swiss hosting available”** — matches deployment-models / Infomaniak option; not every model or hybrid setup keeps all processing in Switzerland.
5. **Integrations** — no logo marquee on preview; integrations page lists categories; availability is scope-dependent.
6. **Links** — `knowledge.html`, `how-it-helps.html`, `data-control.html`, `integrations.html`, `contact.html` (English root pages in this site).

## Responsive QA checklist

Test widths: 320, 375, 390, 768, desktop — hero lede fully visible, no horizontal scroll, focus rings on links/buttons/summary.
