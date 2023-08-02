import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { useUtility } from 'src/hooks';

import { TextField } from '../components';
import { FormControl } from '../form-control/form-control';
import { DatePickerProps } from './date-picker.types';

// Adapter
export { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Localization provider
export { LocalizationProvider } from '@mui/x-date-pickers';
export type { LocalizationProviderProps } from '@mui/x-date-pickers';

export const DatePicker: React.FC<DatePickerProps> = ({
  error,
  fullWidth,
  disabled,
  size = 'normal',
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  m,
  marginX,
  marginY,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  label,
  ...props
}) => {
  const { isLight, alpha, palette } = useUtility();

  const paperStyle: SxProps<Theme> = {
    '.Mui-selected': {
      backgroundColor: `${palette(
        isLight ? 'primaryContainer' : 'primary'
      )} !important`,
      color: `${palette(
        isLight ? 'onPrimaryContainer' : 'onPrimary'
      )} !important`,
      border: `1.5px solid
        ${palette(isLight ? 'onPrimaryContainer' : 'onPrimary')} !important`,

      '&:hover': {
        backgroundColor: `${alpha(
          palette(isLight ? 'primaryContainer' : 'primary'),
          0.8
        )} !important`,
      },
    },
  };

  return (
    <FormControl
      sx={{
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        m,
        marginX,
        marginY,
        mb,
        ml,
        mt,
        mr,
        mx,
        my,
      }}
      fullWidth={fullWidth}
      size={size}
      error={error}
      disabled={disabled}
    >
      <MuiDatePicker
        {...props}
        disabled={disabled}
        slots={{
          textField: TextField,
        }}
        slotProps={{
          mobilePaper: {
            sx: paperStyle,
          },
          desktopPaper: {
            sx: paperStyle,
          },
          textField: {
            size,
            fullWidth,
            error,
            disabled,
          },
        }}
        label={label}
      />
    </FormControl>
  );
};
