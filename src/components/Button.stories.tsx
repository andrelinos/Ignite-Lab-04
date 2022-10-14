import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSolidProps, ButtonOutlineProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button.Solid,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonSolidProps>;

export const Default: StoryObj<ButtonSolidProps> = {};

export const ButtonOutline: StoryObj<ButtonOutlineProps> = {
  args: {
    children: 'Create',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
