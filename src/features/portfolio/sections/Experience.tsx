import { useTranslations } from "next-intl";
import { portfolioData } from "@/features/portfolio/data";

export default function Experience() {
  const t = useTranslations();

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)] backdrop-blur-xl">
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            {t('experience.title')}
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
            {t('experience.description')}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {portfolioData.experiences.map((experience) => (
            <div key={experience.role} className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    {experience.company} | {experience.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-[var(--muted)] leading-relaxed">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {portfolioData.stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6">
              <p className="text-3xl font-semibold text-[var(--accent-warm)]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
