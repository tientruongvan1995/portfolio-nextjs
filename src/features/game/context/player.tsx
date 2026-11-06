'use client';

import { getLocalStorage, setLocalStorage } from '@/utils/localstorage';
import { createContext, useContext, useEffect, useState } from 'react';
import { Player } from '../model/player';

const PLAYER_INFO_KEY = 'playerInfo';

const initialState: Player = {
  teamName: '',
  team: [],
  score: {
    won: 0,
    tied: 0,
    loss: 0,
  },
};

const PlayerContext = createContext([initialState, () => {}] as [
  Player,
  React.Dispatch<React.SetStateAction<Player>>,
]);

const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [playerInfo, setPlayerInfo] = useState(() =>
    getLocalStorage(PLAYER_INFO_KEY, initialState),
  );

  useEffect(() => {
    setLocalStorage(PLAYER_INFO_KEY, playerInfo);
  }, [playerInfo]);

  return (
    <PlayerContext.Provider value={[playerInfo, setPlayerInfo]}>{children}</PlayerContext.Provider>
  );
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };
