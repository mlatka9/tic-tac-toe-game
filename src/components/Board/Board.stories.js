import React from 'react';
import Board from './Board';

export default {
  title: 'TicTacToe/Board',
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
