export const REPO_URL = "https://github.com/pavitra14/engram";
export const RELEASES_URL = `${REPO_URL}/releases/latest`;
export const ISSUES_URL = `${REPO_URL}/issues`;
export const NEW_ISSUE_URL = `${REPO_URL}/issues/new`;
export const CONTACT_EMAIL = "contact@engrm.app";

export const SITE_URL = (process.env.SITE_URL || "https://engrm.app").replace(/\/$/, "");

/** Google Tag Manager container for the website only. The app has no analytics. */
export const GTM_ID = process.env.GTM_ID || "GTM-TZQLPM9D";

export const SITE_NAME = "Engram";
export const TAGLINE = "Catch the thought before the next notification does.";
export const DESCRIPTION =
  "Engram is a free second brain for your Android phone. Save any idea in one step by voice, typing or sharing from any app, and it organises itself. No account, no ads, and your notes never leave your phone.";

export const LEGAL_EFFECTIVE = "17 November 2026";
export const LEGAL_EFFECTIVE_ISO = "2026-11-17";

/**
 * IndexNow key (Bing, Yandex, Naver, Seznam and others). It is public by
 * design: search engines fetch it from /indexnow.txt to confirm we own the site.
 */
export const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "b0f45ef57cc423f9023f2bf088cdfee1";

export type Release = {
  tag: string;
  /** Human version, e.g. "0.7.0 beta 2" */
  label: string;
  url: string;
  publishedAt?: string;
};

const FALLBACK: Release = {
  tag: "v0.7.0-beta.2",
  label: "0.7.0 beta 2",
  url: RELEASES_URL,
};

export function humanVersion(tag: string): string {
  return tag
    .replace(/^v/i, "")
    .replace(/-beta\.?(\d+)?/i, (_m, n) => (n ? ` beta ${n}` : " beta"))
    .replace(/-alpha\.?(\d+)?/i, (_m, n) => (n ? ` alpha ${n}` : " alpha"))
    .replace(/-rc\.?(\d+)?/i, (_m, n) => (n ? ` RC ${n}` : " RC"));
}

/**
 * The newest published release, read on the server and cached for an hour,
 * so the page always names the current beta without a redeploy.
 * Falls back to the last known release if GitHub can't be reached.
 */
export async function getLatestRelease(): Promise<Release> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "engram-web",
    };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch("https://api.github.com/repos/pavitra14/engram/releases/latest", {
      headers,
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as { tag_name?: string; html_url?: string; published_at?: string };
    if (!data.tag_name) return FALLBACK;
    return {
      tag: data.tag_name,
      label: humanVersion(data.tag_name),
      url: data.html_url || RELEASES_URL,
      publishedAt: data.published_at,
    };
  } catch {
    return FALLBACK;
  }
}
