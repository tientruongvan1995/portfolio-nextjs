import Script from 'next/script';

import { Nav } from './components/Nav';
import { Approach } from './sections/Approach';
import { Closing } from './sections/Closing';
import { LandingHero } from './sections/LandingHero';
import { Services } from './sections/Services';
import { Work } from './sections/Work';

import './PortfolioPage.module.css';

import './kit/system.css';
import './kit/cards.css';
import './kit/motion.css';
import './kit/layout.css';
import './kit/diagram.css';
import './kit/icon.css';
import './kit/tokens.css';

export default function PortfolioPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400..700&display=swap"
      />
      <link rel="stylesheet" href="/assets/ui/base.css" />
      <link rel="stylesheet" href="/assets/ui/code/fragment.css" />
      <Nav />
      <main id="main">
        <LandingHero />
        <Services />
        <Approach />
        <Work />
      </main>
      <Closing />
      <Script src="/assets/kit-boot.js" type="module" strategy="afterInteractive" />
    </>
  );
}
