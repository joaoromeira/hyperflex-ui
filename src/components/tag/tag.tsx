import { Chip } from '@mui/material';
import { css, styled } from '@mui/material/styles';
import { spacing } from '@mui/system';
import { switchProp } from 'styled-tools';

import { withUtility } from '../../foundation/utils';
import { TagProps } from './tag.types';

export const Tag = styled(Chip)<TagProps>`
  ${spacing};

  height: ${switchProp('size', {
    small: '28px',
    medium: '36px',
  })};

  border-radius: ${switchProp('size', {
    small: '14px',
    medium: '18px',
  })};

  font-size: ${switchProp('size', {
    small: '12px',
    medium: '14px',
  })};
  ${withUtility<TagProps>(({ palette }, { hierarchy }) => {
    switch (true) {
      case hierarchy === 'neutral':
        return css`
          background-color: ${palette('surfaceVariant')};
          color: ${palette('onSurfaceVariant')};
        `;
      case hierarchy === 'positive':
        return css`
          background-color: ${palette('successContainer')};
          color: ${palette('onSuccessContainer')};
        `;
      case hierarchy === 'attention':
        return css`
          background-color: ${palette('warningContainer')};
          color: ${palette('onWarningContainer')};
        `;
      case hierarchy === 'negative':
        return css`
          background-color: ${palette('errorContainer')};
          color: ${palette('onErrorContainer')};
        `;
      case hierarchy === 'informative':
        return css`
          background-color: ${palette('infoContainer')};
          color: ${palette('onInfoContainer')};
        `;
      default:
        return css``;
    }
  })};

  .MuiChip-icon {
    margin-right: ${switchProp('iconPosition', {
      left: '-6px',
      right: '5px',
    })};
    margin-left: ${switchProp('iconPosition', {
      left: '5px',
      right: '-6px',
    })};
    order: ${switchProp('iconPosition', {
      left: 0,
      right: 1,
    })};
  }
`;
