import { useTranslations } from 'next-intl';
import { portfolioData } from '@/features/portfolio/data';

export default function Skills() {
  const t = useTranslations();

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)] backdrop-blur-xl">
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            {t('skills.title')}
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
            {t('skills.description')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.skills.map((skill) => (
            <div key={skill.title} className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-warm)]">
                {skill.title}
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
