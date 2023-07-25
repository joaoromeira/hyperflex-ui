import { ComponentsPropsList } from '@mui/material';

import { Tokens } from '../../foundation/theme/tokens/tokens.types';
import { MuiProps } from '../components.types';

declare module '@mui/material' {
  interface TypographyPropsVariantOverrides {
    display1: unknown;
    display2: unknown;
    display3: unknown;
  }
}

type MuiTextProps = ComponentsPropsList['MuiTypography'];

type OmittedProps = Omit<MuiTextProps, MuiProps | 'variant'>;

type Color = keyof Tokens;

export interface TextProps extends OmittedProps {
  component?: React.ElementType;
  variant?:
    | 'display1'
    | 'display2'
    | 'display3'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'caption';
  color?: Color;
}
