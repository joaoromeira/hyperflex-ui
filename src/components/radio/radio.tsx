import {
  FormControlLabel,
  Radio as MuiRadio,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { palette } from '../../foundation/utils';
import { RadioGroupProps, RadioProps } from './radio.types';

export const RadioGroup = ({
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
  mr,
  mt,
  mx,
  my,
  children,
  id,
  label,
  ...props
}: RadioGroupProps) => {
  return (
    <Stack
      display="inline-block"
      sx={{
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
    >
      {label && <FormLabel id={id}>{label}</FormLabel>}

      <MuiRadioGroup id={id} {...props}>
        {children}
      </MuiRadioGroup>
    </Stack>
  );
};

export const CheckedRadio = styled('div')`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 6px solid ${palette('primary')};
  box-sizing: border-box;
`;

export const Radio = (props: RadioProps) => (
  <FormControlLabel
    {...props}
    control={<MuiRadio checkedIcon={<CheckedRadio />} />}
  />
);
