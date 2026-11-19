import type { Metadata, Viewport } from 'next';
import { getTranslations } from 'next-intl/server';

import { PortfolioPage } from '@/features/portfolio';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#edccbe' },
    { media: '(prefers-color-scheme: dark)', color: '#1c0e17' },
  ],
};

export async function generateMetadata({
  params,
}: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'landing.meta' });
  const title = t('title');
  const description = t('description');
  const ogDescription = t('ogDescription');

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', vi: '/vi' },
    },
    other: {
      'page-type': 'service',
      'site-kind': 'other',
    },
    openGraph: {
      title,
      description: ogDescription,
      type: 'website',
      images: ['/avatar.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: ogDescription,
      images: ['/avatar.jpg'],
    },
  };
}

export default function LocalePage() {
  return <PortfolioPage />;
}
