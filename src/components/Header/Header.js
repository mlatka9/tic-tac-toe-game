import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as IconX } from 'assets/icon-x.svg';
import { ReactComponent as IconO } from 'assets/icon-o.svg';
import { ReactComponent as Icon } from 'assets/icon-restart.svg';
import Button from 'components/Button/Button';
import styles from './Header.module.scss';

const currentTurn = 'O';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.turnCard}>
        {currentTurn === 'X' ? (
          <IconX className={styles.icon} />
        ) : (
          <IconO className={styles.icon} />
        )}

        <span>turn</span>
      </div>
      <Button isTertiary isSmall>
        <Icon />
      </Button>
    </div>
  );
};

export default Header;
