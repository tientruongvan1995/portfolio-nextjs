import '@/features/game/styles/game.css';
import { PlayerProvider } from '@/features/game/context/player';
import { Rethink_Sans } from 'next/font/google';

const rethink = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rethink',
  display: 'swap',
});

export default async function Layout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <div className={`${rethink.variable} game`}>
      <PlayerProvider>{children}</PlayerProvider>
    </div>
  );
}
