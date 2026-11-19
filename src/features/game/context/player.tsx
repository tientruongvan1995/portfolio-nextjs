'use client';

import { getLocalStorage, setLocalStorage } from '@/utils/localstorage';
import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from 'react';
import type { ReactNode } from 'react';
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

/**
 * A tiny localStorage-backed store.
 *
 * Reading storage in a render initialiser makes the server HTML (empty team)
 * disagree with the first client render (saved team). useSyncExternalStore
 * lets React hydrate with the server snapshot and then swap in the stored
 * value in the same commit — no hydration mismatch, no empty flash of markup.
 */
let snapshot: Player | null = null;
const listeners = new Set<() => void>();

const normalize = (value: Partial<Player>): Player => ({
  teamName: value.teamName ?? '',
  team: Array.isArray(value.team) ? value.team.slice(0, 6) : [],
  score: {
    won: Number(value.score?.won) || 0,
    tied: Number(value.score?.tied) || 0,
    loss: Number(value.score?.loss) || 0,
  },
});

const readSnapshot = () => {
  if (!snapshot) {
    snapshot = normalize(getLocalStorage<Partial<Player>>(PLAYER_INFO_KEY, initialState));
  }
  return snapshot;
};

const getServerSnapshot = () => initialState;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const writePlayer = (player: Player) => {
  snapshot = player;
  setLocalStorage(PLAYER_INFO_KEY, player);
  listeners.forEach((listener) => listener());
};

const PlayerContext = createContext<[Player, (info: Player) => void]>([initialState, () => {}]);

const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const playerInfo = useSyncExternalStore(subscribe, readSnapshot, getServerSnapshot);
  const setPlayerInfo = useCallback((info: Player) => writePlayer(normalize(info)), []);

  const value = useMemo(
    () => [playerInfo, setPlayerInfo] as [Player, (info: Player) => void],
    [playerInfo, setPlayerInfo],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };
