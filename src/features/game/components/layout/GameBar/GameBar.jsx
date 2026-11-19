import { Link } from '@/i18n/navigation';
import styles from './GameBar.module.css';

const PokeballMark = () => (
  <svg className="g-brand__mark g-mark" viewBox="0 0 24 24" aria-hidden="true">
    <path className="g-mark__top" d="M2 12a10 10 0 0 1 20 0Z" />
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
    <circle
      className="g-mark__fill"
      cx="12"
      cy="12"
      r="3.4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const GameBar = ({ back = false }) => {
  return (
    <header className="g-bar">
      <div className="g-wrap g-bar__in">
        <Link href="/pokemon" className="g-brand">
          <PokeballMark />
          <span>TeamFight</span>
          <span className="g-brand__tag">Pokémon</span>
        </Link>
        <nav className={styles.links} aria-label="Game">
          {back && (
            <Link href="/pokemon" className={styles.link}>
              ← Home
            </Link>
          )}
          <Link href="/" className={styles.link}>
            Portfolio ↗
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default GameBar;
