import { Components } from '@mui/material';

export const Divider = (): Pick<Components, 'MuiDivider'> => {
  return {
    MuiDivider: {
      defaultProps: {
        orientation: 'horizontal',
      },
    },
  };
};
