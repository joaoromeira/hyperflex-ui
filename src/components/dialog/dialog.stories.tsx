import { StoryFn, Meta } from '@storybook/react';

import { Button, Text } from '../components';
import {
  Dialog as DialogComponent,
  DialogActions,
  DialogDescription,
  DialogTitle,
} from './dialog';
import { DialogProps } from './dialog.types';

export default {
  title: 'Components/Dialog',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'full'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: StoryFn<DialogProps> = (args: DialogProps) => {
  return (
    <DialogComponent {...args}>
      <>
        <DialogTitle>
          <Text variant="h3">Heading 3</Text>
        </DialogTitle>

        <DialogDescription>
          <Text variant="body2">Body 2</Text>
        </DialogDescription>

        <DialogActions align="right">
          <Button variant="outlined">Medium</Button>
        </DialogActions>
      </>
    </DialogComponent>
  );
};

export const Dialog = Template.bind({});

Dialog.args = {
  open: true,
  size: 'medium',
};
