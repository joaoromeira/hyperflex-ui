import { Theme as MuiTheme } from '@mui/material/styles';
import {
  Breakpoints,
  Spacing,
  alpha as _alpha,
  useTheme as _useTheme,
} from '@mui/system';

import { Tokens } from '../foundation/theme/tokens/tokens.types';
import { _palette } from '../foundation/utils';
export { ThemeProvider, styled } from '@mui/material/styles';

type Utility = {
  alpha: (color: string, value: number) => string;
  spacing: Spacing;
  breakpoints: Breakpoints;
  palette: (token: keyof Tokens) => string;
  isLight: boolean;
};

export const useUtility = (): Utility => {
  const theme = _useTheme<MuiTheme>();
  return {
    alpha: _alpha,
    spacing: theme.spacing,
    breakpoints: theme.breakpoints,
    palette: _palette({ theme }),
    isLight: theme.palette.mode === 'light',
  };
};
