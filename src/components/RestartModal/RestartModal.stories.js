import React from 'react';
import RestartModal from './RestartModal';

export default {
  title: 'TicTacToe/RestartModal',
  component: RestartModal,
};

const Template = (args) => <RestartModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
