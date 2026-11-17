// Runs once when the production server starts (each Coolify deploy).
// Tells IndexNow search engines (Bing, Yandex, Naver, Seznam, Yep…) that the
// site's pages are new or changed, so they crawl them within minutes.
// Google doesn't use IndexNow: it finds the site through the sitemap and
// Search Console. Set INDEXNOW=off to disable.

export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.NODE_ENV !== "production" || process.env.INDEXNOW === "off") return;

  const { SITE_URL, INDEXNOW_KEY } = await import("./lib/site");
  const host = new URL(SITE_URL).hostname;
  if (host === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(host)) return;

  // Wait until the server (and the proxy in front of it) is answering.
  setTimeout(async () => {
    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          host,
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/indexnow.txt`,
          urlList: ["/", "/privacy", "/terms", "/contact"].map((p) => `${SITE_URL}${p}`),
        }),
        signal: AbortSignal.timeout(10000),
      });
      console.log(`[indexnow] submitted ${host}: HTTP ${res.status}`);
    } catch (e) {
      console.log(`[indexnow] skipped: ${(e as Error).message}`);
    }
  }, 30_000).unref?.();
}
