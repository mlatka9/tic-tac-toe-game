import styles from './BoardCard.module.scss';
import { ReactComponent as IconX } from 'assets/icon-x.svg';
import { ReactComponent as IconO } from 'assets/icon-o.svg';
import { ReactComponent as IconXOutline } from 'assets/icon-x-outline.svg';
import { ReactComponent as IconOOutline } from 'assets/icon-o-outline.svg';

const BoardCard = ({
  mark,
  currentMark,
  updateBoard,
  isBlocked,
  isCPUSelecting,
}) => {
  const getMark = () => {
    if (mark === 'X') {
      return <IconX className={styles.markImage} />;
    }
    if (mark === 'O') {
      return <IconO className={styles.markImage} />;
    }
    if (currentMark === 'X') {
      return (
        <IconXOutline
          className={`${styles.hoveredMarkImage} ${
            isBlocked && styles.isBlocked
          }  ${isCPUSelecting && styles.hoveredMarkImageHidden}`}
        />
      );
    }
    return (
      <IconOOutline
        className={`${styles.hoveredMarkImage} ${
          isBlocked && styles.isBlocked
        } ${isCPUSelecting && styles.hoveredMarkImageHidden}`}
      />
    );
  };

  return (
    <div
      className={`${styles.boardCard} ${!mark ? styles.notMarked : ''}`}
      onClick={() => {
        if (isBlocked || mark) return;
        updateBoard();
      }}
    >
      {getMark()}
    </div>
  );
};

export default BoardCard;
