interface CaseStudyProps {
  title: string;
  subtitle?: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string;
}

export default function CaseStudy({
  title,
  subtitle,
  problem,
  solution,
  impact,
  tech
}: CaseStudyProps) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm text-[var(--muted)]">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <p className="mb-1 text-sm font-semibold text-[var(--foreground)]">
            Problem
          </p>
          <p className="text-[var(--muted)]">
            {problem}
          </p>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-[var(--foreground)]">
            Solution
          </p>
          <p className="text-[var(--muted)]">
            {solution}
          </p>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-[var(--foreground)]">
            Impact
          </p>
          <p className="font-semibold text-[var(--muted-strong)]">
            {impact}
          </p>
        </div>

        <div className="border-t border-[var(--border)] pt-3">
          <p className="text-xs text-[var(--muted)]">
            <span className="font-semibold">Tech:</span> {tech}
          </p>
        </div>
      </div>
    </div>
  );
}
