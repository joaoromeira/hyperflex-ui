import React from 'react';

import {
  RadioGroupProps as MuiRadioGroupProps,
  FormControlLabelProps as MuiFormControlLabel,
} from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiRadioGroupProps, MuiProps | 'margin'>;

export interface RadioGroupProps extends OmittedProps, SpacingProps {
  label?: React.ReactNode;
  id?: string | undefined;
}

export type RadioProps = Omit<MuiFormControlLabel, 'control'>;
