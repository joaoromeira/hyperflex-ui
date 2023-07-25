/* eslint-disable no-empty-pattern */
import { Stack } from '@mui/material';
import { css, styled } from '@mui/material/styles';
import { alpha, spacing as muiSpacing } from '@mui/system';

import {
  shouldNotForwardProps,
  withUtility,
  spacing,
} from '../../foundation/utils';
import { CardProps } from './card.types';

export const Card: React.FC<CardProps> = styled(Stack, {
  shouldForwardProp: shouldNotForwardProps,
})<CardProps>`
  ${muiSpacing};

  padding: ${spacing(6)};
  border-radius: 12px;

  ${withUtility<CardProps>(({}, { maxWidth }) => {
    if (maxWidth) {
      return css`
        max-width: ${maxWidth};
      `;
    }

    return css``;
  })}

  ${withUtility<CardProps>(({}, { fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
      `;
    }

    return css``;
  })}

  ${withUtility<CardProps>(({}, { onClick, disabled }) => {
    if (onClick && !disabled) {
      return css`
        cursor: pointer;
      `;
    }

    return css``;
  })}

  ${withUtility<CardProps>(
    ({ palette }, { variant, disabled, selected, hasHover }) => {
      switch (true) {
        case variant === 'filled': {
          if (disabled) {
            return css`
              cursor: not-allowed;
              background-color: ${alpha(palette('onSurface'), 0.12)};
            `;
          }
          if (selected) {
            return css`
              background-color: ${palette('surfaceVariant')};
            `;
          }
          return css`
            background-color: ${alpha(palette('primary'), 0.05)};

            &:hover {
              background-color: ${hasHover
                ? alpha(palette('primary'), 0.08)
                : alpha(palette('primary'), 0.05)};
            }
          `;
        }
        case variant === 'outlined': {
          if (disabled) {
            return css`
              cursor: not-allowed;
              background-color: ${alpha(palette('onSurface'), 0.12)};
              border: 1.5px solid ${alpha(palette('onSurface'), 0.12)};
            `;
          }

          if (selected) {
            return css`
              background-color: ${palette('surfaceVariant')};
              border: 1.5px solid ${palette('primary')};
            `;
          }

          return css`
            border: 1.5px solid ${palette('surfaceVariant')};

            &:hover {
              border: 1.5px solid ${alpha(palette('primary'), 1)};
              background-color: ${alpha(palette('primary'), 0.08)};
            }
          `;
        }
        default:
          return css``;
      }
    }
  )};
`;

Card.defaultProps = {
  hasHover: true,
  fullWidth: true,
};
