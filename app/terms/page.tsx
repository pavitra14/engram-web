import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, ISSUES_URL, LEGAL_EFFECTIVE, REPO_URL, RELEASES_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using Engram, the free, local-first second brain for Android, and the Engram website.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Use · Engram", url: "/terms" },
};

export default function Terms() {
  return (
    <article className="doc">
      <h1>Terms of Use</h1>
      <p className="updated">
        Effective {LEGAL_EFFECTIVE}. Applies to Engram for Android, version 0.7 and later, and to this website.
      </p>

      <div className="summary">
        <p>
          These terms are between you and the developer of Engram, pavitra14 on GitHub (&ldquo;we&rdquo;). By installing or
          using Engram you agree to them. If you don&apos;t agree, please don&apos;t use the app.
        </p>
      </div>

      <h2 id="what">1. What Engram is</h2>
      <p>
        Engram is a note-taking app that stores your notes on your phone. Engram Cloud is an optional account that syncs
        notes between your devices; it is currently switched off. How we handle information is described in the{" "}
        <Link href="/privacy">Privacy Policy</Link>, which is part of these terms.
      </p>

      <h2 id="beta">2. Beta software</h2>
      <p>Engram is in beta (version 0.x). It may have bugs, features may change or be removed, and it may lose data.</p>
      <ul>
        <li>
          <strong>Keep your own backups.</strong> Use Settings, Back up, and keep the file somewhere safe. We are not
          responsible for data you lose without one.
        </li>
        <li>
          Builds are distributed from the project&apos;s{" "}
          <a href={RELEASES_URL} rel="noopener">GitHub Releases page</a> and are signed with a development key. Install
          Engram only from there.
        </li>
        <li>Moving to a new build may sometimes need a backup, a reinstall and a restore. The release notes will say so.</li>
        <li>
          Please report problems as <a href={ISSUES_URL} rel="noopener">GitHub issues</a>. Reports help, but we
          can&apos;t promise to fix every one or to fix it by a particular date.
        </li>
      </ul>

      <h2 id="content">3. Your content</h2>
      <ul>
        <li><strong>What you put in Engram is yours.</strong> We claim no ownership of it.</li>
        <li>On your phone, we never see your content.</li>
        <li>
          If you use Engram Cloud, you allow us to store and process your synced content only to provide the sync service
          to you. We do not use it for anything else, including advertising or training AI models.
        </li>
        <li>You are responsible for what you store, and for having the right to store it.</li>
      </ul>

      <h2 id="accounts">4. Engram Cloud accounts</h2>
      <p>If Engram Cloud is switched on and you create an account:</p>
      <ul>
        <li>give a working email address and keep your password to yourself;</li>
        <li>don&apos;t use the service to store unlawful content, to attack or overload the service, or to try to reach other people&apos;s data;</li>
        <li>you can delete your account at any time in Settings, which deletes its cloud data.</li>
      </ul>
      <p>
        We may suspend an account that breaks these terms or puts the service or other people at risk. Engram Cloud is
        free while in beta. We may change it, limit it or end it. If we plan to end it, we will try to give notice in the
        app or on the releases page so you can keep using your notes on the phone, which never depend on the cloud.
      </p>

      <h2 id="others">5. Features that rely on others</h2>
      <p>
        Some optional features use other services: language models downloaded from Hugging Face, translation packs from
        Google ML Kit, Android&apos;s speech recogniser, your calendar app, and the Claude and ChatGPT apps or websites.
        Those services have their own terms. We don&apos;t control them and aren&apos;t responsible for them.
      </p>
      <p>
        <strong>Machine-made output can be wrong.</strong> Automatic links and group names, translations, text read from
        pictures, plain-word dates and answers from &ldquo;Ask your notes&rdquo; are made by software and may be inaccurate.
        Check anything important.
      </p>
      <p>
        <strong>Reminders may not arrive.</strong> Android can delay or block notifications, for example in battery saver
        mode. Don&apos;t rely on Engram for anything where a missed reminder could cause harm, such as medical, legal or
        safety matters.
      </p>

      <h2 id="code">6. The app and its code</h2>
      <p>
        You may install Engram from the official GitHub Releases page and use it for your own personal purposes. The{" "}
        <a href={REPO_URL} rel="noopener">source code</a> is published so anyone can read how Engram works, but it is{" "}
        <strong>not open source</strong>: all rights are reserved, as set out in the LICENSE file in the repository.
        Without written permission you may not copy, modify, redistribute or reuse the code or the app, or use the name
        &ldquo;Engram&rdquo; or its logo.
      </p>

      <h2 id="website">7. This website</h2>
      <p>
        The text, design and images on this website belong to us. You may link to it and share it freely. The &ldquo;Try
        it&rdquo; demo is a simplified illustration; the app itself works differently and does more.
      </p>

      <h2 id="warranty">8. No warranty</h2>
      <p>
        Engram and this website are provided <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>, without
        warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, and
        uninterrupted or error-free operation, to the fullest extent the law allows.
      </p>

      <h2 id="liability">9. Limits on liability</h2>
      <p>
        To the fullest extent the law allows, we are not liable for any indirect, incidental or consequential loss, or for
        loss of data, profits or opportunity, arising from your use of Engram or Engram Cloud. Where liability cannot be
        excluded, it is limited to the amount you paid us for Engram, which is currently nothing. Nothing in these terms
        limits rights you have under consumer law that cannot be waived.
      </p>

      <h2 id="changes">10. Changes and ending</h2>
      <p>
        We may update these terms. The date at the top shows the latest version. If a change matters, we will mention it
        in the release notes. Continuing to use Engram after a change means you accept it.
      </p>
      <p>
        You can stop using Engram at any time by uninstalling it and, if you have one, deleting your Engram Cloud account.
        Sections 3, 8 and 9 continue to apply after that.
      </p>

      <h2 id="contact">11. Contact</h2>
      <p>
        Questions about these terms: email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or open an issue at{" "}
        <a href={ISSUES_URL} rel="noopener">github.com/pavitra14/engram/issues</a>.
      </p>
    </article>
  );
}
