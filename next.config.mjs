/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: "export" to use Vercel's native Next.js support
  // This allows for better caching and performance optimization
  trailingSlash: true,
  images: {
    // Use Cloudinary for image optimization instead of Next.js Image
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dlnb17xz7/**',
      },
    ],
  },
  // Compress output
  compress: true,
};

export default nextConfig;
