import { ComponentsPropsList } from '@mui/material';

import { MuiProps } from '../components.types';

type MuiTextProps = ComponentsPropsList['MuiLink'];

type OmittedProps = Omit<MuiTextProps, MuiProps>;

export interface LinkProps extends OmittedProps {
  disabled?: boolean;
}
