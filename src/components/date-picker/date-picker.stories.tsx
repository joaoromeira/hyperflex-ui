import { StoryFn, Meta } from '@storybook/react';

import {
  DatePicker as DatePickerComponent,
  LocalizationProvider,
  AdapterDateFns,
} from './date-picker';

export default {
  title: 'Components/DatePicker',
  argTypes: {
    size: {
      options: ['small', 'normal'],
      control: {
        type: 'select',
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
    error: {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<any> = (args) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerComponent {...args} label="DatePicker" />
    </LocalizationProvider>
  );
};

export const DatePicker = Template.bind({});

DatePicker.args = {
  size: 'medium',
};
