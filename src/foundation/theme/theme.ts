import { PaletteMode, createTheme } from '@mui/material';
import { merge } from 'lodash';

import { makeComponents } from './components';
import { makePalette } from './tokens/palette';
import { TOKENS_DARK, TOKENS_LIGHT } from './tokens/tokens';
import { Tokens } from './tokens/tokens.types';
import { typography } from './typography';

export type { Theme } from '@mui/material/styles';

export type CustomTheme = {
  light?: Partial<Tokens>;
  dark?: Partial<Tokens>;
};

const mountTheme = (mode: PaletteMode, tokens: Tokens) =>
  createTheme({
    typography,
    palette: makePalette(mode, tokens),
    spacing: 4,
  });

export const theme = {
  dark: mountTheme('dark', TOKENS_DARK),
  light: mountTheme('light', TOKENS_LIGHT),
};

theme.light.components = makeComponents(theme.light);
theme.dark.components = makeComponents(theme.dark);

export const customTheme = ({ dark = {}, light = {} }: CustomTheme) => {
  theme.dark = mountTheme('dark', merge(TOKENS_DARK, dark));
  theme.light = mountTheme('light', merge(TOKENS_LIGHT, light));

  theme.light.components = makeComponents(theme.light);
  theme.dark.components = makeComponents(theme.dark);

  return theme;
};
