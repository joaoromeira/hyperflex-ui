import { StoryFn, Meta } from '@storybook/react';

import { Switch as SwitchComponent } from './switch';
import { SwitchProps } from './switch.types';

export default {
  title: 'Components/Switch',
  argTypes: {
    size: {
      options: ['small', 'normal'],
      control: {
        type: 'select',
      },
    },
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

const Template: StoryFn = (args: SwitchProps) => {
  return <SwitchComponent {...args} />;
};

export const Switch = Template.bind({});

Switch.args = {
  label: 'Option',
  disabled: false,
  direction: 'left',
  defaultChecked: true,
};
