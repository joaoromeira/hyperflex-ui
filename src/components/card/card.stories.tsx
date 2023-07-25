import { StoryFn, Meta } from '@storybook/react';

import { Card as CardComponent } from './card';
import { CardProps } from './card.types';

export default {
  title: 'Components/Card',
  argTypes: {
    variant: {
      options: ['filled', 'outlined'],
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

const Template: StoryFn = (args: CardProps) => {
  return <CardComponent {...args} />;
};

export const Card = Template.bind({});

Card.args = {
  variant: 'filled',
  disabled: false,
  selected: false,
  hasHover: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};
