import { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  ButtonRootProps,
  ButtonSolidProps,
  ButtonOutlineProps,
} from './Button';

export default {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    children: [
      <Button.Root>
        <Button.Solid>Create account</Button.Solid>
      </Button.Root>,
    ],
  },
  argTypes: {},
} as Meta<ButtonRootProps>;

export const Default: StoryObj<ButtonSolidProps> = {};

export const ButtonOutline: StoryObj<ButtonOutlineProps> = {
  args: {
    children: [
      <Button.Root>
        <Button.Outline>Create account</Button.Outline>
      </Button.Root>,
    ],
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
