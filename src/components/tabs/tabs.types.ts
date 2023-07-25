import { TabsProps as MuiTabsProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

declare module '@mui/material' {
  interface TabsPropsVariantOverrides {
    filled: unknown;
  }
}

type OmittedProps = Omit<MuiTabsProps, MuiProps>;

export interface TabsProps extends SpacingProps, OmittedProps {}
