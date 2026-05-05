export default function Experience() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-[var(--foreground)]">
        Work Experience
      </h2>

      <div className="space-y-12">
        <div>
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Frontend Mobile Developer
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Apricus Ventures | Apr 2023 - Present
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>• Led React Native & React development across multiple product initiatives</li>
            <li>• Architected scalable state management (Redux, react-query, MobX) for complex data flows</li>
            <li>• Implemented native iOS (UIKit/ObjC) and Android (Java/Kotlin) modules</li>
            <li>• Mentored junior developers on cross-platform architecture patterns</li>
          </ul>
        </div>

        <div>
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Mobile Developer
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Tenomad Ltd | Jan 2018 - Mar 2023 (5 years)
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>• Shipped 8+ production apps on iOS (UIKit, Swift, SwiftUI) and Android (Java, Kotlin)</li>
            <li>• Architected multi-team React Native systems handling millions of transactions</li>
            <li>• Built BLE integration modules, payment systems (Stripe, ZaloPay, Momo, IAP)</li>
            <li>• Implemented real-time chat (Firebase, SocketIO, Twilio video), notifications, analytics</li>
            <li>• Reduced app startup time by 35% through Hermes optimization and code splitting</li>
            <li>• Led distribution via Fastlane, CodePush, TestFlight, and Play Store</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
            Impact Metrics
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">
                60%
              </p>
              <p className="text-sm text-[var(--muted)]">
                Order time reduction (Dian Xiao Er)
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">
                10k+
              </p>
              <p className="text-sm text-[var(--muted)]">
                Orders/day at peak
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">
                8+
              </p>
              <p className="text-sm text-[var(--muted)]">
                Apps shipped to stores
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">
                3+
              </p>
              <p className="text-sm text-[var(--muted)]">
                Teams architected for
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
