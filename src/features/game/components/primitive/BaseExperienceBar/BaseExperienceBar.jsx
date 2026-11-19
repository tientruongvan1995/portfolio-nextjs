import styles from './BaseExperienceBar.module.css';

const BaseExperienceBar = ({ baseExperience, className = '' }) => {
  return (
    <span className={`${styles.exp} ${className}`.trim()}>
      <span className={styles.label}>EXP</span>
      <span className={styles.value}>{baseExperience}</span>
    </span>
  );
};

export default BaseExperienceBar;
