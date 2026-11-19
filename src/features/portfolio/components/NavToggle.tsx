'use client';

import { useRef, useState } from 'react';

/**
 * The phone menu button. The kit's system.js also drives it when it is loaded; this keeps the
 * state on the button itself (and the is-open class on the nav) even before that script runs.
 */
export function NavToggle({ label }: { label: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function toggle() {
    const next = !open;
    const nav = ref.current?.closest('.nav');

    setOpen(next);
    nav?.classList.toggle('is-open', next);
    document.body.classList.toggle('nav-locked', next);
  }

  return (
    <button
      ref={ref}
      className="nav__toggle"
      type="button"
      aria-expanded={open}
      aria-label={label}
      onClick={toggle}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        {open ? (
          <path
            d="M4 4l10 10M14 4L4 14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M2 5h14M2 13h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )}
      </svg>
    </button>
  );
}
