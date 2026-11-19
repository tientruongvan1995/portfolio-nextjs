import TeamFightPage from '@/features/game/TeamFightPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team fight · Pokémon TeamFight',
  description: 'Six against six: the team with the higher total EXP takes the battle.',
};

export default function TeamFight() {
  return <TeamFightPage />;
}
