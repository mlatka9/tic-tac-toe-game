import styles from './Board.module.scss';
import BoardCard from 'components/BoardCard/BoardCard';
import EndGameModal from 'components/EndGameModal/EndGameModal';

const Board = ({
  board,
  currentMark,
  setWinner,
  winner,
  handleUpdateBoard,
  handleResetBoard,
  setIsDurringGame,
}) => {
  const flattenedBoard = board.reduce((acc, row) => acc.concat([...row]), []);
  // const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);

  const handleNextRound = () => {
    handleResetBoard();
    setWinner(null);
  };

  return (
    <>
      <div className={styles.wrapper}>
        {flattenedBoard.map((mark, index) => (
          <BoardCard
            isBlocked={Boolean(winner)}
            key={index}
            currentMark={currentMark}
            mark={mark}
            updateBoard={() => handleUpdateBoard(index)}
          />
        ))}
      </div>
      {winner && (
        <EndGameModal
          winnerMark={winner}
          setIsDurringGame={setIsDurringGame}
          handleNextRound={handleNextRound}
        />
      )}
    </>
  );
};

export default Board;
