import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  outputFileTracingRoot: require('path').join(__dirname),
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;

