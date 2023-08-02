import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { alpha, css, spacing } from '@mui/system';

import { shouldNotForwardProps, withUtility } from '../../foundation/utils';
import { CheckboxProps } from './checkbox.types';

const Content: React.FC<CheckboxProps> = styled(MuiCheckbox, {
  shouldForwardProp: shouldNotForwardProps,
})<CheckboxProps>`
  ${spacing};

  width: 52px;
  height: 32px;
  padding: 0;

  ${withUtility(
    ({ palette }) => css`
      &.Mui-checked {
        color: ${palette('primary')};
      }

      &.Mui-disabled {
        color: ${alpha(palette('onBackground'), 0.12)};
        opacity: 1;
      }
    `
  )}
`;

export const Checkbox = ({
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
}: CheckboxProps) => {
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
      control={<Content {...props} />}
      label={label}
    />
  ) : (
    <Content
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

Checkbox.defaultProps = {
  disableRipple: true,
};
