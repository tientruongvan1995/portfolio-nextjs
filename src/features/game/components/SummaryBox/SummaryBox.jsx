import styles from './SummaryBox.module.css';

const SummaryBox = ({ score }) => {
  const total = score.won + score.tied + score.loss;

  return (
    <section className={`g-card ${styles.record}`}>
      <header>
        <p className="g-label">Your record</p>
      </header>

      <dl className={styles.rows}>
        <div className={styles.row}>
          <dt>Won</dt>
          <dd className="g-num">{score.won}</dd>
        </div>
        <div className={styles.row}>
          <dt>Tied</dt>
          <dd className="g-num">{score.tied}</dd>
        </div>
        <div className={styles.row}>
          <dt>Lost</dt>
          <dd className="g-num">{score.loss}</dd>
        </div>
      </dl>

      <div className={styles.total}>
        <span>Battles</span>
        <strong className="g-num">{total}</strong>
      </div>
    </section>
  );
};

export default SummaryBox;
