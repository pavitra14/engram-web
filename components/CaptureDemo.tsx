"use client";

import { FormEvent, useState } from "react";
import { Bell, Circle, Send } from "./icons";

type Group = { name: string; color: string; words: string[] };

// A toy version of what the app does. The real thing links by meaning with a
// model on the phone; this only looks for a few words.
const GROUPS: Group[] = [
  { name: "Sourdough", color: "sourdough", words: ["bread", "sourdough", "starter", "flour", "bake", "dough", "oven", "recipe", "yeast"] },
  { name: "Hampi trip", color: "hampi", words: ["hampi", "trip", "train", "travel", "hotel", "ticket", "flight", "pack", "holiday", "vacation", "goa"] },
  { name: "Side project", color: "work", words: ["app", "idea", "startup", "website", "build", "launch", "code", "design", "feature", "project"] },
  { name: "Health", color: "health", words: ["gym", "run", "walk", "sleep", "water", "yoga", "doctor", "workout", "diet", "steps"] },
  { name: "To read", color: "books", words: ["book", "read", "article", "podcast", "movie", "watch", "series", "novel"] },
  { name: "Habits", color: "habits", words: ["habit", "daily", "morning", "journal", "meditate", "routine", "every day", "phone"] },
];

const EXAMPLES = [
  "Sourdough starter needs more water",
  "Book the train to Hampi",
  "Call mum tomorrow 6pm",
  "App idea: a jar for tiny wins",
];

type Saved = { id: number; text: string; group?: Group; links: number; reminder?: string; time: string };

function findReminder(text: string): string | undefined {
  const t = text.toLowerCase();
  const day = /\btomorrow\b/.test(t)
    ? "Tomorrow"
    : /\btonight\b/.test(t)
      ? "Today"
      : /\btoday\b/.test(t)
        ? "Today"
        : (t.match(/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/)?.[1] ?? "");
  const tm = t.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/);
  if (!day && !tm) return undefined;
  const dayLabel = day ? day[0].toUpperCase() + day.slice(1) : "Today";
  const timeLabel = tm ? `${Number(tm[1])}:${tm[2] ?? "00"} ${tm[3]}` : /\btonight\b/.test(t) ? "8:00 pm" : "9:00 am";
  return `${dayLabel}, ${timeLabel}`;
}

function place(text: string): Group | undefined {
  const t = text.toLowerCase();
  let best: Group | undefined;
  let score = 0;
  for (const g of GROUPS) {
    const s = g.words.filter((w) => t.includes(w)).length;
    if (s > score) {
      score = s;
      best = g;
    }
  }
  return best;
}

export default function CaptureDemo() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState<Saved[]>([]);

  function save(text: string) {
    const clean = text.trim().slice(0, 140);
    if (!clean) return;
    const group = place(clean);
    const now = new Date();
    setItems((prev) =>
      [
        {
          id: now.getTime(),
          text: clean,
          group,
          links: group ? 2 + (clean.length % 5) : 0,
          reminder: findReminder(clean),
          time: now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 3),
    );
    setValue("");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    save(value);
  }

  return (
    <div className="demo">
      <form className="capture" onSubmit={onSubmit}>
        <label htmlFor="demo-input" className="skip">Write a thought</label>
        <input
          id="demo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write a thought"
          autoComplete="off"
          maxLength={140}
        />
        <button className="fab" type="submit" aria-label="Save thought">
          <Send />
        </button>
      </form>
      <div className="chips" aria-label="Examples">
        {EXAMPLES.map((ex) => (
          <button key={ex} type="button" className="chip" onClick={() => save(ex)}>
            {ex}
          </button>
        ))}
      </div>

      <ul className="saved-list" aria-live="polite">
        {items.map((it) => (
          <li key={it.id} className="saved">
            <div className="meta">
              <Circle /> {it.reminder ? "To do" : "Note"}, {it.time}
            </div>
            <div className="t">{it.text}</div>
            <div className="where">
              {it.reminder && (
                <>
                  <Bell /> Reminder set: {it.reminder}
                  <span aria-hidden>·</span>
                </>
              )}
              {it.group ? (
                <>
                  Placed in
                  <span
                    className="gpill"
                    style={{ background: `var(--g-${it.group.color})`, borderColor: `var(--g-${it.group.color}-b)` }}
                  >
                    {it.group.name}
                  </span>
                  linked to {it.links} thoughts
                </>
              ) : (
                <>On its own for now. It will find its group as you add more.</>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="demo-note">
        A tiny demo that runs in your browser and saves nothing. The real app links thoughts by meaning, on your phone.
      </p>
    </div>
  );
}
