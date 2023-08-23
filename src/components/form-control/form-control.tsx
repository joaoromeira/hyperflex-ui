import { FormControl as MuiFormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { switchProp } from 'styled-tools';

export const FormControl = styled(MuiFormControl)`
  .MuiTextField-root,
  .MuiInputBase-root {
    height: ${switchProp('size', {
      small: '32px',
      normal: '48px',
      large: '56px',
    })};
  }

  .MuiFormLabel-root {
    top: ${switchProp('size', {
      small: '-4px',
      normal: '-4px',
    })};
  }
`;
