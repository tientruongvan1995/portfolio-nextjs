'use client';

import { routing } from '@/i18n/routing';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params?.locale ?? routing.defaultLocale;

  return (
    <div className="fixed left-6 top-6 z-50 flex gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      {routing.locales.map((lang) => (
        <Link
          key={lang}
          href={pathname.replace(`/${currentLocale}`, `/${lang}`)}
          className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
            currentLocale === lang
              ? 'bg-[var(--accent-warm)] text-black'
              : 'text-[var(--foreground)] hover:bg-[rgba(232,228,220,0.08)]'
          }`}
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
