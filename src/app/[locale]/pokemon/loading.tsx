import PokeballLoadingSpinner from '@/features/game/components/PokeballLoadingSpinner';

export default function Loading() {
  return (
    <div className="g-main">
      <div className="g-wrap">
        <div className="g-loading">
          <PokeballLoadingSpinner label="Loading" />
        </div>
      </div>
    </div>
  );
}
