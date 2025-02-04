import type { NextConfig } from "next";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['cdn.airfuture.com'],
  }
};

export default nextConfig;
