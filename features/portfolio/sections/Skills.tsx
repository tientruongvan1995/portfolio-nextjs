export default function Skills() {
  const skills = [
    {
      title: "React Native",
      description: "8+ years of production experience. Class & hooks patterns, Redux (Thunk/Saga/Toolkit), MobX, React Query for server state. Navigation, real-time sync, Firebase/SocketIO, payment SDKs."
    },
    {
      title: "Native Integration",
      description: "Swift & Kotlin expertise for BLE modules, native performance paths, shared architecture, and platform-specific optimizations."
    },
    {
      title: "iOS Development",
      description: "Objective-C & Swift with UIKit and SwiftUI. App signing, SDK integration, and production releases for polished platform experiences."
    },
    {
      title: "Android Development",
      description: "Java & Kotlin delivery with custom modules, Keystore management, Play Store releases, and performance-tuned mobile UI."
    },
    {
      title: "State Management at Scale",
      description: "Redux Toolkit, Saga, Thunk, MobX, and React Query for complex flows. Designed feature ownership across 3+ teams with maintainable data layers."
    },
    {
      title: "Performance & Optimization",
      description: "Startup reduction, Hermes tuning, code splitting, memory management, and high-throughput systems for reliable mobile launches."
    },
    {
      title: "Additional Skills",
      description: "Flutter, TypeScript, REST APIs, Git workflows, CI/CD automation, and Agile team leadership for production delivery."
    }
  ];

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)] backdrop-blur-xl">
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            Skills & Expertise
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
            A modern mobile engineering toolkit focused on cross-platform architecture, native integration, and reliable production delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, idx) => (
            <div key={idx} className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
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
