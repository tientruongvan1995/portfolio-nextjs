export default function Skills() {
  const skills = [
    {
      title: "React Native",
      description: "8+ years of production experience. Class & hooks patterns, Redux (Thunk/Saga/Toolkit), MobX, React Query for server state. Navigation (React Navigation, React Native Navigation), real-time sync, Firebase/SocketIO, payment SDKs (Stripe, Momo, ZaloPay)."
    },
    {
      title: "Native Integration",
      description: "Swift & Kotlin expertise. BLE module development, platform-specific optimizations, JSI for performance-critical paths. iOS certificates, Android KeyStore, native bridging patterns. Shipped 10+ apps to App Store and Google Play."
    },
    {
      title: "iOS Development",
      description: "ObjectiveC & Swift. UIKit and SwiftUI. Firebase & Facebook SDKs, app signing, production releases. Deep platform knowledge for seamless JavaScript-native integration."
    },
    {
      title: "Android Development",
      description: "Java & Kotlin. Custom module development, keystore management, play store releases. Experience with platform-specific optimizations and native performance tuning."
    },
    {
      title: "State Management at Scale",
      description: "Redux Thunk, Redux Saga, Redux Toolkit with persistence. MobX State Tree. Complex data flows handling millions of transactions. Server state with React Query. Designed for 3+ independent teams."
    },
    {
      title: "Performance & Optimization",
      description: "Bundle optimization, startup time reduction (35% improvements achieved), Hermes engine tuning, code splitting, rendering optimization, memory management. Real-time systems for high throughput."
    },
    {
      title: "Additional Skills",
      description: "Flutter (Dart, multi-environment, state management), TypeScript, REST APIs, Git workflows (GitFlow), CI/CD (Fastlane, CodePush, AppCenter), Agile/Scrum, work assignment & mentoring."
    }
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-[var(--foreground)]">
        Skills & Expertise
      </h2>

      <div className="grid gap-8">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
              {skill.title}
            </h3>
            <p className="text-[var(--muted)]">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
