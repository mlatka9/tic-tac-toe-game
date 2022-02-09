import React from 'react';
import Header from './Header';

export default {
  title: 'TicTacToe/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const XTurn = Template.bind({});
XTurn.args = {
  setIsDurringGame: () => {},
  currentMark: 'X',
};

export const OTurn = Template.bind({});
OTurn.args = {
  setIsDurringGame: () => {},
  currentMark: 'O',
};
