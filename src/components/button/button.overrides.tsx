import { Components, Theme } from '@mui/material';

export const Button = (theme: Theme): Pick<Components, 'MuiButton'> => {
  return {
    MuiButton: {
      defaultProps: {
        size: 'normal',
      },
      styleOverrides: {
        root: {
          fontWeight: theme.typography.fontWeightMedium,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedInherit: {
          border: 'none',
        },
      },
    },
  };
};
