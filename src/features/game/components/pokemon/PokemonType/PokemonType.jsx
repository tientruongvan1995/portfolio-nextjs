import BaseSmallType from '@/features/game/components/primitive/BaseSmallType';

const PokemonType = ({ type }) => {
  return <BaseSmallType type={type} text={type} />;
};

export default PokemonType;
