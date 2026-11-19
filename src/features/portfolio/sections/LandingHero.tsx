import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Arrow } from '../components/Arrow';

type Fact = { label: string; value: string };

export async function LandingHero() {
  const t = await getTranslations('landing.hero');
  const facts = t.raw('facts') as Fact[];

  return (
    <section
      className="hero hero--split"
      id="top"
      data-enter
      aria-labelledby="hero-h"
    >
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <p className="hero__kicker">
              <span className="dot" aria-hidden="true" />
              {t('kicker')}
            </p>
            <h1 id="hero-h">{t('title')}</h1>
            <p className="hero__lead">{t('lead')}</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#work">
                {t('work')}
                <Arrow />
              </a>
              <a className="btn btn--secondary" href="#approach">
                {t('approach')}
              </a>
            </div>
            <dl className="hero-facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero__media span-6 ks-7">
            <Image
              src="/avatar.jpg"
              alt="Truong Van Tien"
              width={960}
              height={960}
              priority
              sizes="(min-width: 1024px) 620px, 100vw"
              style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
            />
            <div className="ly-float">
              <div className="ly-float__row">
                <span>{t('location')}</span>
                <span>{t('tz')}</span>
              </div>
              <div className="ly-float__title">{t('lastShipped')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
