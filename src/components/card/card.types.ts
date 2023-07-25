import { SpacingProps } from '@mui/system';

export interface CardProps extends SpacingProps {
  variant?: 'filled' | 'outlined';
  disabled?: boolean;
  hasHover?: boolean;
  onClick?: () => void;
  selected?: boolean;
  fullWidth?: boolean;
  maxWidth?: number | string;
}
