/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
