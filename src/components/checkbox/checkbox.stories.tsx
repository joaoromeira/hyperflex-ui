import { StoryFn, Meta } from '@storybook/react';

import { Checkbox as CheckboxComponent } from './checkbox';
import { CheckboxProps } from './checkbox.types';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    direction: {
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

const Template: StoryFn = (args: CheckboxProps) => {
  return <CheckboxComponent {...args} />;
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  label: 'One',
  disabled: false,
  direction: 'left',
  defaultChecked: true,
};
