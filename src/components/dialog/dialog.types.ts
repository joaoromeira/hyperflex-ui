import { DialogProps as MuiDialogProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiDialogProps, MuiProps>;

export type Size = 'full' | 'medium' | 'small' | 'large';

export type ContentProps = { size?: Size };

export interface DialogProps extends SpacingProps, OmittedProps {
  children: React.ReactElement;
  size?: Size;
}

export type DialogActionsProps = {
  children: React.ReactNode;
  align: 'left' | 'center' | 'right';
};
