import Button from 'components/Button/Button';
import ModalWrapper from 'components/ModalWrapper/ModalWrapper';
import { ReactComponent as IconX } from 'assets/icon-x.svg';
import { ReactComponent as IconO } from 'assets/icon-o.svg';
import styles from './EndGameModal.module.scss';

const winnerMark = 'O';

const EndGameModal = () => {
  return (
    <ModalWrapper>
      <p className={styles.info}>You won</p>
      <header className={styles.headerWrapper}>
        {winnerMark === 'X' ? (
          <IconX className={styles.icon} />
        ) : (
          <IconO className={styles.icon} />
        )}
        <h2
          className={`${styles.header} ${
            winnerMark === 'O' && styles.headerYellow
          }`}
        >
          takes the round
        </h2>
      </header>
      <div className={styles.buttonsWrapper}>
        <Button isSmall isTertiary>
          quit
        </Button>
        <Button isSmall>next round</Button>
      </div>
    </ModalWrapper>
  );
};

export default EndGameModal;
