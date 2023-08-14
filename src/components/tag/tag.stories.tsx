import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { StoryFn, Meta } from '@storybook/react';

import { Tag as TagComponent } from './tag';

export default {
  title: 'Components/Tag',
  argTypes: {
    hierarchy: {
      options: ['neutral', 'positive', 'attention', 'negative', 'informative'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['medium', 'small'],
      control: {
        type: 'select',
      },
    },
    icon: {
      control: {
        type: 'boolean',
      },
    },
    iconPosition: {
      options: ['left', 'right'],
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<any> = (args) => {
  return (
    <TagComponent
      {...args}
      label="Tag"
      icon={args.icon ? <AccountBalanceWalletOutlinedIcon /> : undefined}
    />
  );
};

export const Tag = Template.bind({});

Tag.args = {
  hierarchy: 'neutral',
  size: 'medium',
  icon: false,
  iconPosition: 'left',
};
