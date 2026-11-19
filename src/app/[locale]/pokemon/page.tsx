import type { Metadata } from 'next';
import { GamePage } from '@/features/game';

export const metadata: Metadata = {
  title: 'Pokémon TeamFight',
  description:
    'Build a team of six Pokémon and take the battle. A small fan-made team builder and fight simulator.',
};

export default function PokemonPage() {
  return <GamePage />;
}
