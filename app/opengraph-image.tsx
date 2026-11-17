import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "engram. Catch the thought before the next notification does.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (pkg: string, file: string) =>
  readFile(join(process.cwd(), "node_modules/@fontsource", pkg, "files", file));

export default async function OG() {
  const [serif, serifItalic, sans] = await Promise.all([
    font("newsreader", "newsreader-latin-500-normal.woff"),
    font("newsreader", "newsreader-latin-500-italic.woff"),
    font("inter", "inter-latin-500-normal.woff"),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          background: "#F3F4F1", padding: "72px 80px", fontFamily: "Inter", color: "#15171A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 64, letterSpacing: -2 }}>
            engram<span style={{ color: "#1F3FBF" }}>.</span>
          </div>
          <div style={{ display: "flex", border: "2px solid #D5D8D2", background: "#fff", borderRadius: 999, padding: "10px 26px", fontSize: 26, color: "#5A5F66" }}>
            Free beta for Android
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Newsreader", fontSize: 96, lineHeight: 1.0, letterSpacing: -3 }}>
          <span>Catch the thought before</span>
          <span style={{ display: "flex" }}>
            the next&nbsp;<span style={{ fontStyle: "italic", color: "#1F3FBF" }}>notification</span>&nbsp;does.
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#5A5F66" }}>
          A second brain for your phone. One step to save. It sorts itself. Nothing leaves your phone.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serif, weight: 500, style: "normal" },
        { name: "Newsreader", data: serifItalic, weight: 500, style: "italic" },
        { name: "Inter", data: sans, weight: 500, style: "normal" },
      ],
    },
  );
}
