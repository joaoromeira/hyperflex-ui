import { BoxProps as MuiBoxProps } from '@mui/material';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiBoxProps, MuiProps>;

export interface BoxProps extends OmittedProps {
  children: React.ReactNode;
}
