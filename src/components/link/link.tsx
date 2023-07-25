import { Link as MuiLink } from '@mui/material';
import { css, styled } from '@mui/material/styles';
import { alpha } from '@mui/system';

import { withUtility } from '../../foundation/utils';
import { LinkProps } from './link.types';

export const Link: React.FC<LinkProps> = styled(MuiLink)<LinkProps>`
  ${withUtility<LinkProps>(({ palette }, { disabled }) => {
    if (disabled) {
      return css`
        pointer-events: none;
        cursor: default;
        text-decoration: underline;
        color: ${alpha(palette('onSurface'), 0.38)};
      `;
    }
    return css`
      color: ${palette('primary')};
    `;
  })}
  underline: always;
`;
