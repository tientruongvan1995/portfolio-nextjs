import { PlayerProvider } from '@/features/game/context/player';

export default async function Layout({ children }: LayoutProps<'/[locale]'>) {
  return <PlayerProvider>{children}</PlayerProvider>;
}
