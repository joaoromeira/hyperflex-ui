import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../src/index';
import { themes as storybookThemes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import './assets/index.css';

export const parameters = {
  darkMode: {
    current: 'light',
    normal: {
      ...storybookThemes.normal, // copy existing values
      appContentBg: theme.light.palette.background, // override main story view frame
    },
    dark: {
      ...storybookThemes.dark, // copy existing values
      appContentBg: theme.dark.palette.background, // override main story view frame
    },
  },
};

export const decorators = [
  (Story) => {
    const isDark = useDarkMode();

    return (
      <ThemeProvider theme={isDark ? theme.dark : theme.light}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];
