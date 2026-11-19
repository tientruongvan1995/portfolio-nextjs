'use client';

import { useEffect } from 'react';

/**
 * <html lang> is set before paint by the boot script in the root layout; this keeps it right
 * when the locale changes without a full page load.
 */
export function LocaleLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
