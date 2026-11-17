import type { MetadataRoute } from "next";
import { DESCRIPTION } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Engram: a second brain for your phone",
    short_name: "Engram",
    description: DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#F3F4F1",
    theme_color: "#1F3FBF",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
