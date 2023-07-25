import {
  MenuListProps as MuiMenuListProps,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedMenuListProps = Omit<MuiMenuListProps, MuiProps>;

export interface MenuListProps extends SpacingProps, OmittedMenuListProps {}

type OmittedMenuItemProps = Omit<MuiMenuItemProps, MuiProps>;

export interface MenuItemProps extends SpacingProps, OmittedMenuItemProps {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}
