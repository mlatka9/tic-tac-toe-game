import React from 'react';
import BoardCard from './BoardCard';

export default {
  title: 'TicTacToe/BoardCard',
  component: BoardCard,
};

const Template = (args) => <BoardCard {...args} />;

export const markX = Template.bind({});
markX.args = {
  mark: 'X',
};

export const markO = Template.bind({});
markO.args = {
  mark: 'O',
};

export const OMove = Template.bind({});
OMove.args = {
  currentMark: 'O',
};

export const XMove = Template.bind({});
XMove.args = {
  currentMark: 'X',
};
