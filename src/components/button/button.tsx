/* eslint-disable no-empty-pattern */
import { LoadingButton } from '@mui/lab';
import { styled, css } from '@mui/material/styles';
import { alpha, spacing } from '@mui/system';
import { switchProp } from 'styled-tools';

import { shouldNotForwardProps, withUtility } from '../../foundation/utils';
import { ButtonProps, IconProps } from './button.types';

const MuiButton: React.FC<ButtonProps> = styled(LoadingButton, {
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
    small: '32px !important',
    normal: '48px !important',
    large: '56px !important',
  })};

  ${withUtility<ButtonProps>(
    ({ palette }, { variant, loading, disabled, hierarchy = 'primary' }) => {
      if (loading || disabled) {
        return css`
          background-color: ${alpha(palette('onSurface'), 0.12)};
          color: ${alpha(palette('onSurface'), 0.38)};
        `;
      }

      const colors = {
        primary: {
          color: palette('onPrimary'),
          background: palette('primary'),
        },
        secondary: {
          color: palette('onSecondary'),
          background: palette('secondary'),
        },
        positive: {
          color: palette('onSuccess'),
          background: palette('success'),
        },
        attention: {
          color: palette('onWarning'),
          background: palette('warning'),
        },
        negative: {
          color: palette('onError'),
          background: palette('error'),
        },
        informative: {
          color: palette('onInfo'),
          background: palette('info'),
        },
      };

      const { background, color } = colors[hierarchy as keyof typeof colors];

      if (variant === 'filled') {
        return css`
          background-color: ${background};
          color: ${color};

          &:hover {
            background-color: ${alpha(background, 0.8)};
          }
        `;
      }

      if (variant === 'outlined') {
        return css`
          color: ${background};
          border: 1px solid ${background};

          &:hover {
            border-color: ${alpha(background, 0.8)};
          }
        `;
      }

      // Text
      return css`
        color: ${background};
      `;
    }
  )};
`;

export const Button = ({
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const iconProps: IconProps = {};

  if (icon && iconPosition === 'left') {
    iconProps.startIcon = icon;
  }

  if (icon && iconPosition === 'right') {
    iconProps.endIcon = icon;
  }

  console.log(iconProps);
  return <MuiButton {...props} {...iconProps} />;
};
