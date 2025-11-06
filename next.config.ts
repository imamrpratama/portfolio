import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // for GitHub Pages (static export)
  basePath: "/portfolio", // base folder name in your GitHub Pages URL
  assetPrefix: "/portfolio/", // ensures all static assets resolve correctly
};

export default nextConfig;
