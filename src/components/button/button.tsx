/* eslint-disable no-empty-pattern */
import { LoadingButton } from '@mui/lab';
import { styled, css } from '@mui/material/styles';
import { alpha, spacing } from '@mui/system';
import { switchProp } from 'styled-tools';

import { shouldNotForwardProps, withUtility } from '../../foundation/utils';
import { ButtonProps } from './button.types';

export const Button: React.FC<ButtonProps> = styled(LoadingButton, {
  shouldForwardProp: shouldNotForwardProps,
})<ButtonProps>`
  ${spacing};

  white-space: nowrap;
  font-size: 16px;
  font-weight: 700;

  ${withUtility<ButtonProps>(({}, { fullWidth }) => {
    if (!fullWidth) {
      return;
    }

    return css`
      width: 100%;
    `;
  })}

  height: ${switchProp('size', {
    small: '32px',
    medium: '48px',
    large: '56px',
  })};

  ${withUtility<ButtonProps>(
    ({ palette, isLight }, { variant, loading, disabled, hierarchy }) => {
      if (variant !== 'filled') {
        return;
      }

      switch (true) {
        case loading || disabled:
          return css`
            border: 1.5px solid ${alpha(palette('onSurface'), 0.38)};
            background-color: ${alpha(palette('onSurface'), 0.12)};
            color: ${alpha(palette('onSurface'), 0.38)};
          `;
        case hierarchy === 'primary':
          return css`
            background-color: ${palette(
              isLight ? 'primaryContainer' : 'primary'
            )};
            color: ${palette(isLight ? 'onPrimaryContainer' : 'onPrimary')};
            border: 1.5px solid
              ${palette(isLight ? 'onPrimaryContainer' : 'onPrimary')};

            &:hover {
              background-color: ${alpha(
                palette(isLight ? 'primaryContainer' : 'primary'),
                0.8
              )};
            }
          `;
        case hierarchy === 'secondary':
          return css`
            background-color: ${palette(isLight ? 'surface' : 'onSurface')};
            color: ${palette(isLight ? 'onPrimaryContainer' : 'onPrimary')};
            border: 1.5px solid
              ${palette(isLight ? 'onPrimaryContainer' : 'onPrimary')};

            &:hover {
              background-color: ${isLight
                ? 'transparent'
                : palette('onSurface')};

              & .MuiTouchRipple-root {
                background-color: ${isLight
                  ? alpha(palette('onPrimaryContainer'), 0.08)
                  : alpha(palette('onPrimary'), 0.12)};
              }
            }
          `;
        default:
          return css``;
      }
    }
  )};
`;
