import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/be-bop-a-lula" : "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
