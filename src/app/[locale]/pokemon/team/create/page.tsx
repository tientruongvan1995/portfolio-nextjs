import { fetchPokemonAPI } from '@/features/game/api/pokemon';
import CreateTeamPage from '@/features/game/CreateTeam';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create a team · Pokémon TeamFight',
  description: 'Search the Pokédex, pick six Pokémon and save your team.',
};

export default async function CreateTeam() {
  const firstPokemonDetails = await fetchPokemonAPI('ditto');

  if (!firstPokemonDetails) {
    throw new Error('Failed to fetch first pokemon details');
  }

  return <CreateTeamPage firstPokemonDetails={firstPokemonDetails} />;
}
