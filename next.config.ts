import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The old /work pages were replaced by /institutions.
    return [
      { source: "/work", destination: "/institutions", statusCode: 301 },
      { source: "/work/:slug", destination: "/institutions", statusCode: 301 },
    ];
  },
};

export default nextConfig;
