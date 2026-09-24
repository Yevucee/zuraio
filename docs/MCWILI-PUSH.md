# Push production site to Mcwili/zuraio

The cloud agent cannot push to `Mcwili/zuraio` (403). Use **either** the GitHub Action (easiest) **or** local git.

## Option A — GitHub Action (recommended)

1. Create a **classic PAT** at [New personal access token (classic)](https://github.com/settings/tokens/new): note e.g. `MCWILI_PUSH_TOKEN`, set expiration, enable **`repo`** and **`workflow`** (Mcwili `main` includes `.github/workflows/`; GitHub rejects pushes that add or update workflow files without `workflow` scope). Fine-grained tokens only work when you can select the owner of `Mcwili/zuraio`; as a **collaborator** (not owner), use classic scopes instead.
2. **Yevucee/zuraio → Settings → Secrets and variables → Actions → New secret:** `MCWILI_PUSH_TOKEN` = the PAT.
3. **Actions → Sync to Mcwili production → Run workflow** (leave “backup legacy” on `true` the first time). Checkout uses `persist-credentials: false` so the PAT in the remote URL is used (not `github-actions[bot]`).
4. On **Mcwili/zuraio**: **Settings → Pages → Source: GitHub Actions**, then run **Deploy to GitHub Pages** on `main`.

### Sync troubleshooting

| Symptom | Fix |
|--------|-----|
| `Permission denied to github-actions[bot]` on push | Merge workflow fix: checkout `persist-credentials: false` (PR #82). |
| `refusing to allow a Personal Access Token to create or update workflow` | Regenerate or edit the classic PAT to include **`workflow`** scope; update the secret if the token value changed. |
| Fine-grained PAT cannot select Mcwili repo | Use classic **`repo`** (+ **`workflow`**) instead. |

## Option B — Local git

Run these on your machine (logged in as a **collaborator** on `Mcwili/zuraio`).

## 1. Backup old site (once)

```bash
git clone https://github.com/Mcwili/zuraio.git mcwili-backup
cd mcwili-backup
git checkout -b legacy/mcwili-old-site
git push origin legacy/mcwili-old-site
```

Or from this repo after fetching Mcwili:

```bash
git fetch https://github.com/Mcwili/zuraio.git main:mcwili-main
git push https://github.com/Mcwili/zuraio.git mcwili-main:legacy/mcwili-old-site
```

## 2. Push new codebase to Mcwili main

From **Yevucee/zuraio** `main` (includes empty `SITE_BASE_PATH` deploy):

```bash
git remote add mcwili https://github.com/Mcwili/zuraio.git   # if missing
git fetch mcwili
git push mcwili main:main --force-with-lease
```

## 3. GitHub settings (Mcwili repo)

1. **Settings → Pages → Build and deployment → GitHub Actions**
2. **Settings → Actions → General → Workflow permissions → Read and write**
3. **Actions → Deploy to GitHub Pages** — run workflow on `main`
4. **Settings → Variables → `CONTACT_API_URL`** when Worker is deployed
5. **Pages → Enforce HTTPS** (recommended)

## 4. Verify

- https://zuraio.ch/
- https://zuraio.ch/contact.html
- Old site: branch `legacy/mcwili-old-site` on GitHub only
