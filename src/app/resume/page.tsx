import { ResumePage } from '@/components/ResumePage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Dinesh Dawonauth - Full-Stack Developer & AI Engineer',
  description:
    'Senior Software Engineer with 5+ years building scalable systems. Expert in TypeScript, Python, React, and AI orchestration. View experience, projects, and skills.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Resume | Dinesh Dawonauth - Full-Stack Developer & AI Engineer',
    description:
      'Senior Software Engineer with 5+ years building scalable systems. Expert in TypeScript, Python, React, and AI orchestration.',
    url: 'https://links.dineshd.dev/resume',
    type: 'profile',
    images: [
      {
        url: '/og.jpeg',
        width: 682,
        height: 360,
        alt: 'Dinesh Dawonauth - Resume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume | Dinesh Dawonauth - Full-Stack Developer',
    description:
      'Senior Software Engineer with 5+ years building scalable systems. Expert in TypeScript, Python, React, and AI orchestration.',
    images: ['/og.jpeg'],
  },
};

export default function Page(): React.ReactElement {
  return <ResumePage />;
}
