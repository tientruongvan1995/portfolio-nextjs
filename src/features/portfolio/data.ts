export interface CaseStudy {
  title: string;
  subtitle?: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface StatCard {
  value: string;
  label: string;
}

export interface SkillCard {
  title: string;
  description: string;
}

export const portfolioData = {
  skills: [
    {
      title: 'React Native',
      description:
        '8+ years of production experience. Class & hooks patterns, Redux (Thunk/Saga/Toolkit), MobX, React Query for server state. Navigation, real-time sync, Firebase/SocketIO, payment SDKs.',
    },
    {
      title: 'Native Integration',
      description:
        'Swift & Kotlin expertise for BLE modules, native performance paths, shared architecture, and platform-specific optimizations.',
    },
    {
      title: 'iOS Development',
      description:
        'Objective-C & Swift with UIKit and SwiftUI. App signing, SDK integration, and production releases for polished platform experiences.',
    },
    {
      title: 'Android Development',
      description:
        'Java & Kotlin delivery with custom modules, Keystore management, Play Store releases, and performance-tuned mobile UI.',
    },
    {
      title: 'State Management at Scale',
      description:
        'Redux Toolkit, Saga, Thunk, MobX, and React Query for complex flows. Designed feature ownership across 3+ teams with maintainable data layers.',
    },
    {
      title: 'Performance & Optimization',
      description:
        'Startup reduction, Hermes tuning, code splitting, memory management, and high-throughput systems for reliable mobile launches.',
    },
    {
      title: 'Additional Skills',
      description:
        'Flutter, TypeScript, REST APIs, Git workflows, CI/CD automation, and Agile team leadership for production delivery.',
    },
  ] as SkillCard[],
  caseStudies: [
    {
      title: 'Dian Xiao Er (DXE)',
      subtitle: 'Multi-Outlet Restaurant Order Platform',
      problem:
        '19-outlet restaurant chain needed unified ordering system. Manual order processing caused 5-7 minute wait times during peak hours, with no visibility across locations. Orders handled via phone/paper tickets.',
      solution:
        'Built scalable React Native + React platform with real-time order synchronization, QR code table/preordering, member loyalty system, and 3rd-party payments (DBS, Stripe). Architected for independent feature teams with modular state management (Redux).',
      impact:
        'Reduced order processing time by 60% (5-7min → 2-3min) • Processes 10k+ orders/day across 19 outlets • 99.9% uptime maintained during peak hours • Mobile team lead role',
      tech:
        'React Native, React, Redux, Real-time Sync, QR Integration, Payment SDKs, Scalable Architecture',
    },
    {
      title: 'Smart Door IoT System',
      subtitle: 'Building & Apartment Security via BLE',
      problem:
        'Traditional apartment access required physical keys and manual tenant management. No remote access for owners or tenant onboarding friction. Security concerns with lost/copied keys.',
      solution:
        'Designed and implemented complete BLE integration module in React Native. Owners grant time-limited digital keys via app; residents unlock doors using BLE without contact. Supports NFC cards, passcodes, and peripheral setup. Platform: iOS (Swift/UIKit) + Android (Kotlin).',
      impact:
        'Eliminated key exchange friction • Enabled 24/7 contactless access • 100% digital audit trail • Shipped to production with 1000+ active users • Remote access gives owners complete control',
      tech: 'React Native, BLE (Bluetooth Low Energy), Swift, Kotlin, Cryptography, Native Modules, IoT',
    },
    {
      title: 'Tago (Tarot + Counseling Platform)',
      subtitle: 'Video Call + Chat + In-App Payments',
      problem:
        'Spiritual counseling marketplace needed video consultation, real-time chat, secure payments, and role-based access (Consultants vs Customers). Complex payment flows and compliance requirements.',
      solution:
        'Built React Native app with Twilio video integration, WebRTC for background calls (CallKit/ConnectionService), Firebase Realtime Database for chat, and multi-payment system (Bank Card + IAP). Implemented role-based UI, social login (Google/Facebook/Apple), and Firebase Analytics.',
      impact:
        'Shipped to App Store & Google Play Store • 5000+ downloads • Supports real-time video consultations • Handled £100k+ in annual transactions via IAP and bank payments • Project lead for cross-platform delivery',
      tech:
        'React Native, WebRTC, Twilio, Firebase (Messaging, Database, Analytics), Multi-payment, Social Auth, CallKit',
    },
    {
      title: 'Confidential IoT Security System',
      subtitle: 'Building Door System with NFC & Passcode',
      problem:
        'Multi-building complex needed scalable door access management. 10-person team coordination, peripheral key setup, and remote activation/deactivation for owners.',
      solution:
        'Architected React Native system with peripheral key configuration, passcode management, and NFC card support. Implemented remote control for owners to activate/deactivate access independently. Cross-team coordination with independent feature ownership.',
      impact:
        'Successfully shipped to multiple buildings • Supported distributed team of 10 developers • Enabled seamless tenant onboarding • Maintained zero downtime during major updates',
      tech: 'React Native, NFC Integration, Peripheral Management, BLE, Multi-team Architecture',
    },
    {
      title: 'Homing',
      subtitle: 'Real Estate Trading Platform',
      problem:
        'Real estate listing and transaction management needed mobile-first experience with complex data synchronization and user workflows.',
      solution:
        'Developed Flutter mobile application using Dart, multi-environment setup, localization (intl), state management (Provider/Riverpod), and Dio for API communication. Implemented MVVM pattern for maintainability.',
      impact:
        'Production Flutter app deployed • Demonstrated cross-framework expertise • Delivered quality product with lean 2-person team',
      tech: 'Flutter, Dart, Provider, Riverpod, Dio, Multi-environment, Localization, MVVM',
    },
  ] as CaseStudy[],
  experiences: [
    {
      role: 'Frontend Mobile Developer',
      company: 'Apricus Ventures',
      period: 'Apr 2023 - Present',
      highlights: [
        'Led React Native & React development across multiple product initiatives.',
        'Architected scalable state management for complex data flows.',
        'Implemented native iOS and Android modules with Objective-C, Swift, Java, and Kotlin.',
        'Mentored junior developers on cross-platform architecture patterns.',
      ],
    },
    {
      role: 'Mobile Developer',
      company: 'Tenomad Ltd',
      period: 'Jan 2018 - Mar 2023',
      highlights: [
        'Shipped 8+ production apps on iOS and Android with polished native experiences.',
        'Architected multi-team React Native systems handling millions of transactions.',
        'Built BLE integration modules and payment systems for real-time mobile products.',
        'Reduced app startup time by 35% through Hermes optimization and code splitting.',
      ],
    },
  ] as ExperienceItem[],
  stats: [
    { value: '60%', label: 'Order time reduction (Dian Xiao Er)' },
    { value: '10k+', label: 'Orders/day at peak' },
    { value: '8+', label: 'Apps shipped to stores' },
    { value: '3+', label: 'Teams architected for' },
  ] as StatCard[],
};
