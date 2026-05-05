export default function Architecture() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-[var(--foreground)]">
          Architecture & Approach
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              Modular, Scalable Design
            </h3>
            <p className="mb-3 text-[var(--muted)]">
              I structure applications using feature-based modular architecture, enabling teams to work independently while maintaining consistency. Each feature owns its domain logic, UI, and data layer.
            </p>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>• Clear separation: UI, Business Logic, Data Layer</li>
              <li>• Feature ownership reduces cross-team dependencies</li>
              <li>• Reusable services and hooks across modules</li>
              <li>• Scalable to 3+ teams without bottlenecks</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              Performance First
            </h3>
            <p className="mb-3 text-[var(--muted)]">
              Performance isn&apos;t an afterthought, it&apos;s baked into every architectural decision. From bundle optimization to rendering patterns.
            </p>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>• Startup time optimization (Hermes, code splitting)</li>
              <li>• Render performance (memoization, virtualization)</li>
              <li>• Memory efficiency (careful subscription management)</li>
              <li>• Real-time systems designed for throughput, not latency</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              Native Integration Strategy
            </h3>
            <p className="mb-3 text-[var(--muted)]">
              Seamless bridging between JavaScript and native layers. I know when to go native and when to stay in JS for maintainability.
            </p>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>• Native module development (Swift/Kotlin)</li>
              <li>• JS Bridge and JSI for performance-critical paths</li>
              <li>• Platform-specific optimizations</li>
              <li>• Maintainable abstraction layers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
