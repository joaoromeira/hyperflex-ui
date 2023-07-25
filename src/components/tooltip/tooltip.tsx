/* eslint-disable react/display-name */
import { forwardRef, useState } from 'react';

import {
  ClickAwayListener,
  Tooltip as MuiTooltip,
  tooltipClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { palette, shouldNotForwardProps } from '../../foundation/utils';
import { TooltipProps } from './tooltip.types';

export const Container: React.FC<TooltipProps> = styled(
  forwardRef(({ className, ...props }: TooltipProps, ref) => (
    <MuiTooltip ref={ref} {...props} classes={{ popper: className }} />
  )),
  {
    shouldForwardProp: shouldNotForwardProps,
  }
)<TooltipProps>`
  .${tooltipClasses.tooltip} {
    background-color: ${palette('onSurfaceVariant')};
    color: ${palette('surfaceVariant')};
    font-weight: 500;
    font-size: 16px;
  }

  .${tooltipClasses.arrow} {
    color: ${palette('onSurfaceVariant')};
  }
`;

const Content = styled('div')`
  display: inline;
`;

export const Tooltip = (props: TooltipProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return props.trigger === 'hover' ? (
    <Container {...props} />
  ) : (
    <ClickAwayListener onClickAway={handleClose}>
      <Container
        {...props}
        onClose={handleClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <Content onClick={handleOpen}>{props.children}</Content>
      </Container>
    </ClickAwayListener>
  );
};
