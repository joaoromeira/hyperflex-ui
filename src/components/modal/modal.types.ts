import { ModalProps as MuiModalProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { Size } from '../components';
import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiModalProps, MuiProps>;

export interface ModalProps extends SpacingProps, OmittedProps {
  children: React.ReactElement;
  size?: Size;
  close?: () => void;
}

export type ModalActionsProps = {
  children: React.ReactNode;
  align: 'left' | 'center' | 'right';
};
