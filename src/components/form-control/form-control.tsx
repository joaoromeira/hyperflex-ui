import { FormControl as MuiFormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { switchProp } from 'styled-tools';

export const FormControl = styled(MuiFormControl)`
  height: ${switchProp('size', {
    small: '32px',
    normal: '48px',
  })};

  .MuiInputBase-root {
    height: ${switchProp('size', {
      small: '32px',
      normal: '48px',
    })};
  }

  .MuiFormLabel-root {
    line-height: ${switchProp('size', {
      small: '1em',
      normal: '1em',
    })};
  }
`;
