import { StoryFn, Meta } from '@storybook/react';

import { Button } from '../button/button';
import { Popover as PopoverComponent, PopoverItem } from './popover';
import { PopoverProps } from './popover.types';

export default {
  title: 'Components/Popover',
  argTypes: {},
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as Meta;

const Template: StoryFn<PopoverProps> = (args) => {
  return (
    <PopoverComponent
      {...args}
      items={({ close }) => (
        <>
          <PopoverItem onClick={close}>Option 1</PopoverItem>
          <PopoverItem onClick={close}>Option 2</PopoverItem>
          <PopoverItem onClick={close}>Option 3</PopoverItem>
        </>
      )}
    >
      <Button variant="filled" hierarchy="primary" size="small">
        Click me
      </Button>
    </PopoverComponent>
  );
};

export const Popover = Template.bind({});

Popover.args = {};
