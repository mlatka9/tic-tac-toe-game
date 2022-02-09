import React from 'react';
import SetupView from './SetupView';

export default {
  title: 'TicTacToe/SetupView',
  component: SetupView,
};

const Template = (args) => <SetupView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  setIsDurringGame: () => {},
  setPlayers: () => {},
};
