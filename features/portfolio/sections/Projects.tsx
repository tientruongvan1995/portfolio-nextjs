import CaseStudy from "../components/CaseStudy";

export default function Projects() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-[var(--foreground)]">
          Case Studies
        </h2>

        <div className="space-y-8">
          <CaseStudy
            title="Dian Xiao Er (DXE)"
            subtitle="Multi-Outlet Restaurant Order Platform"
            problem="19-outlet restaurant chain needed unified ordering system. Manual order processing caused 5-7 minute wait times during peak hours, with no visibility across locations. Orders handled via phone/paper tickets."
            solution="Built scalable React Native + React platform with real-time order synchronization, QR code table/preordering, member loyalty system, and 3rd-party payments (DBS, Stripe). Architected for independent feature teams with modular state management (Redux)."
            impact="Reduced order processing time by 60% (5-7min → 2-3min) • Processes 10k+ orders/day across 19 outlets • 99.9% uptime maintained during peak hours • Mobile team lead role"
            tech="React Native, React, Redux, Real-time Sync, QR Integration, Payment SDKs, Scalable Architecture"
          />

          <CaseStudy
            title="Smart Door IoT System"
            subtitle="Building & Apartment Security via BLE"
            problem="Traditional apartment access required physical keys and manual tenant management. No remote access for owners or tenant onboarding friction. Security concerns with lost/copied keys."
            solution="Designed and implemented complete BLE integration module in React Native. Owners grant time-limited digital keys via app; residents unlock doors using BLE without contact. Supports NFC cards, passcodes, and peripheral setup. Platform: iOS (Swift/UIKit) + Android (Kotlin)."
            impact="Eliminated key exchange friction • Enabled 24/7 contactless access • 100% digital audit trail • Shipped to production with 1000+ active users • Remote access gives owners complete control"
            tech="React Native, BLE (Bluetooth Low Energy), Swift, Kotlin, Cryptography, Native Modules, IoT"
          />

          <CaseStudy
            title="Tago (Tarot + Counseling Platform)"
            subtitle="Video Call + Chat + In-App Payments"
            problem="Spiritual counseling marketplace needed video consultation, real-time chat, secure payments, and role-based access (Consultants vs Customers). Complex payment flows and compliance requirements."
            solution="Built React Native app with Twilio video integration, WebRTC for background calls (CallKit/ConnectionService), Firebase Realtime Database for chat, and multi-payment system (Bank Card + IAP). Implemented role-based UI, social login (Google/Facebook/Apple), and Firebase Analytics."
            impact="Shipped to App Store & Google Play Store • 5000+ downloads • Supports real-time video consultations • Handled £100k+ in annual transactions via IAP and bank payments • Project lead for cross-platform delivery"
            tech="React Native, WebRTC, Twilio, Firebase (Messaging, Database, Analytics), Multi-payment, Social Auth, CallKit"
          />

          <CaseStudy
            title="Confidential IoT Security System"
            subtitle="Building Door System with NFC & Passcode"
            problem="Multi-building complex needed scalable door access management. 10-person team coordination, peripheral key setup, and remote activation/deactivation for owners."
            solution="Architected React Native system with peripheral key configuration, passcode management, and NFC card support. Implemented remote control for owners to activate/deactivate access independently. Cross-team coordination with independent feature ownership."
            impact="Successfully shipped to multiple buildings • Supported distributed team of 10 developers • Enabled seamless tenant onboarding • Maintained zero downtime during major updates"
            tech="React Native, NFC Integration, Peripheral Management, BLE, Multi-team Architecture"
          />

          <CaseStudy
            title="Homing"
            subtitle="Real Estate Trading Platform"
            problem="Real estate listing and transaction management needed mobile-first experience with complex data synchronization and user workflows."
            solution="Developed Flutter mobile application using Dart, multi-environment setup, localization (intl), state management (Provider/Riverpod), and Dio for API communication. Implemented MVVM pattern for maintainability."
            impact="Production Flutter app deployed • Demonstrated cross-framework expertise • Delivered quality product with lean 2-person team"
            tech="Flutter, Dart, Provider, Riverpod, Dio, Multi-environment, Localization, MVVM"
          />
        </div>
      </div>
    </section>
  );
}
