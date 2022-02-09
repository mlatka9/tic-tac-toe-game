import React from 'react';
import StatsPanel from './StatsPanel';

export default {
  title: 'TicTacToe/StatsPanel',
  component: StatsPanel,
};

const Template = (args) => <StatsPanel {...args} />;

export const ScoresAtStart = Template.bind({});
ScoresAtStart.args = {
  scores: {
    X: 0,
    O: 0,
    ties: 0,
  },
};

export const ScoresWithValues = Template.bind({});
ScoresWithValues.args = {
  scores: {
    X: 10,
    O: 14,
    ties: 3,
  },
};
