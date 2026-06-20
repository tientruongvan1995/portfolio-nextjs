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
  tech,
}: CaseStudyProps) {
  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.45)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-sm text-[var(--muted)]">
              {subtitle}
            </p>
          )}
        </div>
        <span className="rounded-full border border-[var(--border)] bg-[rgba(26,77,62,0.16)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
          Case Study
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Problem
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            {problem}
          </p>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Solution
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            {solution}
          </p>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Impact
          </p>
          <p className="text-[var(--muted-strong)] leading-relaxed font-medium">
            {impact}
          </p>
        </div>

        <div className="border-t border-[var(--border)] pt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            <span className="font-semibold">Tech:</span> {tech}
          </p>
        </div>
      </div>
    </div>
  );
}
