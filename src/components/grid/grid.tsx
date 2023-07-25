import { ComponentsPropsList, Grid as MuiGrid } from '@mui/material';

import { MuiProps } from '../components.types';

type MuiGridProps = ComponentsPropsList['MuiGrid'];

type OmittedProps = Omit<MuiGridProps, MuiProps>;

export interface GridProps extends OmittedProps {
  children?: React.ReactNode;
}

export const Grid: React.FC<GridProps> = MuiGrid;
