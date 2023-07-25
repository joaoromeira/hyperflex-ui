import { useState } from 'react';

import { Menu as MuiMenu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

import { shouldNotForwardProps } from '../../foundation/utils';
import { PopoverProps } from './popover.types';

const Container = styled(MuiMenu, {
  shouldForwardProp: shouldNotForwardProps,
})``;

const Content = styled('div')`
  display: inline;
`;

export const Popover = (props: PopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Content onClick={handleOpen}>{props.children}</Content>

      <Container
        {...props}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
      >
        {props.items({ close: handleClose })}
      </Container>
    </>
  );
};

export const PopoverItem = MenuItem;
