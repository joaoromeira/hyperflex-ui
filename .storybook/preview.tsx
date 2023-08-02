import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../src/index';
import './assets/index.css';

const { dark, light } = theme;

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',

    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: ['light', 'dark'],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={context.globals.theme === 'light' ? light : dark}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];
