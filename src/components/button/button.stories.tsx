import { StoryFn, Meta } from '@storybook/react';

import { Button as ButtonComponent } from './button';
import { ButtonProps } from './button.types';

export default {
  title: 'Components/Button',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    hierarchy: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['filled', 'outlined', 'text'],
      control: {
        type: 'select',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as Meta;

const Template: StoryFn = (args: ButtonProps) => {
  return <ButtonComponent {...args}>Button</ButtonComponent>;
};

export const Button = Template.bind({});

Button.args = {
  hierarchy: 'primary',
  variant: 'filled',
  size: 'medium',
};
