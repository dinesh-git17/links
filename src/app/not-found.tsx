import { NotFoundPage } from '@/components/NotFoundPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404: Not Found | Dinesh',
  description: 'The page you requested could not be found.',
};

export default function NotFound(): React.ReactElement {
  return <NotFoundPage />;
}
