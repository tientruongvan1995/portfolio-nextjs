import { fetchPokemonAPI } from '@/features/game/api/pokemon';
import CreateTeamPage from '@/features/game/CreateTeam';

export default async function CreateTeam() {
  const firstPokemonDetails = await fetchPokemonAPI('ditto');

  if (!firstPokemonDetails) {
    throw new Error('Failed to fetch first pokemon details');
  }

  return <CreateTeamPage firstPokemonDetails={firstPokemonDetails} />;
}
