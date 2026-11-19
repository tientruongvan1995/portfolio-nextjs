import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

import { Arrow } from '../components/Arrow';
import { email, linkedin } from '../landingData';

export async function Closing() {
  const t = await getTranslations('landing.closing');
  const nav = await getTranslations('landing.nav');

  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">{t('heading')}</h2>
            <p>{t('lead')}</p>
          </div>
          <a className="btn btn--primary" href={`mailto:${email}`}>
            {t('cta')}
            <Arrow />
          </a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-6 stack-5">
              <a className="nav__logo" href="#top">
                <span className="mark" data-mark="arc" aria-hidden="true" />
                Tien Truong
              </a>
              <p className="footer__lede">{t('lede')}</p>
            </div>
            <div className="span-3 ks-7 footer__col">
              <h3>{t('thisPage')}</h3>
              <ul>
                <li>
                  <a href="#services">{nav('services')}</a>
                </li>
                <li>
                  <a href="#approach">{nav('approach')}</a>
                </li>
                <li>
                  <a href="#work">{nav('work')}</a>
                </li>
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h3>{t('elsewhere')}</h3>
              <ul>
                <li>
                  <a href={linkedin} rel="noreferrer" target="_blank">
                    {t('linkedin')}
                  </a>
                </li>
                <li>
                  <Link href="/pokemon">{t('pokemon')}</Link>
                </li>
                <li>
                  <a href={`mailto:${email}`}>{t('email')}</a>
                </li>
                <li>{t('address')}</li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>{t('legal')}</span>
            <span>{t('built')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
