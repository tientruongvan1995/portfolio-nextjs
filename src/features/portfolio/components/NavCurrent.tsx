'use client';

import { useEffect } from 'react';

export const sectionIds = ['services', 'approach', 'work'];

/** Marks the nav word of the section under the reading line (system.css's aria-current style). */
export function NavCurrent() {
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.nav__links .nav__link'),
    );

    const mark = () => {
      const line = window.innerHeight * 0.4;
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= line && rect.bottom > line;
      });
      for (const link of links) {
        if (current && link.getAttribute('href') === `#${current.id}`) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    };

    mark();
    window.addEventListener('scroll', mark, { passive: true });
    window.addEventListener('resize', mark);
    return () => {
      window.removeEventListener('scroll', mark);
      window.removeEventListener('resize', mark);
    };
  }, []);

  return null;
}
