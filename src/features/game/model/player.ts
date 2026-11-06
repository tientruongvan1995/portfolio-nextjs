import { Pokemon } from './pokemon';

export type Player = {
  teamName: string;
  team: Pokemon[];
  score: {
    won: number;
    loss: number;
    tied: number;
  };
};
