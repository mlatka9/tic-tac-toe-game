import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

it('render app component', () => {
  render(<App />);
  screen.getByText(/pick player 1's mark/i);
});

it('go to game view after pressing button "new game (vs player)"', () => {
  render(<App />);
  screen.getByText(/pick player 1's mark/i);
  const buttonElement = screen.getByRole('button', { name: /vs player/i });
  fireEvent.click(buttonElement);
  screen.getByText(/turn/i);
  expect(buttonElement).not.toBeInTheDocument();
});

it('marked board card after selecting', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /vs player/i });
  fireEvent.click(buttonElement);
  const BoardCard = screen.getByTestId('card-0');
  fireEvent.click(BoardCard);
  expect(BoardCard).toHaveAttribute('data-marked-by', 'X');
});

it('player 1 win after mark 3 card in row', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /vs player/i });
  fireEvent.click(buttonElement);

  const BoardCard0 = screen.getByTestId('card-0');
  fireEvent.click(BoardCard0);
  const BoardCard3 = screen.getByTestId('card-3');
  fireEvent.click(BoardCard3);
  const BoardCard1 = screen.getByTestId('card-1');
  fireEvent.click(BoardCard1);
  const BoardCard8 = screen.getByTestId('card-8');
  fireEvent.click(BoardCard8);
  const BoardCard2 = screen.getByTestId('card-2');
  fireEvent.click(BoardCard2);

  screen.getByText(/PLAYER 1 WINS/i);
});

it('player 2 win after mark 3 card in column', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /vs player/i });
  fireEvent.click(buttonElement);

  fireEvent.click(screen.getByTestId('card-0'));
  fireEvent.click(screen.getByTestId('card-1'));
  fireEvent.click(screen.getByTestId('card-2'));
  fireEvent.click(screen.getByTestId('card-4'));
  fireEvent.click(screen.getByTestId('card-6'));
  fireEvent.click(screen.getByTestId('card-7'));

  screen.getByText(/PLAYER 2 WINS/i);
});

it('display current mark in header', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /vs player/i });
  fireEvent.click(buttonElement);
  const currentTurnElement = screen.getByText(/turn/i);
  expect(currentTurnElement).toHaveAccessibleName(/X has current move/i);
  fireEvent.click(screen.getByTestId('card-0'));
  expect(currentTurnElement).toHaveAccessibleName(/O has current move/i);
});

it('increase score counter after player X won', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /vs player/i });
  fireEvent.click(buttonElement);
  const statsCard = screen.getByTestId('stats-panel-x');
  expect(statsCard).toHaveTextContent(/0/i);
  const BoardCard0 = screen.getByTestId('card-0');
  fireEvent.click(BoardCard0);
  const BoardCard3 = screen.getByTestId('card-3');
  fireEvent.click(BoardCard3);
  const BoardCard1 = screen.getByTestId('card-1');
  fireEvent.click(BoardCard1);
  const BoardCard8 = screen.getByTestId('card-8');
  fireEvent.click(BoardCard8);
  const BoardCard2 = screen.getByTestId('card-2');
  fireEvent.click(BoardCard2);

  screen.getByText(/PLAYER 1 WINS/i);
  expect(statsCard).toHaveTextContent(/1/i);
});

it('show modal after press restart game button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /vs player/i });
  fireEvent.click(buttonElement);
  const ButtonElement = screen.getByRole('button', { name: /restart/i });
  fireEvent.click(ButtonElement);
  screen.getByText(/restart game\?/i);
});

it('restart game after press yes,restart button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /vs player/i });
  fireEvent.click(buttonElement);

  const BoardCard = screen.getByTestId('card-0');
  fireEvent.click(BoardCard);
  expect(BoardCard).toHaveAttribute('data-marked-by', 'X');

  const ButtonElement = screen.getByRole('button', { name: /restart/i });
  fireEvent.click(ButtonElement);
  screen.getByText(/restart game\?/i);
  const restartButton = screen.getByRole('button', { name: /yes, restart/i });
  fireEvent.click(restartButton);
  expect(screen.getByText(/pick player 1's mark/i)).toBeInTheDocument();
});
