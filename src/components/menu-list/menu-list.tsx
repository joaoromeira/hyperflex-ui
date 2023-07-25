import {
  MenuItem as MuiMenuItem,
  MenuList as MuiMenuList,
  ListItemIcon,
} from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { alpha, spacing as muiSpacing } from '@mui/system';

import {
  shouldNotForwardProps,
  withUtility,
  spacing,
} from '../../foundation/utils';
import { MenuListProps, MenuItemProps } from './menu-list.types';

export const MenuList: React.FC<MenuListProps> = styled(MuiMenuList, {
  shouldForwardProp: shouldNotForwardProps,
})<MenuListProps>`
  ${muiSpacing};

  padding: ${spacing(2)};

  & .MuiMenuItem-root {
    min-height: 40px;
    border-radius: 8px;
    padding-left: ${spacing(2)};
    padding-right: ${spacing(2)};
  }

  & .MuiDivider-root {
    margin: ${spacing(2)};
  }

  ${withUtility<MenuListProps>(({ palette }) => {
    return css`
      color: ${palette('onSurfaceVariant')};
      & .MuiMenuItem-root:hover {
        background-color: ${alpha(palette('primary'), 0.08)};
      }
    `;
  })}
`;

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <MuiMenuItem {...props}>
      {props.startIcon && <ListItemIcon>{props.startIcon}</ListItemIcon>}
      {props.children}
      {props.endIcon && (
        <ListItemIcon sx={{ marginLeft: 'auto', minWidth: 'auto !important' }}>
          {props.endIcon}
        </ListItemIcon>
      )}
    </MuiMenuItem>
  );
};
