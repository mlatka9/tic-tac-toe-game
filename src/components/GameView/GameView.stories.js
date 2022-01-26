import React from 'react';
import GameView from './GameView';

export default {
  title: 'TicTacToe/GameView',
  component: GameView,
};

const Template = (args) => <GameView {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
