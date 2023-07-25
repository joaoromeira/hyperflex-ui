import { DividerProps as MuiDividerProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiDividerProps, MuiProps>;

export interface DividerProps extends SpacingProps, OmittedProps {
  hierarchy?: 'primary' | 'secondary';
  orientation?: 'vertical' | 'horizontal';
}
