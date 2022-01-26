import React from 'react';
import StatsPanel from './StatsPanel';

export default {
  title: 'TicTacToe/StatsPanel',
  component: StatsPanel,
};

const Template = (args) => <StatsPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
