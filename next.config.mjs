import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    imageSizes: [10,32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [384, 640, 1080, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'site-assets.plasmic.app',
      },
    ],
  },
  trailingSlash: true,
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath:
      'public/plasmic/wisdoor_web/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '85',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
  output: 'standalone',
};
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
export default nextConfig;
