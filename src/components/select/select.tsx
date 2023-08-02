import React from 'react';

import {
  Select as MuiSelect,
  InputLabel,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';
import { FormControl } from '../form-control/form-control';

type OmittedProps = Omit<MuiSelectProps, MuiProps | 'margin'>;

export interface SelectProps extends OmittedProps, SpacingProps {
  size?: 'small' | 'normal';
  children: React.ReactNode;
  label?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Select = ({
  children,
  size,
  label,
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
  ...props
}: SelectProps) => {
  return (
    <FormControl
      size={size}
      error={props.error}
      disabled={props.disabled}
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
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect size={size} {...props} label={label}>
        {children}
      </MuiSelect>
    </FormControl>
  );
};
