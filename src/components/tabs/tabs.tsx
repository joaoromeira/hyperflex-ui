import { Tabs as MuiTabs, Tab as MuiTab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { spacing } from '@mui/system';

import { shouldNotForwardProps } from '../../foundation/utils';
import { TabsProps } from './tabs.types';

export const Tabs: React.FC<TabsProps> = styled(MuiTabs, {
  shouldForwardProp: shouldNotForwardProps,
})<TabsProps>`
  ${spacing};
`;

export const Tab = MuiTab;
