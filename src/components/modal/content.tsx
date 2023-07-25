import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { switchProp } from 'styled-tools';

import { palette, spacing } from '../../foundation/utils';
import { ContentProps } from '../components';

export const Content = styled(Box)<ContentProps>`
  width: ${switchProp('size', {
    full: '1200px',
    large: '996px',
    medium: '588px',
    small: '384px',
  })};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - ${spacing(8)});
  background-color: ${palette('surface')};
  outline: none;
  padding: ${spacing(10)};
  display: flex;
  flex-direction: column;

  border-radius: 12px;
  box-shadow: 0px 16px 24px rgba(26, 28, 24, 0.16);
`;
