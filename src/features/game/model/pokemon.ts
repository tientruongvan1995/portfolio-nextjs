export type Pokemon = {
  uuid: string;
  pokedexId: number;
  name: string;
  spritePixelUrl: string;
  spriteNormalUrl: string;
  baseExperience: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
};

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
