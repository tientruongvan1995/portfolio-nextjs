import BaseSmallType from "@/features/game/components/primitive/BaseSmallType";

import styles from "./PokemonType.module.css";

const PokemonType = ({ type }) => {
  return <BaseSmallType type={type} text={type} className={styles.pokemonType} />;
};

export default PokemonType;
