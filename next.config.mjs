import { languages } from './src/app/i18n/settings.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: languages,
  },
  async rewrites() {
    return [
      {
        source: '/:lng',
        destination: '/',
      },
      {
        source: '/:lng/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
