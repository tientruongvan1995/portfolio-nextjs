import BaseExperienceBar from '@/features/game/components/primitive/BaseExperienceBar';
import Image from 'next/image';

import BaseSmallType from '@/features/game/components/primitive/BaseSmallType';
import PokemonType from '../PokemonType';

import styles from './PokemonDetails.module.css';

import addToTeam from './icons/addToTeam.svg';
import { Pokemon } from '@/features/game/model/pokemon';

type Props = {
  pokemon: Pokemon;
  onAdd: (pokemon: Pokemon) => void;
};

const PokemonDetails = ({ pokemon, onAdd }: Props) => {
  const { name, spriteNormalUrl, baseExperience, abilities, types } = pokemon || {};

  if (!pokemon || !spriteNormalUrl) {
    return null;
  }

  return (
    <button className={styles.pokemonDetails} onClick={() => onAdd(pokemon)}>
      <Image
        src={spriteNormalUrl}
        alt={`${name}'s offical artwork`}
        width={60}
        height={60}
        placeholder="blur"
        blurDataURL="./icons/placeholder-pokemon.png"
      />
      <div className={styles.statsAndAbilities}>
        <div className={styles.statsWrapper}>
          <div className={styles.statsWrapper__info}>
            <div className={styles.statsWrapper__column}>
              <p className={`medium ${styles.statsWrapper__name}`}>{name}</p>
              <BaseExperienceBar baseExperience={baseExperience} />
            </div>
            <div className={styles.statsWrapper__column}>
              {types?.map((elem) => (
                <PokemonType key={`${elem.type.name}_pokemondetails`} type={elem.type.name} />
              ))}
            </div>
          </div>
          <div className={styles.statsWrapper__bottomBar}></div>
        </div>
        <div className={styles.abilitiesWrapper}>
          <p className="medium">Abilities</p>
          <div className={styles.abilities}>
            {abilities?.map((elem) => (
              <BaseSmallType
                key={`${elem.ability.name}_pokemondetails`}
                type={types[0].type.name}
                text={elem.ability.name}
                className={styles.abilitySlot}
              />
            ))}
          </div>
        </div>
      </div>
      <Image className={styles.addToTeam} src={addToTeam} alt="" width="100" height="36" />
    </button>
  );
};

export default PokemonDetails;
