import React from 'react';

import { Modal as MuiDialog } from '@mui/material';
import { styled } from '@mui/material/styles';

import { shouldNotForwardProps } from '../../foundation/utils';
import { Stack } from '../components';
import { Content } from '../modal/content';
import { DialogActionsProps, DialogProps } from './dialog.types';

const Overlay = styled(MuiDialog, {
  shouldForwardProp: shouldNotForwardProps,
})<DialogProps>``;

export const DialogActions = ({
  children,
  align = 'right',
}: DialogActionsProps) => (
  <Stack marginTop={9} flexDirection="row" justifyContent={align}>
    {children}
  </Stack>
);

export const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <Stack marginBottom={3} flexDirection="row">
    {children}
  </Stack>
);

export const DialogDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => <Stack flexDirection="row">{children}</Stack>;

export const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return (
    <Overlay {...props}>
      <Content size={props.size}>{children}</Content>
    </Overlay>
  );
};
