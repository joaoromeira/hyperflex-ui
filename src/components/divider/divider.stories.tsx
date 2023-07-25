import { StoryFn, Meta } from '@storybook/react';

import { Divider as DividerComponent } from './divider';
import { DividerProps } from './divider.types';

export default {
  title: 'Components/Divider',
  argTypes: {
    hierarchy: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
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

const Template: StoryFn = (args: DividerProps) => {
  return <DividerComponent {...args} />;
};

export const Divider = Template.bind({});

Divider.args = {
  hierarchy: 'primary',
  orientation: 'horizontal',
};
