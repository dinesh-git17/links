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
  openGraph: {
    title: 'Dinesh | Senior Software Engineer',
    description:
      'Personal links hub for Dinesh - Senior Software Engineer building better digital experiences.',
    url: 'https://links.dineshd.dev',
    siteName: 'Dinesh Links',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinesh | Senior Software Engineer',
    description:
      'Personal links hub for Dinesh - Senior Software Engineer building better digital experiences.',
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
                'https://github.com/dinesh',
                'https://linkedin.com/in/dinesh',
                'https://x.com/dinesh',
                'https://tiktok.com/@dinesh',
                'https://youtube.com/@dinesh',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
