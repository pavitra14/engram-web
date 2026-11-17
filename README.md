# engram-web

**Live at [engrm.app](https://engrm.app)** · [Privacy](https://engrm.app/privacy) · [Terms](https://engrm.app/terms) · [Contact](https://engrm.app/contact)

The domain is `engrm.app`, spelled without the "a" on purpose because engram.app was taken. The product is still called **Engram** everywhere on the site. The old address, engram.pavitra.dev, redirects here permanently (see `next.config.ts`); keep it attached in Coolify so the redirect keeps working.

The landing website for [Engram](https://github.com/pavitra14/engram), the local-first second brain for Android.

Next.js (App Router). Every page is rendered on the server, so search engines and direct links (`/privacy`, `/terms`, `/contact`) get full HTML with no client-side routing needed. The home page re-renders on the server once an hour and reads the newest GitHub release, so the beta version shown on the site updates itself after each app release.

## Pages

| Path | What |
|---|---|
| `/` | Landing page: the attention problem, how it works, a try-it demo, features, habits, privacy, beta + bug reports, FAQ |
| `/privacy` | Privacy Policy (app + website) |
| `/terms` | Terms of Use |
| `/contact` | Contact: contact@engrm.app and GitHub issues |
| `/download` | Redirect to the latest GitHub release |
| `/bugs` | Redirect to a new GitHub issue |
| `/tnc`, `/privacy-policy`, `/terms-and-conditions` | Permanent redirects to the legal pages |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/manifest.webmanifest`, `/llms.txt`, `/indexnow.txt` | SEO, social cards, AI summaries, IndexNow key |
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
   - `SITE_URL` = your public URL, e.g. `https://engrm.app` (used for canonical links, sitemap and social cards). Mark it as a **build variable** too, since pages are pre-rendered at build time.
   - Search engine verification codes (optional): `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`, `YANDEX_VERIFICATION`, `NAVER_SITE_VERIFICATION`.
   - `GITHUB_TOKEN` (optional) = a read-only token, only if you hit GitHub's anonymous rate limit when reading the latest release.
5. Health check path: `/api/health`.
6. Add your domain and deploy.

## Search engines and indexing

Built in:

- `/sitemap.xml` (with screenshot images) and `/robots.txt`, which point crawlers at it. AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are allowed.
- A unique title, description, canonical link, Open Graph and Twitter card on every page; a 1200×630 social image; `noindex` on 404s.
- Structured data: Organization, WebSite, SoftwareApplication (free, Android) and FAQPage on the home page; breadcrumbs on the other pages.
- `/manifest.webmanifest`, and `/llms.txt`, a plain-text summary for AI assistants.
- **IndexNow:** each time the server starts (every deploy), it tells Bing, Yandex, Naver, Seznam and other IndexNow engines about all pages, about 30 s after boot. Look for `[indexnow] submitted` in the Coolify logs. The key is served at `/indexnow.txt`; override with `INDEXNOW_KEY`, or turn it off with `INDEXNOW=off`.

One-time steps only the site owner can do (each takes a few minutes):

1. **Google Search Console** (search.google.com/search-console): add the domain property `engrm.app`, verify with a DNS TXT record (or set `GOOGLE_SITE_VERIFICATION` to the meta-tag code and redeploy), then submit `https://engrm.app/sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters): "Import from Google Search Console" in one click, or verify with `BING_SITE_VERIFICATION`. Bing also powers DuckDuckGo, Yahoo, Ecosia and ChatGPT search.
3. Optional: **Yandex Webmaster** (`YANDEX_VERIFICATION`) and **Naver Search Advisor** (`NAVER_SITE_VERIFICATION`).

Lighthouse (mobile, home page): SEO 100, accessibility 100, best practices 100, performance 95.

## Design

Follows the app's design system (`docs/DESIGN.md` in the engram repo): Newsreader for headlines and the person's words, Inter for everything else, paper-and-ink light theme and a true-black dark theme picked from the visitor's system setting, pills and hairlines, no shadows, and one loud cobalt button per view. Screenshots in `public/screens/` come from `docs/screenshots/` in the app repo.

Fonts are self-hosted from `@fontsource`. The only third-party script is Google Tag Manager (`GTM_ID` in `lib/site.ts`, overridable with the `GTM_ID` environment variable), for website analytics; the privacy page describes it. The app itself has no analytics.

## Keeping the legal pages in step

`app/privacy/page.tsx` and `app/terms/page.tsx` are the published copies of `docs/PRIVACY.md` and `docs/TERMS.md` in the app repo, plus a section on this website. Change both together.

## License

All rights reserved, the same as the app.
