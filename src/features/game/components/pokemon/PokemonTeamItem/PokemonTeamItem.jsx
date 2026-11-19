import BaseExperienceBar from '@/features/game/components/primitive/BaseExperienceBar';
import { humanize } from '@/features/game/utils/format';
import Image from 'next/image';
import PokemonType from '../PokemonType';

import styles from './PokemonTeamItem.module.css';

const PokemonTeamItem = ({ pokemon, className = '', onRemove }) => {
  const { name, spritePixelUrl, baseExperience, abilities, types } = pokemon;

  return (
    <div className={`${styles.item} ${className}`.trim()}>
      <Image className={styles.sprite} src={spritePixelUrl} alt="" width={96} height={96} />

      <div className={styles.body}>
        <div className={styles.top}>
          <p className={styles.name}>{name}</p>
          <div className={styles.types}>
            {types?.map((item) => (
              <PokemonType key={item.type.name} type={item.type.name} />
            ))}
          </div>
        </div>
        <div className={styles.meta}>
          <span className={styles.abilities}>
            {abilities?.map((item) => humanize(item.ability.name)).join(' · ')}
          </span>
          <BaseExperienceBar baseExperience={baseExperience} />
        </div>
      </div>

      <button
        type="button"
        className={styles.remove}
        onClick={() => onRemove(pokemon)}
        aria-label={`Remove ${name}`}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="m2.5 2.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default PokemonTeamItem;
