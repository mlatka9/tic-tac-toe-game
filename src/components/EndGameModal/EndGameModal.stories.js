import React from 'react';
import EndGameModal from './EndGameModal';

export default {
  title: 'TicTacToe/EndGameModal',
  component: EndGameModal,
};

const Template = (args) => <EndGameModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
