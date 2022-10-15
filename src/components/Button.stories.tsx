import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: 'solid',
    children: 'I have account',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const ButtonOutline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
    children: 'I have account',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const ButtonLink: StoryObj<ButtonProps> = {
  args: {
    variant: 'link',
    children: 'Expand list',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
