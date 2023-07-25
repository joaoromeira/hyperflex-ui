import { createTheme } from '@mui/material/styles';

import { makeComponents } from './components';
import { makePalette } from './tokens/palette';
import { TOKENS_DARK, TOKENS_LIGHT } from './tokens/tokens';
import { typography } from './typography';

export type { Theme } from '@mui/material/styles';

export const theme = {
  light: createTheme({
    typography,
    palette: makePalette('light', TOKENS_LIGHT),
    spacing: 4,
  }),
  dark: createTheme({
    typography,
    palette: makePalette('dark', TOKENS_DARK),
    spacing: 4,
  }),
};

theme.light.components = makeComponents(theme.light);
theme.dark.components = makeComponents(theme.dark);
