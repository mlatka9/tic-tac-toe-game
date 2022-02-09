import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as IconX } from 'assets/icon-x.svg';
import { ReactComponent as IconO } from 'assets/icon-o.svg';
import { ReactComponent as Icon } from 'assets/icon-restart.svg';
import Button from 'components/Button/Button';
import styles from './Header.module.scss';
import { useState } from 'react';
import RestartModal from 'components/RestartModal/RestartModal';

const Header = ({ currentMark, setIsDurringGame }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBackToSetup = () => {
    setIsDurringGame(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.turnCard}>
          {currentMark === 'X' ? (
            <IconX className={styles.icon} />
          ) : (
            <IconO className={styles.icon} />
          )}

          <span>turn</span>
        </div>
        <Button
          isTertiary
          isSmall
          onClick={handleOpenModal}
          // className={styles.resetButton}
        >
          <Icon />
        </Button>
      </div>
      {isModalOpen && (
        <RestartModal
          handleBackToSetup={handleBackToSetup}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Header;
