import { Divider as MuiDivider } from '@mui/material';
import { css, styled } from '@mui/material/styles';
import { spacing } from '@mui/system';

import { shouldNotForwardProps, withUtility } from '../../foundation/utils';
import { DividerProps } from './divider.types';

export const Divider: React.FC<DividerProps> = styled(MuiDivider, {
  shouldForwardProp: shouldNotForwardProps,
})<DividerProps>`
  ${spacing};

  ${withUtility<DividerProps>(({ palette }, { hierarchy }) => {
    switch (true) {
      case hierarchy === 'primary':
        return css`
          border-color: ${palette('outline')};
        `;
      case hierarchy === 'secondary':
        return css`
          border-color: ${palette('surfaceVariant')};
        `;
      default:
        return css``;
    }
  })}
`;
