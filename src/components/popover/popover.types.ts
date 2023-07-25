import React from 'react';

import { MenuProps as MuiMenuProps } from '@mui/material';
import { SpacingProps } from '@mui/system';

import { MuiProps } from '../components.types';

type OmittedProps = Omit<MuiMenuProps, MuiProps | 'open'>;

export interface PopoverProps extends SpacingProps, OmittedProps {
  items: ({ close }: { close: () => void }) => React.ReactElement;
}
