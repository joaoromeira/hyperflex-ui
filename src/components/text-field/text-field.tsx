import {
  TextField as _MuiTextField,
  FormHelperText,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { SpacingProps } from '@mui/system';

import { withUtility } from '../../foundation/utils';
import { MuiProps } from '../components.types';
import { FormControl } from '../form-control/form-control';

type OmittedProps = Omit<MuiTextFieldProps, MuiProps | 'margin'>;

export interface TextFieldProps extends OmittedProps, SpacingProps {
  size?: 'small' | 'normal';
  shrink?: boolean;
  disabled?: boolean;
}

const MuiTextField = styled(_MuiTextField)(
  withUtility(
    ({ palette }) => css`
      .MuiOutlinedInput-root fieldset {
        border-color: ${palette('outline')};
      }
    `
  )
);

export const TextField = ({
  shrink = undefined,
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
  helperText,
  ...props
}: TextFieldProps) => {
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
      fullWidth={props.fullWidth}
      size={size}
      error={props.error}
      disabled={props.disabled}
    >
      <MuiTextField
        {...props}
        size={size}
        InputLabelProps={{ shrink: shrink ? true : undefined }}
        label={label}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
