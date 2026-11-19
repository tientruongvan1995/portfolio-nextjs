import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Pokemon } from '../model/pokemon';
import { Player } from '../model/player';

type Props = [playerInfo: Player, setPlayerInfo: (info: Player) => void];

type TeamDraft = Pick<Player, 'teamName' | 'team'>;

const MESSAGE_TIMEOUT = 1800;

export const usePokemonTeam = ([playerInfo, setPlayerInfo]: Props) => {
  // The saved team lives in the store (and localStorage). Until the player edits
  // something, the draft *is* the saved team, so a late hydration can never
  // freeze an empty roster in local state.
  const [draft, setDraft] = useState<TeamDraft | null>(null);
  const pokemonTeam: TeamDraft = draft ?? {
    teamName: playerInfo.teamName,
    team: playerInfo.team,
  };

  const [message, setMessage] = useState<{ success: boolean; description: string } | null>(null);

  const notify = (success: boolean, description: string) => {
    setMessage({ success, description });
    setTimeout(() => setMessage(null), MESSAGE_TIMEOUT);
  };

  const setPokemonTeamName = (teamName: string) => setDraft({ ...pokemonTeam, teamName });

  const setPokemonInTeam = (selectedPokemon: Pokemon) => {
    if (pokemonTeam.team.length >= 6) {
      notify(false, 'Your team already has six.');
      return;
    }

    const pokemon = { ...selectedPokemon, uuid: uuid() };
    setDraft({ ...pokemonTeam, team: [...pokemonTeam.team, pokemon] });
    notify(true, 'Pokémon added.');
  };

  const removePokemonInTeam = (selectedPokemon: Pokemon) => {
    if (pokemonTeam.team.length <= 0) {
      notify(false, 'Your team is empty.');
      return;
    }

    setDraft({
      ...pokemonTeam,
      team: pokemonTeam.team.filter((pokemon) => pokemon.uuid != selectedPokemon.uuid),
    });
    notify(true, 'Pokémon removed.');
  };

  const resetTeam = () => {
    setDraft({ teamName: '', team: [] });
    notify(true, 'Team cleared.');
  };

  const saveTeam = () => {
    if (!pokemonTeam.teamName) {
      notify(false, 'Give your team a name first.');
      return;
    }

    if (pokemonTeam.team.length != 6) {
      notify(false, 'Add six Pokémon before saving.');
      return;
    }

    setPlayerInfo({ ...playerInfo, ...pokemonTeam });
    notify(true, 'Team saved.');
  };

  return [
    pokemonTeam,
    message,
    setPokemonTeamName,
    setPokemonInTeam,
    removePokemonInTeam,
    resetTeam,
    saveTeam,
  ] as const;
};
