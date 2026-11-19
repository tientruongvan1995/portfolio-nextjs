import { routing } from '@/i18n/routing';
import { LocaleLang } from '@/components/LocaleLang';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<LayoutProps<'/[locale]'>, 'children'>) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale });

  return { title: t('meta.title'), description: t('meta.description') };
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Lets every server component below read its copy with getTranslations() alone.
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <LocaleLang locale={locale} />
      {children}
    </NextIntlClientProvider>
  );
}
