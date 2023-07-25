import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Box from '@mui/material/Box';
import { Meta, StoryFn } from '@storybook/react';

import { Divider } from '../components';
import { MenuItem, MenuList as MenuListComponent } from './menu-list';
import { MenuItemProps } from './menu-list.types';

export default {
  title: 'Components/MenuList',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    divider: {
      control: {
        type: 'boolean',
      },
    },
    startIcon: {
      control: {
        type: 'boolean',
      },
    },
    endIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    previewMenu: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as Meta;

interface StoryProps extends MenuItemProps {
  divider?: boolean;
}

const Template: StoryFn<StoryProps> = (args: MenuItemProps) => {
  return (
    <Box sx={{ width: '220px' }}>
      <MenuListComponent>
        <MenuItem
          disabled={args.disabled}
          startIcon={args.startIcon && <AccountBalanceOutlinedIcon />}
          endIcon={args.endIcon && <ArrowRightOutlinedIcon />}
        >
          List item
        </MenuItem>
        <MenuItem
          disabled={args.disabled}
          startIcon={args.startIcon && <AccountBalanceOutlinedIcon />}
          endIcon={args.endIcon && <ArrowRightOutlinedIcon />}
        >
          List item
        </MenuItem>
        {args.divider && <Divider />}
        <MenuItem
          disabled={args.disabled}
          startIcon={args.startIcon && <AccountBalanceOutlinedIcon />}
          endIcon={args.endIcon && <ArrowRightOutlinedIcon />}
        >
          List item
        </MenuItem>
      </MenuListComponent>
    </Box>
  );
};

export const MenuList = Template.bind({});

MenuList.args = {};
