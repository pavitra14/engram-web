import Link from "next/link";
import Phone from "@/components/Phone";
import CaptureDemo from "@/components/CaptureDemo";
import { Arrow, Bug, Camera, Check, Clip, Download, Lock, Mic, Pen, Share, Tile, Widget } from "@/components/icons";
import type { Metadata } from "next";
import { DESCRIPTION, NEW_ISSUE_URL, REPO_URL, SITE_URL, getLatestRelease } from "@/lib/site";
import { JsonLd, organizationLd, pageMeta, websiteLd } from "@/lib/seo";

// Re-render on the server at most once an hour so the beta version stays current.
export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Engram: a free second brain for your phone",
  description: DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

const FAQ: { q: string; a: string }[] = [
  {
    q: "Is Engram free?",
    a: "Yes. No subscription, no ads, no in-app purchases. Engram is free while it's in beta.",
  },
  {
    q: "Is there an iPhone version?",
    a: "Not yet. Engram is Android only for now (Android 7 or newer, 64-bit). It's designed to come to iPhone later.",
  },
  {
    q: "Where are my notes stored?",
    a: "On your phone, in the app's private storage. There's no account and your notes are never uploaded. You can make a backup file whenever you like and keep it wherever you want.",
  },
  {
    q: "Does it need the internet?",
    a: "No. Capturing, voice notes, search, reminders and groups all work offline. The only downloads are optional extras you switch on yourself, like the model that links thoughts by meaning or a translation language pack.",
  },
  {
    q: "Why isn't it on the Play Store?",
    a: "During the beta, Engram is installed straight from its official GitHub releases page. Download the APK file there and open it on your phone.",
  },
  {
    q: "What does beta mean for me?",
    a: "Engram is ready for daily use, but it's still young, so you might hit a bug. Keep a backup (Settings, Back up) and tell us when something breaks. Your report helps everyone.",
  },
  {
    q: "How do I report a bug or ask for a feature?",
    a: "Open an issue on GitHub at github.com/pavitra14/engram/issues. Say what you did, what you expected and what happened. Please leave personal details out. You can also email contact@engrm.app.",
  },
  {
    q: "Is Engram open source?",
    a: "The code is public so anyone can see how it works and check the privacy promises, but it isn't open source: all rights are reserved.",
  },
];

export default async function Home() {
  const release = await getLatestRelease();

  const jsonLd = [
    organizationLd,
    websiteLd,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Engram",
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Note taking",
      alternateName: "Engram: second brain",
      image: `${SITE_URL}/screens/today.webp`,
      screenshot: ["today", "map", "note", "todo"].map((s) => `${SITE_URL}/screens/${s}.webp`),
      featureList: [
        "Save ideas from the share sheet, voice, widget or Quick Settings tile",
        "Voice notes transcribed on the phone",
        "Automatic linking and grouping by meaning",
        "Reminders from plain words",
        "Works offline, no account, notes stay on your phone",
      ],
      publisher: { "@id": `${SITE_URL}/#org` },
      isAccessibleForFree: true,
      operatingSystem: "Android 7.0 or later",
      description: DESCRIPTION,
      ...(release.tag ? { softwareVersion: release.tag.replace(/^v/, "") } : {}),
      downloadUrl: release.url,
      url: SITE_URL,
      sameAs: [REPO_URL],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <a className="pill" href={release.url} rel="noopener">
              <span className="dot" /> Free beta for Android{release.label ? ` · ${release.label}` : ""}
            </a>
            <h1>
              Catch the thought before the next <em>notification</em> does.
            </h1>
            <p className="lead">
              Engram is a second brain for your phone. Save any idea in one step, by talking, typing or sharing from any
              app, and it sorts itself. No folders. No account. Your notes never leave your phone.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={release.url} rel="noopener">
                <Download /> Download for Android
              </a>
              <Link className="btn" href="#how">
                See how it works
              </Link>
            </div>
            <p className="hero-note">Free · no ads · Android 7+ · works offline</p>
          </div>
          <div className="hero-visual">
            <Phone
              light="today"
              dark="today-black"
              alt="Engram's Today screen: a question of the day, a to-do with a reminder, and recent notes"
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------- The problem ---------- */}
      <section id="why">
        <div className="wrap">
          <p className="eyebrow">Why Engram</p>
          <h2 className="h2">Your phone is built to steal your attention. Your best ideas pay for it.</h2>
          <p className="lead">
            Feeds, pings and reels are designed to pull you away all day. Good ideas still show up, but they don&apos;t
            survive the next tap.
          </p>
          <div className="trio">
            <div>
              <div className="n">01</div>
              <h3>Ideas arrive at the worst moment.</h3>
              <p>In the shower. On a walk. Mid-scroll. Halfway through someone else&apos;s sentence.</p>
            </div>
            <div>
              <div className="n">02</div>
              <h3>Saving them takes too long.</h3>
              <p>Unlock, find the app, pick a folder, think of a title… and the thought is already gone.</p>
            </div>
            <div>
              <div className="n">03</div>
              <h3>Saved notes go to die.</h3>
              <p>The few you do write down sink into a list you never scroll back through.</p>
            </div>
          </div>
          <p className="punch">
            Engram fixes all three. <span>Getting it in takes one step. It sorts itself. And it brings the good stuff back.</span>
          </p>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 className="h2">Catch it. Forget it. Find it when it matters.</h2>
          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <h3>Catch it</h3>
              <p>Talk, type or share from any app. One step, zero decisions. No folder to pick, no title to think of.</p>
              <Phone light="share" alt="Sharing a link into Engram from another app" small />
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>It sorts itself</h3>
              <p>
                Related thoughts link up and gather into groups named from your own words, like &ldquo;Sourdough&rdquo; or
                &ldquo;Hampi trip&rdquo;.
              </p>
              <Phone light="map" dark="map-black" alt="The map: your groups as circles, sized by how many thoughts they hold" small />
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>It comes back</h3>
              <p>Reminders from plain words, one question a day, and old ideas brought back before they fade away.</p>
              <Phone light="review" alt="The weekly review with your streak and the thoughts worth another look" small />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Try it ---------- */}
      <section id="try" className="center">
        <div className="wrap">
          <p className="eyebrow">Try it right here</p>
          <h2 className="h2">Type the first thing on your mind.</h2>
          <p className="lead">See how Engram would file it. Try a time, like &ldquo;tomorrow 6pm&rdquo;, to watch a reminder set itself.</p>
          <CaptureDemo />
        </div>
      </section>

      {/* ---------- Ways in ---------- */}
      <section id="capture">
        <div className="wrap">
          <p className="eyebrow">Every way in</p>
          <h2 className="h2">Wherever the idea hits, Engram is one tap away.</h2>
          <div className="ways">
            <div className="way">
              <div className="ic"><Share /></div>
              <h3>Share from any app</h3>
              <p>Links, reels, posts, photos, files. Hit share, pick Engram, done.</p>
            </div>
            <div className="way">
              <div className="ic"><Mic /></div>
              <h3>Just say it</h3>
              <p>Tap the mic and talk. It&apos;s turned into text on your phone, not in the cloud.</p>
            </div>
            <div className="way">
              <div className="ic"><Pen /></div>
              <h3>Type one line</h3>
              <p>The app opens ready to write. Your first line becomes the title.</p>
            </div>
            <div className="way">
              <div className="ic"><Widget /></div>
              <h3>Home-screen widget</h3>
              <p>Capture without even opening the app.</p>
            </div>
            <div className="way">
              <div className="ic"><Tile /></div>
              <h3>Quick Settings tile</h3>
              <p>Swipe down from the top of any screen and tap.</p>
            </div>
            <div className="way">
              <div className="ic"><Camera /></div>
              <h3>Snap or scan</h3>
              <p>Words in your photos and screenshots become searchable, in English and Hindi.</p>
            </div>
          </div>
          <p className="small">
            <Clip size={16} /> Copied something? Tap the clipboard button to save it in one go.
          </p>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features">
        <div className="wrap">
          <div className="feature">
            <div className="feature-copy">
              <p className="eyebrow">Linked by meaning</p>
              <h3>&ldquo;Book the garage&rdquo; and &ldquo;oil change due&rdquo; share no words. Engram links them anyway.</h3>
              <p>
                A small model on your phone understands what you meant, not just what you typed, in more than 50
                languages. Every link tells you why it&apos;s there.
              </p>
            </div>
            <Phone light="note" dark="thought-black" alt="A note linked to another note that shares no words with it" />
          </div>

          <div className="feature flip">
            <div className="feature-copy">
              <p className="eyebrow">A map of your mind</p>
              <h3>See what you&apos;ve really been thinking about.</h3>
              <p>
                Your groups appear as circles, sized by how much you&apos;ve thought about them. Press play to watch them
                grow over time. Keep it above your list, or on its own.
              </p>
            </div>
            <Phone light="home-split" dark="map-black" alt="Home with the map of groups above the list of notes" />
          </div>

          <div className="feature">
            <div className="feature-copy">
              <p className="eyebrow">To-dos that set themselves</p>
              <h3>Write &ldquo;call mum tomorrow 6pm&rdquo;. That&apos;s it.</h3>
              <p>Engram reads the time and sets the reminder. No date pickers.</p>
              <ul className="ticks">
                <li><Check /> Done or &ldquo;In an hour&rdquo;, right from the notification</li>
                <li><Check /> Check boxes in any note add up into one to-do list</li>
                <li><Check /> Add a thought to your calendar, and a focus timer for deep work</li>
              </ul>
            </div>
            <Phone light="todo" alt="The to-do list with reminders and important items" />
          </div>

          <div className="feature flip">
            <div className="feature-copy">
              <p className="eyebrow">From idea to next step</p>
              <h3>Ideas are cheap. Doing something with them isn&apos;t.</h3>
              <p>
                Open a group and turn it into one tidy note with a line for what to do next. Or hand it to Claude or
                ChatGPT as a ready-made request for a plan. Nothing is sent until you press send.
              </p>
            </div>
            <Phone light="group" alt="A group of related thoughts with options to turn it into a plan" />
          </div>

          <div className="feature">
            <div className="feature-copy">
              <p className="eyebrow">Calm by design</p>
              <h3>No feed. No streak guilt. No noise.</h3>
              <p>
                Your words come first, set in a big, easy-to-read type. A true-black theme for night that&apos;s easy on
                your eyes and your battery. An app lock if you want one. A 30-day trash with undo, because everyone
                deletes the wrong thing.
              </p>
            </div>
            <Phone light="thought" dark="thought-black" alt="A single thought, shown large with its links and group" />
          </div>
        </div>
      </section>

      {/* ---------- Habits ---------- */}
      <section id="habits">
        <div className="wrap">
          <p className="eyebrow">Make the most of it</p>
          <h2 className="h2">Five tiny habits for a short attention span.</h2>
          <p className="lead">No productivity system to learn. Each one takes seconds, and Engram does the rest.</p>
          <ol className="habits">
            <li>
              <h3>Dump, don&apos;t sort.</h3>
              <p>
                The moment something pops into your head, throw it in. Messy is fine. Sorting is Engram&apos;s job, not
                yours.
              </p>
            </li>
            <li>
              <h3>Talk when your hands are busy.</h3>
              <p>Walking, cooking, waiting for chai. Tap the mic and say it out loud. Ten seconds, and it&apos;s safe.</p>
            </li>
            <li>
              <h3>Share it, don&apos;t screenshot it.</h3>
              <p>
                That reel, recipe or article you&apos;ll &ldquo;check later&rdquo;? Share it to Engram instead of burying it in
                your camera roll.
              </p>
            </li>
            <li>
              <h3>Answer one question a day.</h3>
              <p>
                Each day Engram brings back one older thought and asks if it still matters. Keep it, act on it, or let it
                go.
              </p>
            </li>
            <li>
              <h3>Once a week, do one thing.</h3>
              <p>
                Open your biggest group and turn it into a single next step: a reminder, a plan, or 25 minutes on the
                focus timer.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ---------- Privacy ---------- */}
      <section id="privacy">
        <div className="wrap private">
          <div>
            <p className="eyebrow">Private by design</p>
            <h2 className="h2">Your thoughts are nobody&apos;s business.</h2>
            <p className="quote">Your notes live on your phone. They&apos;re not uploaded, analysed or sold.</p>
          </div>
          <div>
            <ul className="ticks">
              <li><Check /> No account needed. Ever.</li>
              <li><Check /> No ads and no tracking. Anonymous usage counts only if you say yes.</li>
              <li><Check /> Voice is turned into text on your phone.</li>
              <li><Check /> Text in photos is read on your phone, too.</li>
              <li><Check /> Downloads happen only when you switch a feature on.</li>
              <li><Check /> Backups go only where you send them.</li>
            </ul>
            <p className="small">
              <Lock size={16} /> The full details, in plain words, are in our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Beta ---------- */}
      <section id="beta">
        <div className="wrap">
          <div className="beta">
            <div>
              <p className="eyebrow">Now in beta{release.label ? ` · ${release.label}` : ""}</p>
              <h2 className="h2">It&apos;s in beta. Come break it.</h2>
              <p className="lead">
                Engram is free and ready for everyday use, but it&apos;s young, so you might find rough edges. Keep a backup,
                and when something breaks, tell us on GitHub. Every bug you report makes Engram better for everyone.
              </p>
              <div className="btns">
                <a className="btn btn-primary" href={release.url} rel="noopener">
                  <Download /> Get the latest release
                </a>
                <a className="btn" href={NEW_ISSUE_URL} rel="noopener">
                  <Bug /> Report a bug
                </a>
              </div>
              <p className="small">
                Coming from version 0.6 or older? The new version installs beside the old one. Read the{" "}
                <a href={release.url} rel="noopener">release notes</a> to move your notes across.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 26, marginBottom: 20 }}>Install in a minute</h3>
              <ol className="install">
                <li>
                  <div>
                    <b>Open the latest release on your Android phone</b>
                    <span>It&apos;s on GitHub, Engram&apos;s official home during the beta.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>Download the engram APK file</b>
                    <span>Look under &ldquo;Assets&rdquo; at the bottom of the release.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>Open it and allow the install</b>
                    <span>Android asks once, because it&apos;s not from the Play Store.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>Share something to Engram</b>
                    <span>The quick tour shows you around. Then just capture.</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq">
        <div className="wrap">
          <p className="eyebrow center">Questions</p>
          <h2 className="h2 center" style={{ margin: "0 auto" }}>
            Good questions.
          </h2>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p className="a">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="small center">
            Something else? <Link href="/contact">Get in touch</Link>.
          </p>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="final center">
        <div className="wrap">
          <h2>Stop losing your best ideas to the scroll.</h2>
          <p className="lead">Free, private, and ready on your phone in about a minute.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={release.url} rel="noopener">
              <Download /> Download for Android
            </a>
            <a className="btn" href={REPO_URL} rel="noopener">
              View on GitHub <Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
