'use client';

import NoDesktopLayout from '@/features/game/components/layout/NoDesktopLayout';
import BaseButton from '@/features/game/components/primitive/BaseButton';
import { usePlayerContext } from '@/features/game/context/player';
import { useMediaQuery } from '@/utils/use-hooks';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { fetchPokemonAPI, POKEMON_COUNT } from './api/pokemon';
import PokeballLoadingSpinner from './components/PokeballLoadingSpinner';
import PokemonTeam from './components/pokemon/PokemonTeam';
import SummaryBox from './components/SummaryBox/SummaryBox';

import styles from './TeamFightPage.module.css';
import { Player } from './model/player';
import { Pokemon } from './model/pokemon';

type PrepareBattleProps = {
  playerInfo: Player;
  handleBattle: () => Promise<void>;
};

type TeamBattleProps = {
  allyTeam: Player;
  enemyTeam: Pokemon[];
};

// ===============

const PrepareBattle = ({ playerInfo, handleBattle }: PrepareBattleProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBattleWithLoading = async () => {
    setIsLoading(true);
    await handleBattle();
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <main className={styles.main}>
        <PokeballLoadingSpinner />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <SummaryBox score={playerInfo.score} isYourTeam={true} />
      <div>
        <Image
          src="/pokemon/fight/pikachu-serious.png"
          alt=""
          width="289"
          height="150"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <BaseButton buttonType="tertiary" onClick={handleBattleWithLoading}>
          <h2>
            THE BATTLE
            <br />
            BEGINS!
          </h2>
        </BaseButton>
      </div>
      <SummaryBox score={playerInfo.score} isYourTeam={false} />
    </main>
  );
};

const TeamBattle = ({ allyTeam, enemyTeam }: TeamBattleProps) => {
  const enemyTeamName = `${enemyTeam[1].name} ${enemyTeam[4].name}`;

  const sumBaseExpAlly = allyTeam.team.reduce((acc, pokemon) => pokemon.baseExperience + acc, 0);
  const sumBaseExpEnemy = enemyTeam.reduce((acc, pokemon) => pokemon.baseExperience + acc, 0);

  return (
    <main className={styles.main}>
      <PokemonTeam
        team={allyTeam.team}
        teamName={allyTeam.teamName}
        isYourTeam={true}
        isWin={sumBaseExpAlly > sumBaseExpEnemy}
      />
      <Image src="/pokemon/fight/versus.svg" alt="" height="192" width="222" />
      <PokemonTeam
        team={enemyTeam}
        teamName={enemyTeamName}
        isYourTeam={false}
        isWin={sumBaseExpEnemy > sumBaseExpAlly}
      />
    </main>
  );
};

const getRandomPokemonInEnemyTeam = async (): Promise<Pokemon> => {
  const randomIndex = Math.floor(Math.random() * POKEMON_COUNT) + 1;
  const pokemon = await fetchPokemonAPI(randomIndex);

  // fallback
  if (!pokemon || Object.keys(pokemon).length == 0) {
    return await getRandomPokemonInEnemyTeam();
  }

  return pokemon;
};

const generateEnemyTeam = async (): Promise<Pokemon[]> => {
  let pokemonTeam: Pokemon[] = [];
  for (let i = 0; i < 6; i++) {
    const pokemon = await getRandomPokemonInEnemyTeam();
    pokemonTeam = [...pokemonTeam, pokemon];
  }
  return pokemonTeam;
};

const TeamFightPage = () => {
  const router = useRouter();
  const [playerInfo, setPlayerInfo] = usePlayerContext();
  const [isDesktop] = useMediaQuery();
  const [enemyTeam, setEnemyTeam] = useState<Pokemon[]>([]);
  const [isFighting, setIsFighting] = useState(false);

  const setResult = useCallback(
    (fightResult: 'won' | 'loss' | 'tied') => {
      setPlayerInfo({
        ...playerInfo,
        score: { ...playerInfo.score, [fightResult]: playerInfo.score[fightResult] + 1 },
      });
    },
    [playerInfo, setPlayerInfo],
  );

  const handleBattle = async () => {
    const pokemonTeam = await generateEnemyTeam();

    const sumBaseExpAlly = playerInfo.team.reduce(
      (acc, pokemon) => pokemon.baseExperience + acc,
      0,
    );
    const sumBaseExpEnemy = pokemonTeam.reduce((acc, pokemon) => pokemon.baseExperience + acc, 0);

    if (sumBaseExpAlly > sumBaseExpEnemy) {
      setResult('won');
    } else if (sumBaseExpAlly < sumBaseExpEnemy) {
      setResult('loss');
    } else {
      setResult('tied');
    }

    setEnemyTeam(pokemonTeam);
    setIsFighting(true);
  };

  useEffect(() => {
    if (!playerInfo.teamName || playerInfo.team.length < 6) {
      router.replace('/home');
      return;
    }
  }, [playerInfo.team, playerInfo.teamName, router]);

  return (
    <>
      <Head>
        <title>Team Fight - Pokémon TeamFight</title>
        <meta name="description" content="Fight battles with your Pokémon team!" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isDesktop ? (
        <div className={styles.background}>
          <div className={styles.container}>
            <header className={styles.header}>
              <div style={{ position: 'absolute', display: 'flex', gap: 20 }}>
                {!isFighting ? (
                  <Link href="/pokemon">
                    <Image src="/pokemon/icons/go-back.svg" alt="" width="128" height="42" />
                  </Link>
                ) : (
                  <>
                    <button className={styles.backButtonState} onClick={() => setIsFighting(false)}>
                      <Image src="/pokemon/icons/go-back.svg" alt="" width="128" height="42" />
                    </button>
                    <Link href="/pokemon">
                      <Image src="/pokemon/icons/go-home.svg" alt="" width="42" height="42" />
                    </Link>
                  </>
                )}
              </div>
              <h1>
                PREPARE YOU<span className={styles.whiteColor}>R POKÉMONS</span>
              </h1>
            </header>
            {!isFighting ? (
              <PrepareBattle playerInfo={playerInfo} handleBattle={handleBattle} />
            ) : (
              <TeamBattle allyTeam={playerInfo} enemyTeam={enemyTeam} />
            )}
          </div>
        </div>
      ) : (
        <NoDesktopLayout />
      )}
    </>
  );
};

export default TeamFightPage;
