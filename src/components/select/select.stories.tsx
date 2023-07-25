import { useState } from 'react';

import { SelectChangeEvent } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';

import { MenuItem } from '../components';
import { Select as SelectComponent, SelectProps } from './select';

export default {
  title: 'Components/Select',
  argTypes: {
    size: {
      options: ['small', 'normal'],
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

const Template: StoryFn<SelectProps> = (args) => (
  <SelectComponent {...args}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </SelectComponent>
);

export const Select = Template.bind({});

Select.args = {
  label: 'Select',
  disabled: false,
  fullWidth: false,
  error: false,
};

export const SelectMultiple = (args: SelectProps) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value },
    } = event;
    const v = typeof value === 'string' ? value.split(',') : value;
    setValue(v as string[]);
  };
  return <Template {...args} value={value} onChange={handleChange} />;
};

SelectMultiple.storyName = 'Multiple values';

SelectMultiple.args = {
  label: 'Select',
  disabled: false,
  fullWidth: false,
  error: false,
  value: [],
  multiple: true,
};
