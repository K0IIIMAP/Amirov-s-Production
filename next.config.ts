import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // allow images from hostname "cdn.sanity.io
  images: {
    domains: ["cdn.sanity.io"], // Specify the domains from which you want to allow images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  ignoreBuildErrors: true,
};

export default nextConfig;
