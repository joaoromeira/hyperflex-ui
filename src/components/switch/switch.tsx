import { FormControlLabel, Switch as _MuiSwitch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { alpha, css, spacing } from '@mui/system';

import {
  palette,
  shouldNotForwardProps,
  withUtility,
} from '../../foundation/utils';
import { SwitchProps } from './switch.types';

const MuiSwitch: React.FC<SwitchProps> = styled(_MuiSwitch, {
  shouldForwardProp: shouldNotForwardProps,
})<SwitchProps>`
  ${spacing};

  width: 44px;
  height: 24px;

  padding: 0;

  & .MuiSwitch-thumb {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    background-color: ${palette('outline')};
  }

  & .MuiSwitch-track {
    border-radius: 25px;
    background-color: transparent;
    border: 1px solid ${palette('outline')};
    opacity: 1;
  }

  & .Mui-checked .MuiSwitch-thumb {
    width: 16px;
    height: 16px;

    background-color: ${palette('onPrimary')};
  }

  ${withUtility(
    ({ palette }) => css`
      & .Mui-disabled + .MuiSwitch-track {
        background-color: ${alpha(palette('onBackground'), 0.12)};
        border: 1px solid ${alpha(palette('onBackground'), 0.12)};
        opacity: 1;
      }

      & .Mui-disabled .MuiSwitch-thumb {
        background-color: ${alpha(palette('onBackground'), 0.38)};
      }
    `
  )}

  & .MuiSwitch-switchBase {
    padding: 0;
    transition-duration: 300ms;
    margin: 5px;

    &.Mui-checked {
      margin: 4px;
      transform: translateX(20px);

      & + .MuiSwitch-track {
        background-color: ${palette('primary')};
        border: 1px solid ${palette('primary')};
        opacity: 1;
      }

      &.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
      }
    }
  }
`;

export const Switch = ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  m,
  marginX,
  marginY,
  mb,
  ml,
  mt,
  mr,
  mx,
  my,
  label,
  direction = 'left',
  ...props
}: SwitchProps) => {
  const isLeftDirection = direction === 'left';

  return label ? (
    <FormControlLabel
      sx={{
        flexDirection: isLeftDirection ? 'row' : 'row-reverse',
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        m,
        marginX,
        marginY,
        mb,
        ml,
        mt,
        mr,
        mx,
        my,
      }}
      control={
        <MuiSwitch
          {...props}
          mr={isLeftDirection ? 3 : 0}
          ml={isLeftDirection ? 0 : 3}
        />
      }
      label={label}
    />
  ) : (
    <MuiSwitch
      {...props}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      m={m}
      marginX={marginX}
      marginY={marginY}
      mb={mb}
      ml={ml}
      mt={mt}
      mr={mr}
      mx={mx}
      my={my}
    />
  );
};

Switch.defaultProps = {
  disableRipple: true,
};
