# GitHub Pages recovery (404 on deploy)

## Symptom

Deploy workflow **build** succeeds, **deploy** fails with:

```text
Failed to create deployment (status: 404)
HttpError: Not Found … deploy-pages@v4
Creating Pages deployment failed
```

Site shows **404 — site not found** at  
`https://nfernie.github.io/Horizontaldata_review/`

## Cause

Toggling the repository **private → public** (or private at all) **disables or resets** GitHub Pages. The Actions workflow cannot create a deployment until Pages is turned on again in repository settings.

Check (repo admin):

```bash
gh api repos/NFernie/Horizontaldata_review --jq '{has_pages, visibility}'
# has_pages must be true
```

## Fix (one-time, in GitHub UI)

1. Open **https://github.com/NFernie/Horizontaldata_review/settings/pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Click **Save** if prompted.
4. Confirm **Environment** `github-pages` appears under Settings → Environments (created automatically when Pages uses Actions).

## Redeploy

1. **Actions** → **Deploy GitHub Pages** → **Run workflow** → branch `main` → Run.
2. Wait for **build** and **deploy** to complete (green).
3. Open **https://nfernie.github.io/Horizontaldata_review/** (allow 1–2 minutes for CDN).

## This repository’s setup

| Item | Value |
|------|--------|
| Workflow | `.github/workflows/deploy.yml` |
| Vite `base` | `/Horizontaldata_review/` (`site/vite.config.ts`) |
| Artifact | `site/dist` |
| Deploy action | `actions/deploy-pages@v4` |

No code change is required for recovery—only re-enabling Pages in settings.

## If deploy still fails

- **403 / environment**: Settings → Environments → `github-pages` → ensure deployment branches include `main` (or remove restrictive protection rules temporarily).
- **Build fails**: check Actions logs for `npm test` or Python pipeline errors.
- **Site loads but assets 404**: verify `base` in `site/vite.config.ts` matches the repo name (`Horizontaldata_review`).
