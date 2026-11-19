import { getTranslations } from 'next-intl/server';

import { Arrow } from '../components/Arrow';
import { tools } from '../landingData';

import s from './Services.module.css';

type Service = { name: string; line: string; value: string };

export async function Services() {
  const t = await getTranslations('landing.services');
  const items = t.raw('items') as Service[];

  const diagramSpec = JSON.stringify({
    layout: 'hub',
    alt: t('diagramAlt'),
    center: { label: t('center'), icon: 'ui:layers', cap: true },
    spokes: tools.map((tool) => ({ label: tool.label, icon: tool.icon, cap: true })),
    ground: 'none',
    motion: { pulse: 'none' },
  });

  return (
    <section
      className="section g2 g2m"
      id="services"
      aria-labelledby="services-h"
    >
      <div className="wrap">
        <div className="group">
          <div className="section-head">
            <h2 id="services-h">{t('heading')}</h2>
            <p>{t('lead')}</p>
          </div>
          <ul className="rows">
            {items.map((service) => (
              <li key={service.name}>
                <span className="rows__name">
                  {service.name}
                  <small>{service.line}</small>
                </span>
                <span className="rows__value">{service.value}</span>
              </li>
            ))}
          </ul>
          <div className="btn-row">
            <a className="btn btn--secondary" href="#work">
              {t('cta')}
              <Arrow />
            </a>
          </div>
        </div>
        <div className="group">
          <div
            className={`panel ${s.band}`}
            data-icon-base="/assets/icons/"
          >
            <div className="dg" data-diagram={diagramSpec} />
          </div>
        </div>
      </div>
    </section>
  );
}
