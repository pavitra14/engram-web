import type { Metadata } from "next";
import Link from "next/link";
import { Bug, Mail } from "@/components/icons";
import { CONTACT_EMAIL, NEW_ISSUE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the Engram team at ${CONTACT_EMAIL}, or report a bug on GitHub.`,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact · Engram", url: "/contact" },
};

export default function Contact() {
  return (
    <article className="doc">
      <h1>Say hello.</h1>
      <p className="lead" style={{ marginTop: 20 }}>
        Questions, ideas, press, partnerships, or just a story about the idea Engram saved for you. We read everything.
      </p>
      <a className="big-mail" href={`mailto:${CONTACT_EMAIL}`}>
        {CONTACT_EMAIL}
      </a>

      <div className="contact-cards">
        <div className="way">
          <div className="ic"><Bug /></div>
          <h3>Found a bug?</h3>
          <p>
            GitHub issues are the fastest way to get it fixed. Say what you did, what you expected and what happened. A
            screenshot helps.
          </p>
          <a className="btn btn-primary btn-sm" href={NEW_ISSUE_URL} rel="noopener">
            Open an issue
          </a>
        </div>
        <div className="way">
          <div className="ic"><Mail /></div>
          <h3>Privacy or anything else</h3>
          <p>For privacy requests, or anything you&apos;d rather not post in public, email us directly.</p>
          <a className="btn btn-sm" href={`mailto:${CONTACT_EMAIL}`}>
            Email us
          </a>
        </div>
      </div>

      <p className="small" style={{ marginTop: 40 }}>
        Please don&apos;t put personal details in public GitHub issues. Engram never needs your notes to help you. See the{" "}
        <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>.
      </p>
    </article>
  );
}
