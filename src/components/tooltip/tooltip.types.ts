import { TooltipProps as MuiTooltipProps } from '@mui/material';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiTooltipProps, MuiProps>;

export interface TooltipProps extends OmittedProps {
  trigger: 'hover' | 'click';
}
