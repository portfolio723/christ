import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // CRITICAL: Enable static export for GitHub Pages
  output: 'export',
  
  // DO NOT USE basePath for custom domains
  // basePath is ONLY for github.io/repo-name URLs
  // basePath: '/christ', // ❌ REMOVE THIS
  
  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },
  
  // Optional: Add trailing slashes for better compatibility
  trailingSlash: true,
  
  // Optional: Disable server features
  reactStrictMode: true,
};

export default nextConfig;
