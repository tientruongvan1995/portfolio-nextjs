export default function Experience() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)] backdrop-blur-xl">
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            Work Experience
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
            Trusted to lead mobile architecture, native integrations, and high-performance delivery across multi-team product initiatives.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  Frontend Mobile Developer
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Apricus Ventures | Apr 2023 - Present
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-[var(--muted)] leading-relaxed">
              <li>• Led React Native & React development across multiple product initiatives.</li>
              <li>• Architected scalable state management for complex data flows.</li>
              <li>• Implemented native iOS and Android modules with Objective-C, Swift, Java, and Kotlin.</li>
              <li>• Mentored junior developers on cross-platform architecture patterns.</li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  Mobile Developer
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Tenomad Ltd | Jan 2018 - Mar 2023
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-[var(--muted)] leading-relaxed">
              <li>• Shipped 8+ production apps on iOS and Android with polished native experiences.</li>
              <li>• Architected multi-team React Native systems handling millions of transactions.</li>
              <li>• Built BLE integration modules and payment systems for real-time mobile products.</li>
              <li>• Reduced app startup time by 35% through Hermes optimization and code splitting.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { value: '60%', label: 'Order time reduction (Dian Xiao Er)' },
            { value: '10k+', label: 'Orders/day at peak' },
            { value: '8+', label: 'Apps shipped to stores' },
            { value: '3+', label: 'Teams architected for' },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6">
              <p className="text-3xl font-semibold text-[var(--accent-warm)]">
                {value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
