import PokemonFightItem from '../PokemonFightItem/PokemonFightItem';

import styles from './PokemonTeam.module.css';

const VERDICTS = {
  won: { label: 'Won', chip: 'g-chip--good' },
  loss: { label: 'Lost', chip: 'g-chip--bad' },
  tied: { label: 'Tied', chip: '' },
};

/**
 * @param {{
 *   isYourTeam?: boolean,
 *   teamName: string,
 *   team: import('@/features/game/model/pokemon').Pokemon[],
 *   result?: 'won' | 'loss' | 'tied' | null,
 * }} props
 */
const PokemonTeam = ({ isYourTeam = false, teamName, team, result = null }) => {
  const totalExperience = team.reduce((sum, pokemon) => sum + pokemon.baseExperience, 0);
  const verdict = result ? VERDICTS[result] : null;

  return (
    <section className={`g-card ${styles.team} ${result === 'won' ? styles.winner : ''}`.trim()}>
      <header className={styles.head}>
        <div className={styles.headText}>
          <p className="g-label">{isYourTeam ? 'Your team' : 'Opponent'}</p>
          <h2 className={styles.name}>{teamName}</h2>
        </div>
        {verdict && <span className={`g-chip ${verdict.chip}`.trim()}>{verdict.label}</span>}
      </header>

      <ul className={styles.list}>
        {team.map((pokemon, index) => (
          <li key={pokemon.uuid ?? `${pokemon.name}-${index}`}>
            <PokemonFightItem pokemon={pokemon} />
          </li>
        ))}
      </ul>

      <footer className={styles.foot}>
        <span className="g-label">Total EXP</span>
        <span className={`${styles.total} g-num`}>{totalExperience}</span>
      </footer>
    </section>
  );
};

export default PokemonTeam;
