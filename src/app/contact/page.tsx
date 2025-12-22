import { ContactPage } from '@/components/ContactPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Dinesh',
  description:
    "Get in touch with Dinesh. No forms, no spam - just email. Let's build something useful together.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Dinesh',
    description: "Get in touch with Dinesh. Let's build something useful together.",
    url: 'https://links.dineshd.dev/contact',
  },
  twitter: {
    title: 'Contact | Dinesh',
    description: "Get in touch with Dinesh. Let's build something useful together.",
  },
};

export default function Contact(): React.ReactElement {
  return <ContactPage />;
}
