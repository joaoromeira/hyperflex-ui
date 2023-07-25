import { StoryFn, Meta } from '@storybook/react';

import { Button, Text } from '../components';
import {
  Modal as ModalComponent,
  ModalActions,
  ModalDescription,
  ModalTitle,
} from './modal';
import { ModalProps } from './modal.types';

export default {
  title: 'Components/Modal',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'full'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: StoryFn<ModalProps> = (args: ModalProps) => {
  return (
    <ModalComponent {...args}>
      <>
        <ModalTitle>
          <Text variant="h3">Heading 3</Text>
        </ModalTitle>

        <ModalDescription>
          <Text variant="body2">Body 2</Text>
        </ModalDescription>

        <ModalActions align="right">
          <Button variant="outlined" marginRight={4}>
            Medium
          </Button>
          <Button variant="filled" hierarchy="primary">
            Medium
          </Button>
        </ModalActions>
      </>
    </ModalComponent>
  );
};

export const Modal = Template.bind({});

Modal.args = {
  open: true,
  size: 'medium',
};
