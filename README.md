# engram-web

The landing website for [Engram](https://github.com/pavitra14/engram), the local-first second brain for Android.

Next.js (App Router). Every page is rendered on the server, so search engines and direct links (`/privacy`, `/terms`, `/contact`) get full HTML with no client-side routing needed. The home page re-renders on the server once an hour and reads the newest GitHub release, so the beta version shown on the site updates itself after each app release.

## Pages

| Path | What |
|---|---|
| `/` | Landing page: the attention problem, how it works, a try-it demo, features, habits, privacy, beta + bug reports, FAQ |
| `/privacy` | Privacy Policy (app + website) |
| `/terms` | Terms of Use |
| `/contact` | Contact: engram@pavitra.dev and GitHub issues |
| `/download` | Redirect to the latest GitHub release |
| `/bugs` | Redirect to a new GitHub issue |
| `/tnc`, `/privacy-policy`, `/terms-and-conditions` | Permanent redirects to the legal pages |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | SEO and social cards |
| `/api/health` | Health check for Coolify |

## Develop

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Deploy on Coolify

1. New resource → Public/Private repository → `pavitra14/engram-web`, branch `main`.
2. Build pack: **Dockerfile** (the repo's `Dockerfile` is picked up automatically).
3. Port: **3000**.
4. Environment variables:
   - `SITE_URL` = your public URL, e.g. `https://engram.pavitra.dev` (used for canonical links, sitemap and social cards). Mark it as a **build variable** too, since pages are pre-rendered at build time.
   - `GITHUB_TOKEN` (optional) = a read-only token, only if you hit GitHub's anonymous rate limit when reading the latest release.
5. Health check path: `/api/health`.
6. Add your domain and deploy.

## Design

Follows the app's design system (`docs/DESIGN.md` in the engram repo): Newsreader for headlines and the person's words, Inter for everything else, paper-and-ink light theme and a true-black dark theme picked from the visitor's system setting, pills and hairlines, no shadows, and one loud cobalt button per view. Screenshots in `public/screens/` come from `docs/screenshots/` in the app repo.

No cookies, analytics or third-party requests: fonts are self-hosted from `@fontsource`.

## License

All rights reserved, the same as the app.
