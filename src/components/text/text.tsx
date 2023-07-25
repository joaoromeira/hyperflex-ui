import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { palette } from '../../foundation/utils';
import { TextProps } from './text.types';

export const Text: React.FC<TextProps> = styled(Typography)<TextProps>`
  color: ${(props) => props.color && palette(props.color)};
`;
