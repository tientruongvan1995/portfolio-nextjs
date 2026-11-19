import BaseButton from '@/features/game/components/primitive/BaseButton';
import BaseExperienceBar from '@/features/game/components/primitive/BaseExperienceBar';
import { Pokemon } from '@/features/game/model/pokemon';
import { humanize } from '@/features/game/utils/format';
import Image from 'next/image';
import PokemonType from '../PokemonType';

import styles from './PokemonDetails.module.css';

type Props = {
  pokemon: Pokemon;
  onAdd: (pokemon: Pokemon) => void;
  disabled?: boolean;
};

const PokemonDetails = ({ pokemon, onAdd, disabled = false }: Props) => {
  if (!pokemon || !pokemon.spriteNormalUrl) {
    return null;
  }

  const { name, pokedexId, spriteNormalUrl, baseExperience, abilities, types } = pokemon;

  return (
    <article className={styles.card}>
      <div className={styles.art}>
        <span className={`${styles.dex} g-num`}>No. {String(pokedexId).padStart(3, '0')}</span>
        <Image
          className={styles.artwork}
          src={spriteNormalUrl}
          alt={`${name} official artwork`}
          width={240}
          height={240}
          loading="eager"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.head}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.types}>
            {types?.map((item) => (
              <PokemonType key={item.type.name} type={item.type.name} />
            ))}
          </div>
        </div>

        <div className={styles.abilities}>
          <p className="g-label">Abilities</p>
          <p className={styles.abilityList}>
            {abilities
              ?.map(
                (item) =>
                  `${humanize(item.ability.name)}${item.is_hidden ? ' (hidden)' : ''}`,
              )
              .join(' · ')}
          </p>
        </div>

        <div className={styles.foot}>
          <BaseExperienceBar baseExperience={baseExperience} />
          <BaseButton className={styles.add} onClick={() => onAdd(pokemon)} disabled={disabled}>
            {disabled ? 'Team is full' : 'Add to team'}
          </BaseButton>
        </div>
      </div>
    </article>
  );
};

export default PokemonDetails;
