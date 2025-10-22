/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // Export as static HTML
  trailingSlash: true,          // Ensures folders end with slash for GitHub Pages
  images: { unoptimized: true }, // Keep image optimization disabled for static export
};
module.exports = nextConfig;
