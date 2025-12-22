import { FAQPage } from '@/components/FAQPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Dinesh',
  description:
    'Frequently asked questions about my projects, tech stack, and work. Context, choices, and curiosity.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | Dinesh',
    description: 'Frequently asked questions about my projects, tech stack, and work.',
    url: 'https://links.dineshd.dev/faq',
  },
  twitter: {
    title: 'FAQ | Dinesh',
    description: 'Frequently asked questions about my projects, tech stack, and work.',
  },
};

export default function FAQ(): React.ReactElement {
  return <FAQPage />;
}
