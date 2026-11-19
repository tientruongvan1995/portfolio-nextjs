import { getTranslations } from 'next-intl/server';

import { LocaleSwitch } from '@/features/language';
import { ThemeSwitch } from '@/features/theme';
import { Link } from '@/i18n/navigation';

import { email } from '../landingData';

import s from './Nav.module.css';

import { NavCurrent } from './NavCurrent';
import { NavToggle } from './NavToggle';

export async function Nav() {
  const t = await getTranslations('landing.nav');

  return (
    <>
      <header className="nav nav--centre">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#main">
            {t('skip')}
          </a>
          <a className="nav__logo" href="#top">
            <span className="mark" data-mark="arc" aria-hidden="true" />
            Tien Truong
          </a>
          <nav className="nav__links" aria-label={t('mainNav')}>
            <div className="nav__item">
              <a className="nav__link" href="#services">
                {t('services')}
              </a>
            </div>
            <div className="nav__item">
              <a className="nav__link" href="#approach">
                {t('approach')}
              </a>
            </div>
            <div className="nav__item">
              <a className="nav__link" href="#work">
                {t('work')}
              </a>
            </div>
            <div className="nav__item">
              <Link className="nav__link" href="/pokemon">
                {t('pokemon')}
              </Link>
            </div>
          </nav>
          <div className="nav__actions">
            <div className={s.prefs} role="group" aria-label={t('prefs')}>
              <LocaleSwitch label={t('lang')} />
              <ThemeSwitch label={t('theme')} />
            </div>
            <a className="btn btn--primary" href={`mailto:${email}`}>
              {t('email')}
            </a>
          </div>
          <NavToggle label={t('menu')} />
        </div>
      </header>
      <NavCurrent />
    </>
  );
}
