import { ChipProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<ChipProps, MuiProps | 'color' | 'variant'>;

export interface TagProps extends SpacingProps, OmittedProps {
  iconPosition?: 'left' | 'right';
  hierarchy?: 'neutral' | 'positive' | 'attention' | 'negative' | 'informative';
}
