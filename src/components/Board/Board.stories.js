import React from 'react';
import Board from './Board';

export default {
  title: 'TicTacToe/Board',
  component: Board,
};

const mockBoard = ['X', 'X', 'O', null, null, 'O', 'X', null, null];

const Template = (args) => <Board {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  board: mockBoard,
  handleUpdateBoard: () => {},
};
