import { PaletteMode, createTheme } from '@mui/material';

import { makeComponents } from './components';
import { makePalette } from './tokens/palette';
import { TOKENS_DARK, TOKENS_LIGHT } from './tokens/tokens';
import { Tokens } from './tokens/tokens.types';
import { typography } from './typography';

export type { Theme } from '@mui/material/styles';

export type CreateMyTheme = {
  light: Partial<Tokens>;
  dark: Partial<Tokens>;
};

const mountTheme = (mode: PaletteMode, tokens: Tokens) =>
  createTheme({
    typography,
    palette: makePalette(mode, tokens),
    spacing: 4,
  });

export const createMyTheme = ({ dark, light }: CreateMyTheme) => ({
  dark: mountTheme('dark', { ...TOKENS_DARK, ...dark }),
  light: mountTheme('light', { ...TOKENS_LIGHT, ...light }),
});

export const theme = {
  dark: mountTheme('dark', TOKENS_DARK),
  light: mountTheme('light', TOKENS_LIGHT),
};

theme.light.components = makeComponents(theme.light);
theme.dark.components = makeComponents(theme.dark);
