import {
  NEXT_PUBLIC_POKEAPI_POKEMONS_ENDPOINT,
  POKEMONS_PIXEL_IMG_ENDPOINT,
  REST_POKEAPI_TYPES_ENDPOINT,
} from '@/constants';
import { v4 as uuid } from 'uuid';
import { Pokemon, PokemonType } from '../model/pokemon';

export const POKEMON_COUNT = 1154;

const fetchPokemonTypesAPI = async () => {
  const res = await fetch(REST_POKEAPI_TYPES_ENDPOINT);
  const json = await res.json();
  const pokemonTypes = json.results as PokemonType[] | undefined;
  return pokemonTypes;
};

const fetchPokemonAPI = async (index: number | string): Promise<Pokemon | undefined> => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_POKEAPI_POKEMONS_ENDPOINT}/${index}`);
    const json = await res.json();

    if (json.status === 404) throw new Error('Pokemon not found');

    const pokemon: Pokemon = {
      uuid: uuid(),
      pokedexId: json.id,
      name: json.name,
      spritePixelUrl: `${POKEMONS_PIXEL_IMG_ENDPOINT}/${json.id}.png`,
      spriteNormalUrl: `${POKEMONS_PIXEL_IMG_ENDPOINT}/other/official-artwork/${json.id}.png`,
      baseExperience: json.base_experience || 0,
      abilities: json.abilities,
      types: json.types,
    };

    return pokemon;
  } catch {
    return undefined;
  }
};

export { fetchPokemonAPI, fetchPokemonTypesAPI };
