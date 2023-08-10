import { LoadingButtonProps as MuiButtonProps } from '@mui/lab';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

declare module '@mui/material' {
  interface ButtonPropsVariantOverrides {
    filled: unknown;
  }
  interface ButtonPropsSizeOverrides {
    normal: unknown;
    medium: false;
  }
}

type OmittedProps = Omit<MuiButtonProps, MuiProps | 'color' | 'variant'>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Icon = React.ReactNode;

export interface ButtonProps extends SpacingProps, OmittedProps {
  children?: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  hierarchy?:
    | 'primary'
    | 'secondary'
    | 'positive'
    | 'attention'
    | 'negative'
    | 'informative';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: Icon;
  iconPosition?: 'left' | 'right';
}

export type IconProps = {
  startIcon?: Icon;
  endIcon?: Icon;
};
