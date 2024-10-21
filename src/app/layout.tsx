import React from 'react';
import { Inter } from 'next/font/google';
import { I18nProvider } from './i18n-provider';
import './styles/globals.css';
import './styles/tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Z&Z Outfitters',
  description: 'Experience the pinnacle of hunting excellence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
