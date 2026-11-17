import type { NextConfig } from "next";

const REPO = "https://github.com/pavitra14/engram";

const nextConfig: NextConfig = {
  // Coolify runs the Docker image; standalone output keeps it small.
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  images: { unoptimized: true },

  // Short, shareable links.
  async redirects() {
    return [
      { source: "/download", destination: `${REPO}/releases/latest`, permanent: false },
      { source: "/bugs", destination: `${REPO}/issues/new`, permanent: false },
      { source: "/github", destination: REPO, permanent: false },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/tnc", destination: "/terms", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
      {
        source: "/screens/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
