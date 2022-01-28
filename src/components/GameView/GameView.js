import Header from 'components/Header/Header';
import Board from 'components/Board/Board';
import StatsPanel from 'components/StatsPanel/StatsPanel';
import styles from './GameView.module.scss';
import { useState, useEffect } from 'react';
import produce from 'immer';
import EndGameModal from 'components/EndGameModal/EndGameModal';

const initBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameView = ({ players, setIsDurringGame }) => {
  const [currentTurn, setCurrentTurn] = useState('X');
  const [board, setBoard] = useState(initBoard);
  const [scores, setScores] = useState({
    X: 0,
    O: 0,
    ties: 0,
  });

  const handleResetBoard = () => {
    setBoard(initBoard);
  };

  const equals3 = (a, b, c) => {
    if (a === null || b === null || c === null) return false;
    return a === b && b === c;
  };

  const checkWinner = (board) => {
    //columns
    for (let i = 0; i < 3; i++) {
      if (equals3(board[0][i], board[1][i], board[2][i])) return true;
    }

    //rows
    for (let i = 0; i < 3; i++) {
      if (equals3(board[i][0], board[i][1], board[i][2])) return true;
    }

    //diagonal
    if (equals3(board[0][0], board[1][1], board[2][2])) return true;
    if (equals3(board[0][2], board[1][1], board[2][0])) return true;

    return false;
  };

  const incrementScoreToPlayer = (player) => {
    setScores({ ...scores, [player]: scores[player] + 1 });
  };

  const handleSetNextTurn = () => {
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
  };

  const updateBoard = (index, mark) => {
    const rowIndex = Math.floor(index / 3);
    const columnIndex = index % 3;

    const nextBoard = produce(board, (draftBoard) => {
      draftBoard[rowIndex][columnIndex] = mark;
    });
    setBoard(nextBoard);
    return nextBoard;
  };

  return (
    <section className={styles.wrapper}>
      <Header currentTurn={currentTurn} setIsDurringGame={setIsDurringGame} />
      <Board
        board={board}
        updateBoard={updateBoard}
        currentTurn={currentTurn}
        handleSetNextTurn={handleSetNextTurn}
        checkWinner={checkWinner}
        incrementScoreToPlayer={incrementScoreToPlayer}
        handleResetBoard={handleResetBoard}
        setIsDurringGame={setIsDurringGame}
      />
      <StatsPanel scores={scores} />
    </section>
  );
};

export default GameView;
