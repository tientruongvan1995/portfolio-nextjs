import styles from './PokeballLoadingSpinner.module.css';

const PokeballLoadingSpinner = ({ label = 'Loading' }) => {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <svg className={styles.ball} viewBox="0 0 24 24" aria-hidden="true">
        <path className={styles.top} d="M2 12a10 10 0 0 1 20 0Z" />
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.4" />
        <circle className={styles.hub} cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default PokeballLoadingSpinner;
