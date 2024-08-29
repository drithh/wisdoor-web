/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'site-assets.plasmic.app',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
