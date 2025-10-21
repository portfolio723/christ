
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // CRITICAL: Enable static export for GitHub Pages
  output: 'export',
  
  // DO NOT USE basePath for custom domains.
  // basePath is ONLY for github.io/repo-name URLs.
  
  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },
  
  // Add trailing slashes for better compatibility with some static hosts.
  trailingSlash: true,
  
  // Optional: Quality-of-life settings
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
