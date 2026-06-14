export default function Architecture() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)] backdrop-blur-xl">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full bg-[rgba(212,165,116,0.09)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent-warm)]">
            Architecture
          </span>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            Architecture & Approach
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
            I design mobile systems for long-term reliability and team-scalable delivery, balancing native performance with cross-platform consistency.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
            <h3 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              Modular, Scalable Design
            </h3>
            <p className="mb-4 text-[var(--muted)] leading-relaxed">
              I structure applications using feature-based modular architecture, enabling teams to work independently while maintaining consistency.
            </p>
            <ul className="space-y-3 text-[var(--muted)]">
              <li>• Clear separation: UI, business logic, and data layer</li>
              <li>• Feature ownership reduces cross-team dependencies</li>
              <li>• Reusable services and hooks across modules</li>
              <li>• Designed to scale for 3+ teams without bottlenecks</li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
            <h3 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              Performance First
            </h3>
            <p className="mb-4 text-[var(--muted)] leading-relaxed">
              Performance isn&apos;t an afterthought; it&apos;s baked into every decision, from bundle loading to rendering and runtime patterns.
            </p>
            <ul className="space-y-3 text-[var(--muted)]">
              <li>• Startup optimization with Hermes and code splitting</li>
              <li>• Render performance via memoization and virtualization</li>
              <li>• Memory efficiency with thoughtful subscription management</li>
              <li>• Real-time systems tuned for throughput and reliability</li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
            <h3 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              Native Integration Strategy
            </h3>
            <p className="mb-4 text-[var(--muted)] leading-relaxed">
              Seamless bridging between JavaScript and native layers. I know when to go native and when to stay in JS for maintainability.
            </p>
            <ul className="space-y-3 text-[var(--muted)]">
              <li>• Native module development in Swift and Kotlin</li>
              <li>• JSI and bridge strategy for performance-critical paths</li>
              <li>• Platform-specific optimizations with clean abstractions</li>
              <li>• Maintainable architecture that supports future growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
