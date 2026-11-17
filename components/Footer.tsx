import Link from "next/link";
import { CONTACT_EMAIL, NEW_ISSUE_URL, RELEASES_URL, REPO_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="wordmark" aria-label="Engram home">
              engram<span>.</span>
            </Link>
            <p className="tag">Made for the thoughts that arrive at the wrong moment.</p>
          </div>
          <nav aria-label="Footer">
            <div>
              <b>App</b>
              <a href={RELEASES_URL} rel="noopener">Download (beta)</a>
              <a href={NEW_ISSUE_URL} rel="noopener">Report a bug</a>
              <a href={REPO_URL} rel="noopener">GitHub</a>
            </div>
            <div>
              <b>Legal</b>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>
            <div>
              <b>Talk to us</b>
              <Link href="/contact">Contact</Link>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </nav>
        </div>
        <div className="base">
          <span>© {new Date().getFullYear()} Engram. All rights reserved.</span>
          <span>No ads. Your notes never leave your phone.</span>
        </div>
      </div>
    </footer>
  );
}
