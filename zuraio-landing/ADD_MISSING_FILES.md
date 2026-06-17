# Add the missing landing page files

This folder is ready in the repo, but two items still need to be added from your Mac:

| File | Required |
|---|---|
| `index.html` | Yes — the full self-contained page |
| `assets/zuraio-hero.jpg` | Yes |
| `assets/zuraio-team.jpg` | Yes |

Cursor chat cannot upload folders or large HTML files reliably. Use one of these methods instead.

## Option 1 — Git on your Mac (recommended)

If you have the original `zuraio-landing/` folder locally:

```bash
cd /path/to/your/local/zuraio-landing

# Copy into your cloned zuraio repo
cp index.html /path/to/zuraio/zuraio-landing/
cp assets/zuraio-hero.jpg assets/zuraio-team.jpg /path/to/zuraio/zuraio-landing/assets/

cd /path/to/zuraio
git add zuraio-landing/
git commit -m "Add Zuraio landing page HTML and assets"
git push origin main
```

Then start a new Cloud Agent — it will see all files.

## Option 2 — GitHub web upload

1. Open https://github.com/Yevucee/zuraio/tree/main/zuraio-landing
2. Click **Add file → Upload files**
3. Upload `index.html` and both JPGs into the correct paths
4. Commit directly to `main`

## Option 3 — Zip on Mac, unzip in cloud

1. Zip your local `zuraio-landing` folder (must include `index.html` and `assets/`)
2. Upload the zip in Cursor chat (single files often work when folders do not)
3. Ask the agent to unzip into `zuraio-landing/`

## After the files are in the repo

Ask Cursor to integrate the page. For this Vite site, the target URL will be:

- Dev: `http://localhost:5173/zuraio/index.html`
- GitHub Pages: `https://yevucee.github.io/zuraio/zuraio/index.html`

The page is served from `public/zuraio/` so it stays isolated from the React app and global CSS.
