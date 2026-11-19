'use client';

import { useTheme } from './ThemeProvider';

import s from '@/components/Control.module.css';

/**
 * Light and dark. Which mark shows is decided by the class the boot script puts on <html>
 * before paint, so the button is the same on the server and on the client; the action is
 * the provider's.
 */
export function ThemeSwitch({ label }: { label: string }) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={s.control}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <svg className={s.moon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M16.4 12.2A6.9 6.9 0 0 1 7.8 3.6a6.9 6.9 0 1 0 8.6 8.6Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <svg className={s.sun} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="10" cy="10" r="3.6" />
          <path d="M10 1.8v2M10 16.2v2M1.8 10h2M16.2 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M15.8 4.2l-1.4 1.4M5.6 14.4l-1.4 1.4" />
        </g>
      </svg>
    </button>
  );
}
