import { Inter } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';

import type { Metadata, Viewport } from 'next';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dinesh | Senior Software Engineer',
  description:
    'Personal links hub for Dinesh - Senior Software Engineer building better digital experiences. Connect via GitHub, LinkedIn, X, and more.',
  metadataBase: new URL('https://links.dineshd.dev'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Dinesh | Senior Software Engineer',
    description:
      'Personal links hub for Dinesh - Senior Software Engineer building better digital experiences.',
    url: 'https://links.dineshd.dev',
    siteName: 'Dinesh Links',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.jpeg',
        width: 682,
        height: 360,
        alt: 'Dinesh - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinesh | Senior Software Engineer',
    description:
      'Personal links hub for Dinesh - Senior Software Engineer building better digital experiences.',
    images: ['/og.jpeg'],
    creator: '@dinbuilds',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#050505',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dinesh',
              jobTitle: 'Senior Software Engineer',
              url: 'https://links.dineshd.dev',
              sameAs: [
                'https://github.com/dinesh-git17',
                'https://www.linkedin.com/in/dineshsdawonauth/',
                'https://x.com/dinbuilds',
                'https://www.tiktok.com/@dinbuilds',
                'https://www.youtube.com/@DinBuilds',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
