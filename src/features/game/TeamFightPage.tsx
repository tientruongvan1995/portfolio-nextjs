'use client';

import CopyrightFooter from '@/features/game/components/layout/CopyrightFooter';
import GameBar from '@/features/game/components/layout/GameBar/GameBar';
import BaseButton from '@/features/game/components/primitive/BaseButton';
import { usePlayerContext } from '@/features/game/context/player';
import { useState } from 'react';
import { fetchPokemonAPI, POKEMON_COUNT } from './api/pokemon';
import PokemonTeam from './components/pokemon/PokemonTeam';
import SummaryBox from './components/SummaryBox/SummaryBox';
import { Pokemon } from './model/pokemon';

import styles from './TeamFightPage.module.css';

type FightResult = 'won' | 'loss' | 'tied';

const TEAM_SIZE = 6;

const sumExperience = (team: Pokemon[]) =>
  team.reduce((total, pokemon) => total + pokemon.baseExperience, 0);

const getRandomPokemon = async (attempt = 0): Promise<Pokemon> => {
  const randomIndex = Math.floor(Math.random() * POKEMON_COUNT) + 1;
  const pokemon = await fetchPokemonAPI(randomIndex);

  if (pokemon && Object.keys(pokemon).length > 0) {
    return pokemon;
  }

  if (attempt < 2) {
    return getRandomPokemon(attempt + 1);
  }

  throw new Error('Could not summon an opponent');
};

const generateEnemyTeam = async (): Promise<Pokemon[]> => {
  const team: Pokemon[] = [];

  for (let index = 0; index < TEAM_SIZE; index += 1) {
    team.push(await getRandomPokemon());
  }

  return team;
};

const getOutcome = (allyTotal: number, enemyTotal: number): FightResult => {
  if (allyTotal > enemyTotal) return 'won';
  if (allyTotal < enemyTotal) return 'loss';
  return 'tied';
};

const HEADLINES: Record<FightResult, string> = {
  won: 'You won.',
  loss: 'You lost.',
  tied: 'A draw.',
};

const TeamFightPage = () => {
  const [playerInfo, setPlayerInfo] = usePlayerContext();
  const [enemyTeam, setEnemyTeam] = useState<Pokemon[]>([]);
  const [isFighting, setIsFighting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const teamIsReady = Boolean(playerInfo.teamName) && playerInfo.team.length === TEAM_SIZE;

  const handleBattle = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const opponents = await generateEnemyTeam();
      const outcome = getOutcome(sumExperience(playerInfo.team), sumExperience(opponents));

      setPlayerInfo({
        ...playerInfo,
        score: { ...playerInfo.score, [outcome]: playerInfo.score[outcome] + 1 },
      });
      setEnemyTeam(opponents);
      setIsFighting(true);
    } catch {
      setErrorMessage('The opponent could not be reached. Check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!teamIsReady) {
    const hint =
      playerInfo.team.length < TEAM_SIZE
        ? `You have ${playerInfo.team.length} of ${TEAM_SIZE} Pokémon chosen.`
        : 'Your team has no name yet.';

    return (
      <>
        <GameBar back />
        <main className="g-main">
          <div className="g-wrap">
            <section className={`g-card ${styles.empty}`}>
              <p className="g-eyebrow">Team fight</p>
              <h1 className="g-title g-title--sm">Your team needs six.</h1>
              <p className="g-lead">
                A battle takes a named team of six Pokémon. {hint}
              </p>
              <BaseButton role="link" href="/pokemon/team/create">
                Build your team
              </BaseButton>
            </section>
          </div>
        </main>
        <CopyrightFooter />
      </>
    );
  }

  if (isFighting) {
    const allyTotal = sumExperience(playerInfo.team);
    const enemyTotal = sumExperience(enemyTeam);
    const outcome = getOutcome(allyTotal, enemyTotal);
    const enemyOutcome: FightResult =
      outcome === 'won' ? 'loss' : outcome === 'loss' ? 'won' : 'tied';

    return (
      <>
        <GameBar back />
        <main className="g-main">
          <div className="g-wrap">
            <header className={styles.resultHead}>
              <div className={styles.resultText}>
                <p className="g-eyebrow">Battle result</p>
                <div className={styles.resultRow}>
                  <h1 className="g-title g-title--sm">{HEADLINES[outcome]}</h1>
                  <p className={`${styles.margin} g-num`}>
                    <strong>{allyTotal}</strong> vs <strong>{enemyTotal}</strong> EXP
                  </p>
                </div>
              </div>
              <div className={styles.actions}>
                <BaseButton onClick={handleBattle} disabled={isLoading}>
                  {isLoading ? 'Summoning…' : 'Fight again'}
                </BaseButton>
                <BaseButton
                  buttonType="tertiary"
                  onClick={() => setIsFighting(false)}
                  disabled={isLoading}
                >
                  Back to prepare
                </BaseButton>
              </div>
            </header>

            {errorMessage && (
              <p className={styles.error} role="alert">
                {errorMessage}
              </p>
            )}

            <div className={styles.teams}>
              <PokemonTeam
                isYourTeam
                teamName={playerInfo.teamName}
                team={playerInfo.team}
                result={outcome}
              />
              <span className={`${styles.vs} ${styles.vsSmall}`}>VS</span>
              <PokemonTeam teamName="Challenger" team={enemyTeam} result={enemyOutcome} />
            </div>
          </div>
        </main>
        <CopyrightFooter />
      </>
    );
  }

  return (
    <>
      <GameBar back />
      <main className="g-main">
        <div className="g-wrap">
          <header className={styles.head}>
            <p className="g-eyebrow">Team fight</p>
            <h1 className="g-title g-title--sm">Prepare your Pokémon.</h1>
            <p className="g-lead">
              Six against six. The higher total EXP takes the battle — your record carries over.
            </p>
          </header>

          {errorMessage && (
            <p className={styles.error} role="alert">
              {errorMessage}
            </p>
          )}

          <div className={styles.board}>
            <PokemonTeam isYourTeam teamName={playerInfo.teamName} team={playerInfo.team} />

            <div className={styles.center}>
              <span className={styles.vs}>VS</span>
              <BaseButton onClick={handleBattle} disabled={isLoading}>
                {isLoading ? 'Summoning…' : 'The battle begins'}
              </BaseButton>
              <p>Highest total EXP wins.</p>
            </div>

            <SummaryBox score={playerInfo.score} />
          </div>
        </div>
      </main>
      <CopyrightFooter />
    </>
  );
};

export default TeamFightPage;
