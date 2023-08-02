import { FormControl as MuiFormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { switchProp } from 'styled-tools';

export const FormControl = styled(MuiFormControl)`
  height: ${switchProp('size', {
    small: '24px',
    normal: '32px',
  })};
`;
