import { SwitchProps as MuiSwitchProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiSwitchProps, MuiProps>;

export interface SwitchProps extends SpacingProps, OmittedProps {
  label?: string;
  direction?: 'left' | 'right';
}
