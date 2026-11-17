"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RELEASES_URL } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-in">
        <Link href="/" className="wordmark" aria-label="Engram home">
          engram<span>.</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <Link className="link" href="/#how">How it works</Link>
          <Link className="link" href="/#features">Features</Link>
          <Link className="link" href="/#habits">Tips</Link>
          <Link className="link" href="/#faq">FAQ</Link>
          <a className="btn btn-sm" href={RELEASES_URL} rel="noopener">
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
