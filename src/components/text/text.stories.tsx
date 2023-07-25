import { StoryFn } from '@storybook/react';

import { TOKENS_DARK } from '../../foundation/theme/tokens/tokens';
import { Text as TextComponent } from './text';
import { TextProps } from './text.types';

export default {
  title: 'Components/Text',
  argTypes: {
    variant: {
      options: [
        'display1',
        'display2',
        'display3',
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'body2',
        'caption',
      ],
      control: {
        type: 'select',
      },
    },
    color: {
      options: Object.keys(TOKENS_DARK),
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
};
const Template: StoryFn = (args: TextProps) => {
  return (
    <TextComponent {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </TextComponent>
  );
};

export const Text = Template.bind({});

Text.args = {
  variant: 'h1',
};
