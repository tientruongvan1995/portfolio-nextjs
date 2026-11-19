'use client';

import CopyrightFooter from '@/features/game/components/layout/CopyrightFooter';
import GameBar from '@/features/game/components/layout/GameBar/GameBar';
import BaseButton from '@/features/game/components/primitive/BaseButton';
import BaseInput from '@/features/game/components/primitive/BaseInput/BaseInput';
import { isValidObject } from '@/utils/object';
import { useRef, useState } from 'react';
import { fetchPokemonAPI, POKEMON_COUNT } from './api/pokemon';
import PokeballLoadingSpinner from './components/PokeballLoadingSpinner';
import PokemonDetails from './components/pokemon/PokemonDetails';
import PokemonTeamItem from './components/pokemon/PokemonTeamItem/PokemonTeamItem';
import { usePlayerContext } from './context/player';
import { usePokemonTeam } from './hooks/team';
import { Pokemon } from './model/pokemon';

import styles from './CreateTeam.module.css';

const TEAM_SIZE = 6;

const getRandomPokemonIndex = () => Math.floor(Math.random() * POKEMON_COUNT) + 1;

const CreateTeamPage = ({ firstPokemonDetails }: { firstPokemonDetails: Pokemon }) => {
  const [playerInfo, setPlayerInfo] = usePlayerContext();
  const [
    pokemonTeam,
    message,
    setPokemonTeamName,
    setPokemonInTeam,
    removePokemonInTeam,
    resetTeam,
    saveTeam,
  ] = usePokemonTeam([playerInfo, setPlayerInfo]);

  const [pokemonDetails, setPokemonDetails] = useState(firstPokemonDetails);
  const [pokemonNotFound, setPokemonNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchPokemonRef = useRef<HTMLInputElement | null>(null);
  const teamIsFull = pokemonTeam.team.length >= TEAM_SIZE;

  const setRandomPokemonInTeam = async (tryTime = 3) => {
    const randomIndex = getRandomPokemonIndex();
    const pokemon = await fetchPokemonAPI(randomIndex);

    // fallback
    if (!isValidObject(pokemon)) {
      if (tryTime > 0) await setRandomPokemonInTeam(tryTime - 1);
      return;
    }

    setPokemonInTeam(pokemon);
  };

  const getPokemonFromSearch = async () => {
    const query = searchPokemonRef?.current?.value.trim();

    if (!query) {
      return;
    }

    setIsLoading(true);

    const pokemon = await fetchPokemonAPI(query);

    if (!isValidObject(pokemon)) {
      setPokemonNotFound(true);
      setIsLoading(false);
      return;
    }

    setPokemonDetails(pokemon);
    setPokemonNotFound(false);
    setIsLoading(false);
  };

  return (
    <>
      <GameBar back />

      <main className="g-main">
        <div className="g-wrap">
          <header className={styles.head}>
            <div className={styles.headText}>
              <p className="g-eyebrow">Team builder</p>
              <h1 className="g-title g-title--sm">Compose your team.</h1>
              <p className="g-lead">
                Search the Pokédex by name or number, add six Pokémon, then save. Teams live in this
                browser.
              </p>
            </div>
            <div className={styles.headActions}>
              <BaseButton buttonType="tertiary" onClick={resetTeam}>
                Reset
              </BaseButton>
              <BaseButton onClick={saveTeam}>Save team</BaseButton>
            </div>
          </header>

          <div className={styles.grid}>
            <section className={`g-card ${styles.roster}`} aria-label="Your team">
              <div className={styles.rosterHead}>
                <h2 className="g-h2">Your team</h2>
                <span className={`${styles.count} g-num`}>
                  {pokemonTeam.team.length} / {TEAM_SIZE}
                </span>
              </div>

              <BaseInput
                label="Team name"
                name="team-name"
                placeholder="e.g. Hue City"
                value={pokemonTeam.teamName}
                onChange={(event) => setPokemonTeamName(event.target.value)}
              />

              <ul className={styles.teamList}>
                {pokemonTeam.team.map((pokemon) => (
                  <li key={`${pokemon.uuid}_pokemonteam`}>
                    <PokemonTeamItem pokemon={pokemon} onRemove={removePokemonInTeam} />
                  </li>
                ))}
                {Array.from({ length: TEAM_SIZE - pokemonTeam.team.length }, (_, index) => (
                  <li key={`empty-slot-${index}`} className={styles.emptySlot}>
                    <span className={`${styles.emptyIndex} g-num`}>
                      {String(pokemonTeam.team.length + index + 1).padStart(2, '0')}
                    </span>
                    <span>Empty slot</span>
                  </li>
                ))}
              </ul>

              {message && (
                <p
                  className={`${styles.note} ${message.success ? styles.noteOk : styles.noteBad}`}
                  role="status"
                >
                  {message.description}
                </p>
              )}
            </section>

            <section className={`g-card ${styles.find}`} aria-label="Find a Pokémon">
              <div className={styles.findHead}>
                <h2 className="g-h2">Find a Pokémon</h2>
                <span className="g-label">PokéAPI</span>
              </div>

              <BaseInput
                label="Name or number"
                inputType="search"
                name="search-pokemon"
                placeholder="pikachu, 25…"
                inputRef={searchPokemonRef}
                onClick={getPokemonFromSearch}
              />

              <div className={styles.result}>
                {isLoading ? (
                  <PokeballLoadingSpinner label="Searching" />
                ) : pokemonNotFound ? (
                  <div className={styles.notFound}>
                    <p className={styles.notFoundTitle}>No Pokémon found.</p>
                    <p>
                      Try a name like <em>pikachu</em> or a number from 1 to{' '}
                      {POKEMON_COUNT.toLocaleString('en-US')}.
                    </p>
                  </div>
                ) : pokemonDetails ? (
                  <PokemonDetails
                    pokemon={pokemonDetails}
                    onAdd={setPokemonInTeam}
                    disabled={teamIsFull}
                  />
                ) : null}
              </div>

              <div className={styles.random}>
                <p className={styles.randomNote}>
                  <strong>No idea?</strong> Pull one at random from all{' '}
                  {POKEMON_COUNT.toLocaleString('en-US')}.
                </p>
                <BaseButton
                  buttonType="secondary"
                  onClick={() => setRandomPokemonInTeam()}
                  disabled={teamIsFull}
                >
                  Add a random Pokémon
                </BaseButton>
              </div>
            </section>
          </div>
        </div>
      </main>

      <CopyrightFooter />
    </>
  );
};

export default CreateTeamPage;
