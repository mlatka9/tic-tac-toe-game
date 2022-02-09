import React from 'react';
import EndGameModal from './EndGameModal';

export default {
  title: 'TicTacToe/EndGameModal',
  component: EndGameModal,
};

const Template = (args) => (
  <EndGameModal
    setIsDurringGame={() => {}}
    handleSetNextRound={() => {}}
    {...args}
  />
);

export const XWon = Template.bind({});
XWon.args = {
  winnerMark: 'X',
};

export const OWon = Template.bind({});
OWon.args = {
  winnerMark: 'O',
};

export const Ties = Template.bind({});
Ties.args = {
  winnerMark: 'ties',
};
