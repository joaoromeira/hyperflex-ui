import { ChipProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<ChipProps, MuiProps | 'variant'>;

export interface TagProps extends SpacingProps, OmittedProps {
  variant?: 'neutral' | 'positive' | 'attention' | 'negative' | 'informative';
  iconPosition?: 'left' | 'right';
}
