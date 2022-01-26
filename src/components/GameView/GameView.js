import Header from 'components/Header/Header';
import Board from 'components/Board/Board';
import StatsPanel from 'components/StatsPanel/StatsPanel';
import styles from './GameView.module.scss';

const GameView = () => {
  return (
    <section className={styles.wrapper}>
      <Header />
      <Board />
      <StatsPanel />
    </section>
  );
};

export default GameView;
