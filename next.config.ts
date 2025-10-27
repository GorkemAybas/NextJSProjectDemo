import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    ppr: 'incremental'
  },
};

export default nextConfig;
