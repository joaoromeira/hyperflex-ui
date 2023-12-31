import SendIcon from '@mui/icons-material/Send';
import { StoryFn, Meta } from '@storybook/react';

import { Button as ButtonComponent } from './button';
import { ButtonProps } from './button.types';

export default {
  title: 'Components/Button',
  argTypes: {
    size: {
      options: ['small', 'normal', 'large'],
      control: {
        type: 'select',
      },
    },
    hierarchy: {
      options: [
        'primary',
        'secondary',
        'positive',
        'attention',
        'negative',
        'informative',
      ],
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
    icon: {
      control: {
        type: 'boolean',
      },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: {
        type: 'select',
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
  return (
    <ButtonComponent {...args} icon={args.icon ? <SendIcon /> : undefined}>
      Button
    </ButtonComponent>
  );
};

export const Button = Template.bind({});

Button.args = {
  hierarchy: 'primary',
  variant: 'filled',
  size: 'normal',
};
