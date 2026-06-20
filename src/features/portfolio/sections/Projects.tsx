import { useTranslations } from "next-intl";
import CaseStudy from "../components/CaseStudy";
import { portfolioData } from "@/features/portfolio/data";

export default function Projects() {
  const t = useTranslations();

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)] backdrop-blur-xl">
        <div className="mb-12 flex flex-col gap-4">
          <span className="inline-flex rounded-full bg-[rgba(212,165,116,0.09)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent-warm)]">
            {t('projects.title')}
          </span>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            {t('projects.title')}
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
            {t('projects.description')}
          </p>
        </div>

        <div className="space-y-8">
          {portfolioData.caseStudies.map((caseStudy) => (
            <CaseStudy key={caseStudy.title} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
