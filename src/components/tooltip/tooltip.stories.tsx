import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { StoryFn, Meta } from '@storybook/react';

import { Tooltip as TooltipComponent } from './tooltip';
import { TooltipProps } from './tooltip.types';

export default {
  title: 'Components/Tooltip',
  argTypes: {
    placement: {
      options: ['top', 'left', 'right', 'bottom'],
      control: {
        type: 'select',
      },
    },
    trigger: {
      options: ['hover', 'click'],
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

const Template: StoryFn<TooltipProps> = (args) => {
  return (
    <TooltipComponent {...args}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </TooltipComponent>
  );
};

export const Tooltip = Template.bind({});

Tooltip.args = {
  arrow: true,
  placement: 'top',
  trigger: 'hover',
  title: 'Delete',
};
