import { LoadingButtonProps } from '@mui/lab';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

declare module '@mui/material' {
  interface ButtonPropsVariantOverrides {
    filled: unknown;
  }
}

type MuiButtonProps = LoadingButtonProps;

type OmittedProps = Omit<MuiButtonProps, MuiProps | 'color' | 'variant'>;

export interface ButtonProps extends SpacingProps, OmittedProps {
  children?: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  hierarchy?: 'primary' | 'secondary';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}
