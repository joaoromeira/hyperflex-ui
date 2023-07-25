import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme, useUtility } from '../src/index';
import './assets/index.css';

const { dark, light } = theme;

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      showName: true,
    },
  },
};

const Background = () => {
  const { palette } = useUtility();

  const styleContent = `
    .docs-story {
      background-color: ${palette('background')};
    }
  `;

  return <style>{styleContent}</style>;
};

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={context.globals.theme === 'light' ? light : dark}>
        <Background />
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];
