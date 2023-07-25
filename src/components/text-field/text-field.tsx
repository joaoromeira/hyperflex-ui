import React from 'react';

import {
  FormControl as MuiFormControl,
  TextField as _MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { SpacingProps } from '@mui/system';
import { switchProp } from 'styled-tools';

import { withUtility } from '../../foundation/utils';
import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiTextFieldProps, MuiProps | 'margin'>;

export interface TextFieldProps extends OmittedProps, SpacingProps {
  size?: 'small' | 'normal';
  shrink?: boolean;
  disabled?: boolean;
}

const FormControl = styled(MuiFormControl)`
  height: ${switchProp('size', {
    small: '24px',
    normal: '32px',
  })};
`;

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
    </FormControl>
  );
};
