import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiStackProps, MuiProps>;

export interface StackProps extends OmittedProps {
  children: React.ReactNode;
}

export const Stack: React.FC<StackProps> = MuiStack;
