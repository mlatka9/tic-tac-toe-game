import SetupView from './SetupView';
import { render, fireEvent, screen } from '@testing-library/react';

it('render SetupView component', () => {
  render(<SetupView />);
});

it('select x as default player mark', () => {
  render(<SetupView />);
  const buttonElement = screen.getByTitle('mark x');
  expect(buttonElement).toHaveAttribute('aria-pressed', 'true');
});

it('change selected mark after pressing o button', () => {
  render(<SetupView />);
  const buttonElementX = screen.getByTitle('mark x');
  expect(buttonElementX).toHaveAttribute('aria-pressed', 'true');
  const buttonElementO = screen.getByTitle('mark o');
  fireEvent.click(buttonElementO);
  expect(buttonElementX).toHaveAttribute('aria-pressed', 'false');
  expect(buttonElementO).toHaveAttribute('aria-pressed', 'true');
});
