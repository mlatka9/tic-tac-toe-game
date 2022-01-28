import GameView from 'components/GameView/GameView';
import SetupView from 'components/SetupView/SetupView';
import { useState } from 'react';

function App() {
  const [isDurringGame, setIsDurringGame] = useState(false);

  const [players, setPlayers] = useState({
    player1: 'cpu',
    player2: 'cpu',
  });

  // const [setup, setSetup] = useState({
  //   player1Mark: null,
  //   opponent: '',
  // });

  return isDurringGame ? (
    <GameView players={players} setIsDurringGame={setIsDurringGame} />
  ) : (
    <SetupView setIsDurringGame={setIsDurringGame} setPlayers={setPlayers} />
  );
}

export default App;
