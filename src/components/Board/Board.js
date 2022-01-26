import styles from './Board.module.scss';
import BoardCard from 'components/BoardCard/BoardCard';

const gameState = [null, null, null, null, 'O', 'X', 'X', 'X', 'X'];
const currentTurn = 'O';

const Board = () => {
  return (
    <div className={styles.wrapper}>
      {gameState.map((mark, index) => (
        <BoardCard key={index} currentTurn={currentTurn} mark={mark} />
      ))}
    </div>
  );
};

export default Board;
