
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // CRITICAL: Enable static export for GitHub Pages
  output: 'export',
  
  // DO NOT USE basePath for custom domains.
  // basePath is ONLY for github.io/repo-name URLs.
  
  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/**',
      }
    ],
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
