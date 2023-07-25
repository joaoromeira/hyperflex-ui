import { ChangeEvent } from 'react';

import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';

import { Radio as RadioComponent, RadioGroup } from './radio';

export default {
  title: 'Components/Radio',
  argTypes: {
    labelPlacement: {
      options: ['top', 'bottom', 'start', 'end'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<any> = ({ labelPlacement, disabled, ...args }) => {
  const [{ value = 'female' }, updateArgs] = useArgs();

  const handleOnChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => updateArgs({ value });

  return (
    <RadioGroup id="gender" value={value} onChange={handleOnChange} {...args}>
      <RadioComponent
        label="Female"
        value="female"
        labelPlacement={labelPlacement}
        disabled={disabled}
      />
      <RadioComponent
        label="Male"
        value="male"
        labelPlacement={labelPlacement}
        disabled={disabled}
      />
      <RadioComponent
        label="Other"
        value="other"
        labelPlacement={labelPlacement}
        disabled={disabled}
      />
    </RadioGroup>
  );
};

export const Radio = Template.bind({});

Radio.args = {
  row: true,
  disabled: false,
  labelPlacement: 'end',
  label: 'Gender',
};
