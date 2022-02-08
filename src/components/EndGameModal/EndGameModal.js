import Button from 'components/Button/Button';
import ModalWrapper from 'components/ModalWrapper/ModalWrapper';
import { ReactComponent as IconX } from 'assets/icon-x.svg';
import { ReactComponent as IconO } from 'assets/icon-o.svg';
import styles from './EndGameModal.module.scss';

const EndGameModal = ({ winnerMark, setIsDurringGame, handleNextRound }) => {
  return (
    <ModalWrapper>
      <p className={styles.info}>
        {winnerMark === 'X' && 'player 1 wins'}
        {winnerMark === 'O' && 'player 2 wins'}
      </p>
      <header className={styles.headerWrapper}>
        {winnerMark === 'X' && <IconX className={styles.icon} />}
        {winnerMark === 'O' && <IconO className={styles.icon} />}
        <h2
          className={`${styles.header} ${
            winnerMark === 'O' && styles.headerYellow
          } ${winnerMark === 'ties' && styles.headerSilver}`}
        >
          {(winnerMark === 'X' || winnerMark === 'O') && 'takes the round'}
          {winnerMark === 'ties' && 'round tied'}
        </h2>
      </header>
      <div className={styles.buttonsWrapper}>
        <Button isSmall isTertiary onClick={() => setIsDurringGame(false)}>
          quit
        </Button>
        <Button
          isSmall
          onClick={() => {
            // setIsDurringGame(false);
            handleNextRound();
          }}
        >
          next round
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default EndGameModal;
