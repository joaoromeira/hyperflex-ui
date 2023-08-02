import { SpacingProps } from '@mui/system';
import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';

import { MuiProps } from '../components.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OmittedProps = Omit<MuiDatePickerProps<any>, MuiProps | 'margin'>;

export interface DatePickerProps extends OmittedProps, SpacingProps {
  size?: 'small' | 'normal';
  disabled?: boolean;
  fullWidth?: boolean;
  shrink?: boolean;
  error?: boolean;
}
