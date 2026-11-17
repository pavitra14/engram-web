import { CONTACT_EMAIL, DESCRIPTION, NEW_ISSUE_URL, RELEASES_URL, REPO_URL, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// A plain-text summary for AI assistants and answer engines (llmstxt.org).
export function GET() {
  const body = `# Engram

> ${DESCRIPTION}

Engram is a local-first "second brain" app for Android (7.0+, 64-bit). It is free, has no ads, needs no account, and keeps notes on the phone. It is in public beta and installs from GitHub Releases, not the Play Store.

## What it does
- Capture in one step: share sheet from any app, voice notes transcribed on the phone, quick text, home-screen widgets, a Quick Settings tile, photos and document scans (text in pictures becomes searchable, English and Hindi).
- Organises itself: thoughts link to related thoughts and gather into named groups, including links by meaning using a small on-device model (50+ languages). A map view shows the groups.
- Brings things back: reminders from plain words ("call mum tomorrow 6pm"), to-dos, a daily question about an older thought, weekly review, monthly recap, "on this day".
- Turns ideas into next steps: gather a group into one note, or open Claude or ChatGPT with the group drafted as a request for a plan.
- Private: no tracking, notes never leave the phone, works offline, backups only when the user makes them. Optional anonymous daily usage counts, only if the user says yes.

## Links
- [Download the latest release](${RELEASES_URL})
- [Report a bug](${NEW_ISSUE_URL})
- [Source code (all rights reserved)](${REPO_URL})
- [Privacy Policy](${SITE_URL}/privacy)
- [Terms of Use](${SITE_URL}/terms)
- [Contact](${SITE_URL}/contact): ${CONTACT_EMAIL}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
