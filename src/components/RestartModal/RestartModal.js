import ModalWrapper from 'components/ModalWrapper/ModalWrapper';
import Button from 'components/Button/Button';
import styles from './RestartModal.module.scss';

const RestartModal = () => {
  return (
    <ModalWrapper>
      <h2 className={styles.header}>restart game?</h2>
      <div className={styles.buttonsWrapper}>
        <Button isSmall isTertiary>
          no, cancel
        </Button>
        <Button isSmall>yes, restart</Button>
      </div>
    </ModalWrapper>
  );
};

export default RestartModal;
