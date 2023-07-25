import React from 'react';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Modal as MuiModal } from '@mui/material';
import { styled } from '@mui/material/styles';

import { shouldNotForwardProps, spacing } from '../../foundation/utils';
import { Stack } from '../components';
import { Content } from './content';
import { ModalActionsProps, ModalProps } from './modal.types';

const Overlay = styled(MuiModal, {
  shouldForwardProp: shouldNotForwardProps,
})<ModalProps>``;

const CloseIcon = styled(CloseOutlinedIcon)`
  position: absolute;
  right: ${spacing(10)};
  top: ${spacing(10)};
  cursor: pointer;
`;

export const ModalActions = ({
  children,
  align = 'right',
}: ModalActionsProps) => (
  <Stack marginTop={9} flexDirection="row" justifyContent={align}>
    {children}
  </Stack>
);

export const ModalTitle = ({ children }: { children: React.ReactNode }) => (
  <Stack marginBottom={3} flexDirection="row">
    {children}
  </Stack>
);

export const ModalDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => <Stack flexDirection="row">{children}</Stack>;

export const ModalContent = ({ children }: { children: React.ReactNode }) => (
  <Stack marginTop={6} flexDirection="row">
    {children}
  </Stack>
);

export const Modal: React.FC<ModalProps> = ({ children, close, ...props }) => (
  <Overlay {...props}>
    <Content size={props.size}>
      <CloseIcon onClick={close} />
      {children}
    </Content>
  </Overlay>
);
