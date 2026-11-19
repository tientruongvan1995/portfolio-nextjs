import { getTranslations } from 'next-intl/server';

export async function Approach() {
  const t = await getTranslations('landing.approach');

  return (
    <section
      className="section statement"
      id="approach"
      data-moment="word-highlight"
      aria-label={t('aria')}
    >
      <div className="wrap">
        <p className="t-label muted">{t('label')}</p>
        <p className="mo-wh__text">
          {t.rich('statement', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </div>
    </section>
  );
}
