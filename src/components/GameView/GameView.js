import Header from 'components/Header/Header';
import Board from 'components/Board/Board';
import StatsPanel from 'components/StatsPanel/StatsPanel';
import styles from './GameView.module.scss';
import { useState, useEffect } from 'react';
import produce from 'immer';
import PropTypes from 'prop-types';

const initBoard = [null, null, null, null, null, null, null, null, null];

const GameView = ({ players, setIsDurringGame }) => {
  const [currentMark, setCurrentMark] = useState('X');
  const [board, setBoard] = useState(initBoard);
  const [scores, setScores] = useState({
    X: 0,
    O: 0,
    ties: 0,
  });
  const [winner, setWinner] = useState(null);
  const [isCPUSelecting, setIsCPUSelecting] = useState(false);

  useEffect(() => {
    if (winner) return;
    if (players[currentMark] === 'cpu') {
      setIsCPUSelecting(true);

      setTimeout(() => {
        const indexSelectedByCpu = selectCpuMove();
        handleUpdateBoard(indexSelectedByCpu);
        setIsCPUSelecting(false);
      }, 500);
    }
  }, [currentMark, winner]);

  const selectCpuMove = () => {
    const filteredIndexes = board
      .map((elem, index) => (elem === null ? index : null))
      .filter((elem) => elem !== null);
    const randomIndex =
      filteredIndexes[Math.floor(Math.random() * filteredIndexes.length)];
    return randomIndex;
  };

  const handleUpdateBoard = (index) => {
    if (isCPUSelecting) return;
    const nextBoard = updateBoard(index, currentMark);
    const checkedWinner = checkWinner(nextBoard);
    if (checkedWinner === 'X' || checkedWinner === 'O') {
      incrementScoreToPlayer(currentMark);
      setWinner(currentMark);
    } else if (checkedWinner === 'ties') {
      incrementScoreToPlayer('ties');
      setWinner('ties');
    } else {
      handleSetNextMark();
    }
  };

  const handleResetBoard = () => {
    setBoard(initBoard);
    setCurrentMark('X');
  };

  const handleSetNextRound = () => {
    handleResetBoard();
    setWinner(null);
  };

  const equals3 = (a, b, c) => {
    if (a === null || b === null || c === null) return false;
    return a === b && b === c;
  };

  const checkWinner = (board) => {
    //columns
    for (let i = 0; i < 3; i++) {
      if (equals3(board[i], board[i + 3], board[i + 6])) return board[i];
    }
    //rows
    for (let i = 0; i < 9; i += 3) {
      if (equals3(board[i], board[i + 1], board[i + 2])) return board[i];
    }
    //diagonal
    if (equals3(board[0], board[4], board[8])) return board[0];
    if (equals3(board[2], board[4], board[6])) return board[2];

    if (!board.includes(null)) {
      return 'ties';
    }
    return false;
  };

  const incrementScoreToPlayer = (player) => {
    setScores({ ...scores, [player]: scores[player] + 1 });
  };

  const handleSetNextMark = () => {
    setCurrentMark(currentMark === 'X' ? 'O' : 'X');
  };

  const updateBoard = (index, mark) => {
    const nextBoard = produce(board, (draftBoard) => {
      draftBoard[index] = mark;
    });
    setBoard(nextBoard);
    return nextBoard;
  };

  return (
    <section className={styles.wrapper}>
      <Header currentMark={currentMark} setIsDurringGame={setIsDurringGame} />
      <Board
        board={board}
        currentMark={currentMark}
        winner={winner}
        handleUpdateBoard={handleUpdateBoard}
        updateBoard={updateBoard}
        setIsDurringGame={setIsDurringGame}
        isCPUSelecting={isCPUSelecting}
        handleSetNextRound={handleSetNextRound}
      />
      <StatsPanel scores={scores} />
    </section>
  );
};

GameView.propTypes = {
  players: PropTypes.shape({
    X: PropTypes.string.isRequired,
    O: PropTypes.string.isRequired,
  }).isRequired,
  setIsDurringGame: PropTypes.func,
};

export default GameView;
