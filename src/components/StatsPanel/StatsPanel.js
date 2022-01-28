import styles from './StatsPanel.module.scss';

const StatsPanel = ({ scores }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.statCard}>
        <h3 className={styles.statTitle}>X (you)</h3>
        <span className={styles.statValue}>{scores.X}</span>
      </div>
      <div className={`${styles.statCard} ${styles.secondCard}`}>
        <h3 className={styles.statTitle}>ties</h3>
        <span className={styles.statValue}>{scores.ties}</span>
      </div>
      <div className={`${styles.statCard} ${styles.thirdCard}`}>
        <h3 className={styles.statTitle}>O (cpu)</h3>
        <span className={styles.statValue}>{scores.O}</span>
      </div>
    </div>
  );
};

export default StatsPanel;
