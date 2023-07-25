import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    display1: TypographyStyleOptions;
    display2: TypographyStyleOptions;
    display3: TypographyStyleOptions;
  }
}

export const typography: TypographyOptions = {
  fontFamily: ['Satoshi', 'value-serif-regular'].join(','),
  display1: {
    fontSize: 96,
    fontWeight: 700,
    lineHeight: '104px',
  },
  display2: {
    fontSize: 64,
    fontWeight: 700,
    lineHeight: '72px',
  },
  display3: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: '56px',
  },
  h1: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: '44px',
  },
  h2: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: '32px',
  },
  h3: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '32px',
  },
  h4: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '28px',
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
  },
  body2: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
  },
  caption: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '16px',
  },
};
