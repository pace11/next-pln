/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pace-unv.cloud',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.infouip3bs.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
