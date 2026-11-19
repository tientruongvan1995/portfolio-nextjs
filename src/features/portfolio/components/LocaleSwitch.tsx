'use client';

import { useParams } from 'next/navigation';

import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

import s from './Prefs.module.css';

/** EN / VI, on the page the visitor is already reading. */
export function LocaleSwitch({ label }: { label: string }) {
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const current = params?.locale ?? routing.defaultLocale;

  return (
    <span className={s.group} role="group" aria-label={label}>
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === current ? 'true' : undefined}
          className={`${s.control}${locale === current ? ` ${s.isOn}` : ''}`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </span>
  );
}
