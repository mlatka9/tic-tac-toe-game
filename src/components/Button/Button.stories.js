import React from 'react';
import Button from './Button';
import { ReactComponent as Icon } from 'assets/icon-restart.svg';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Example text</Button>;
const TemplateWithImage = (args) => (
  <Button {...args}>
    <Icon />
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  isTertiary: true,
};

export const Small = Template.bind({});
Small.args = {
  isSmall: true,
};

export const WithIcon = TemplateWithImage.bind({});
WithIcon.args = {
  isTertiary: true,
  isSmall: true,
};
