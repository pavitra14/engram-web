import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { CONTACT_EMAIL, ISSUES_URL, LEGAL_EFFECTIVE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "What Engram does with your information. Short version: what you write stays on your phone. No account, no ads, no analytics in the app.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <article className="doc">
      <JsonLd data={breadcrumbLd("Privacy Policy", "/privacy")} />
      <h1>Privacy Policy</h1>
      <p className="updated">
        Effective {LEGAL_EFFECTIVE}. Applies to Engram for Android, version 0.7 and later, and to this website.
      </p>

      <div className="summary">
        <p>
          Engram is a note-taking app made by its developer, pavitra14 on GitHub (&ldquo;we&rdquo;). This policy says what the
          app and this website do with your information. The short version:{" "}
          <strong>what you write stays on your phone unless you choose to sign in to Engram Cloud.</strong>
        </p>
      </div>

      <nav className="toc" aria-label="On this page">
        <a className="pill" href="#short">Short version</a>
        <a className="pill" href="#phone">On your phone</a>
        <a className="pill" href="#permissions">Permissions</a>
        <a className="pill" href="#network">Network requests</a>
        <a className="pill" href="#cloud">Engram Cloud</a>
        <a className="pill" href="#website">This website</a>
        <a className="pill" href="#rights">Your rights</a>
        <a className="pill" href="#contact">Contact</a>
      </nav>

      <h2 id="short">The short version</h2>
      <ul>
        <li>The Engram app has no analytics, no advertising and no tracking. We do not sell, rent or share your information.</li>
        <li>Everything you capture is stored in the app&apos;s private storage on your phone.</li>
        <li>You need no account. Without one, none of your notes, recordings, photos or files leave the phone.</li>
        <li>The app makes a few network requests that carry none of your content. They are listed below.</li>
        <li>
          If you choose to sign in to Engram Cloud (currently switched off for everyone), the items listed under
          &ldquo;Engram Cloud&rdquo; are copied to our server so your devices stay in step.
        </li>
      </ul>

      <h2 id="phone">What stays on your phone</h2>
      <p>
        Everything you put into Engram is stored in its private storage on your device: notes and their formatting, voice
        recordings and transcripts, photos, videos and files you attach, to-dos and reminders, tags and links, and your
        settings. The app also makes these from your notes on the phone, and they are never uploaded:
      </p>
      <ul>
        <li>links and groups between notes;</li>
        <li>&ldquo;meaning&rdquo; vectors used to link notes with similar meaning;</li>
        <li>English translations of notes in other languages;</li>
        <li>text read from your photos and screenshots;</li>
        <li>the search index.</li>
      </ul>
      <p>
        <strong>Backups</strong> are files you create and send where you choose (for example, to your own cloud drive).
        Once you send a backup somewhere, that service&apos;s own privacy terms apply to it. Backups are not encrypted by
        Engram.
      </p>
      <p>
        <strong>Uninstalling</strong> Engram deletes everything it stored on the phone, unless Android&apos;s own device
        backup has copied app data.
      </p>

      <h2 id="permissions">Permissions, and why</h2>
      <p>
        Engram asks for each permission only when you use the feature that needs it. You can refuse or withdraw any of
        them in Android settings, and the rest of the app keeps working.
      </p>
      <div className="table">
        <table>
          <thead>
            <tr><th>Permission</th><th>Used for</th></tr>
          </thead>
          <tbody>
            <tr><td>Microphone</td><td>Recording voice notes. Speech is turned into text by Android&apos;s on-device recogniser, not by a cloud service.</td></tr>
            <tr><td>Camera</td><td>Taking a photo or scanning paper into a note.</td></tr>
            <tr><td>Photos and videos</td><td>Attaching the pictures and videos you choose.</td></tr>
            <tr><td>Notifications</td><td>Reminders, the focus timer, and the optional morning and evening notes. All are scheduled on the phone.</td></tr>
            <tr><td>Calendar</td><td>Showing today&apos;s events and adding a thought to your calendar, if you turn this on. Calendar data is read on the phone; Engram keeps only what you put in a note made from an event.</td></tr>
            <tr><td>Fingerprint or face unlock</td><td>The optional app lock. Engram never sees your biometric data; Android only tells it whether unlocking succeeded.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Engram also checks whether the Claude and ChatGPT apps are installed, so it can offer to open them.</p>

      <h2 id="network">Network requests the app makes</h2>
      <p>
        Without an account, Engram contacts other services only in these cases. None of them carries your notes or
        anything you wrote.
      </p>
      <div className="table">
        <table>
          <thead>
            <tr><th>When</th><th>Who</th><th>What is sent</th></tr>
          </thead>
          <tbody>
            <tr><td>Each time the app starts</td><td>Engram&apos;s server (Supabase, Mumbai region)</td><td>A request for which unfinished features are switched on. It includes no account or device id.</td></tr>
            <tr><td>Only if you turn on &ldquo;Understand meaning&rdquo; or download the Ask model</td><td>Hugging Face (models published by Software Mansion)</td><td>A download of the language model. The library&apos;s usage reporting is switched off.</td></tr>
            <tr><td>Only if you turn on translation</td><td>Google ML Kit</td><td>A download of the language pack for each language.</td></tr>
            <tr><td>Only if you install the offline speech pack</td><td>Android, through Google&apos;s speech services</td><td>Handled by Android, not by Engram.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Like any internet request, these reveal your device&apos;s IP address and basic technical details to the service
        you are contacting, and that service may keep standard server logs. Reading text from pictures needs no download:
        the recogniser is built into the app.
      </p>
      <p>
        <strong>Chat with Claude or ChatGPT.</strong> These buttons open the other app, or its website, with a draft
        message made from the notes you chose, and put the draft on your clipboard. Nothing is sent until you send it
        there. After that, Anthropic&apos;s or OpenAI&apos;s privacy terms apply.
      </p>
      <p>
        <strong>Opening links and files.</strong> When you open a web link or a file from a note, it opens in another
        app, under that app&apos;s terms.
      </p>

      <h2 id="cloud">Engram Cloud (optional, currently switched off)</h2>
      <p>
        Engram Cloud is an optional account that keeps your notes in step across your devices. It is built but switched
        off for everyone while it is tested. This section applies only if it is switched on and you sign in.
      </p>
      <h3>What is sent and stored</h3>
      <ul>
        <li>your email address and password (the password is stored by our authentication provider as a one-way hash, which cannot be turned back into the password);</li>
        <li>the title, body and formatting of your notes;</li>
        <li>to-do state, reminder times and the &ldquo;important&rdquo; mark;</li>
        <li>tags, and links you made by hand;</li>
        <li>technical records the service needs: row ids, timestamps, revision counters and receipts for each sync.</li>
      </ul>
      <h3>What is not sent</h3>
      <p>
        Photos, videos, recordings and files (their notes sync, but the files stay on the phone that has them), automatic
        links, meaning vectors, translations, text read from pictures, pins, the trash, your settings and file paths.
      </p>
      <h3>Where it is kept</h3>
      <p>In a database run by Supabase, our hosting provider, in its Mumbai (ap-south-1) region. Supabase processes it on our behalf.</p>
      <h3>How it is protected</h3>
      <p>
        Data is encrypted in transit and at rest, and database rules mean an account can read only its own rows. It is{" "}
        <strong>not end-to-end encrypted</strong>: the service operator can technically read the cloud copy. The app says
        so before you sign in.
      </p>
      <h3>How long it is kept</h3>
      <p>
        Until you delete it. Deleting a note removes its content from the cloud and keeps only its id, so your other
        devices learn it was deleted. Deleting your account in Settings removes the account and all its cloud data.
        Copies already on your phones are not affected.
      </p>
      <h3>Email</h3>
      <p>We send only the emails needed for the account, such as confirming your address. No marketing emails.</p>

      <h2 id="website">This website</h2>
      <ul>
        <li>
          This website (not the app) uses Google Tag Manager and Google Analytics to count visits and see which pages
          people find useful. When you visit, Google receives your IP address, browser and device details and the pages
          you view, and may set cookies to tell visits apart. Google processes this under its own{" "}
          <a href="https://policies.google.com/privacy" rel="noopener">privacy policy</a>. We don&apos;t use it to identify
          you, and we don&apos;t run ads.
        </li>
        <li>
          You can opt out by blocking cookies or scripts from Google in your browser, or with Google&apos;s{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">Analytics opt-out add-on</a>. The site works the
          same without it.
        </li>
        <li>Fonts and images are served from this website itself.</li>
        <li>
          Like any web server, ours keeps short-lived technical logs (such as IP address, browser type and the page
          requested) to keep the site running and secure. We don&apos;t use them to identify or profile you.
        </li>
        <li>The &ldquo;Try it&rdquo; demo runs entirely in your browser. What you type there is not sent or saved anywhere.</li>
        <li>Links to GitHub take you to GitHub, under GitHub&apos;s own privacy terms.</li>
        <li>If you email us, we use your message and address only to reply to you.</li>
      </ul>

      <h2 id="children">Children</h2>
      <p>
        Engram is not directed at children. If you are under the age at which your local law lets you consent to the use
        of your personal information, do not create an Engram Cloud account without a parent&apos;s or guardian&apos;s
        permission. The app without an account collects no personal information about anyone.
      </p>

      <h2 id="rights">Your choices and rights</h2>
      <ul>
        <li><strong>See and export your data:</strong> Settings, Back up, or export as Markdown.</li>
        <li><strong>Correct it:</strong> edit any note in the app.</li>
        <li>
          <strong>Delete it:</strong> delete notes (they go to the trash for 30 days, then are removed), empty the trash,
          or uninstall the app. With Engram Cloud, sign out or delete your account in Settings.
        </li>
        <li>
          <strong>Ask us:</strong> depending on where you live, you may have the right to access, correct or erase
          personal information we hold, or to complain to a data protection authority. The only personal information we
          can hold is an Engram Cloud account or an email you sent us. To make a request, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </li>
      </ul>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        When the app changes what it does with information, this page changes first. The date at the top shows the latest
        version. Any new upload of your content will need your agreement in the app before it starts.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or open an issue at{" "}
        <a href={ISSUES_URL} rel="noopener">github.com/pavitra14/engram/issues</a> (please leave personal details out of
        public issues). See also our <Link href="/terms">Terms of Use</Link>.
      </p>
    </article>
  );
}
