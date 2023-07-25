import { Meta, StoryFn } from '@storybook/react';

import { TextField as TextFieldComponent, TextFieldProps } from './text-field';

export default {
  title: 'Components/Text Field',
  argTypes: {
    size: {
      options: ['small', 'normal'],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      isCodeExpanded: true,
    },
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as Meta;

const Template: StoryFn<TextFieldProps> = ({ ...args }) => (
  <TextFieldComponent {...args} />
);

export const TextField = Template.bind({});

TextField.args = {
  disabled: false,
  error: false,
  fullWidth: false,
  label: 'Label',
};
