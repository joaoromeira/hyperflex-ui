import { Components } from '@mui/material';

export const Tag = (): Pick<Components, 'MuiChip'> => {
  return {
    MuiChip: {
      defaultProps: {
        size: 'medium',
      },
    },
  };
};
