import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiCheckboxProps, MuiProps>;

export interface CheckboxProps extends SpacingProps, OmittedProps {
  label?: string;
  direction?: 'left' | 'right';
}
