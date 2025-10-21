import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  
  // Add basePath ONLY if deploying to GitHub Pages subdirectory
  // Remove this line if using custom domain (godsspiritsays.com)
  // basePath: '/christ',
  
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Disable trailing slashes for Hostinger compatibility
  trailingSlash: true,
};

export default nextConfig;
