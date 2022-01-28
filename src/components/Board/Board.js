import styles from './Board.module.scss';
import BoardCard from 'components/BoardCard/BoardCard';
import { useState } from 'react';
import EndGameModal from 'components/EndGameModal/EndGameModal';

const Board = ({
  board,
  currentTurn,
  updateBoard,
  handleSetNextTurn,
  checkWinner,
  incrementScoreToPlayer,
  handleResetBoard,
  setIsDurringGame,
}) => {
  const flattenedBoard = board.reduce((acc, row) => acc.concat([...row]), []);
  const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleUpdateBoard = (index) => {
    const nextBoard = updateBoard(index, currentTurn);
    const flattenedNextBoard = nextBoard.reduce(
      (acc, row) => acc.concat([...row]),
      []
    );
    if (checkWinner(nextBoard)) {
      setIsEndGameModalOpen(true);
      incrementScoreToPlayer(currentTurn);
      setWinner(currentTurn);
    } else if (!flattenedNextBoard.includes(null)) {
      incrementScoreToPlayer('ties');
      setIsEndGameModalOpen(true);
      setWinner('ties');
    } else {
      handleSetNextTurn();
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        {flattenedBoard.map((mark, index) => (
          <BoardCard
            isBlocked={Boolean(winner)}
            key={index}
            currentTurn={currentTurn}
            mark={mark}
            updateBoard={() => handleUpdateBoard(index)}
          />
        ))}
      </div>
      {isEndGameModalOpen && (
        <EndGameModal
          winnerMark={winner}
          setIsDurringGame={setIsDurringGame}
          handleResetBoard={handleResetBoard}
        />
      )}
    </>
  );
};

export default Board;
