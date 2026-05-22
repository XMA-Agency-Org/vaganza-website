import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product imagery is served from the Shopify CDN once the store is wired.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
