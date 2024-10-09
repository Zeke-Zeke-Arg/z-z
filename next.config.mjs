import { languages } from './src/app/i18n/settings.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  async rewrites() {
    return [
      ...languages.map((lng) => ({
        source: `/${lng}`,
        destination: `/${lng}/index.html`,
      })),
      ...languages.map((lng) => ({
        source: `/${lng}/:path*`,
        destination: `/${lng}/:path*.html`,
      })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
