import BaseExperienceBar from '@/features/game/components/primitive/BaseExperienceBar';
import Image from 'next/image';
import PokemonType from '../PokemonType';
import styles from './PokemonFightItem.module.css';

const PokemonFightItem = ({ pokemon }) => {
  const { name, spritePixelUrl, baseExperience, types } = pokemon;

  return (
    <div className={styles.item}>
      <Image className={styles.sprite} src={spritePixelUrl} alt="" width={48} height={48} />
      <div className={styles.body}>
        <p className={styles.name}>{name}</p>
        <div className={styles.types}>
          {types?.map((elem) => (
            <PokemonType key={elem.type.name} type={elem.type.name} />
          ))}
        </div>
      </div>
      <BaseExperienceBar baseExperience={baseExperience} />
    </div>
  );
};

export default PokemonFightItem;
