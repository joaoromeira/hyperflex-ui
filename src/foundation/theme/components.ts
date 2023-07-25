import type { Theme } from '@mui/material/styles';

import { Button } from '../../components/button/button.overrides';

export const makeComponents = (theme: Theme) => Object.assign(Button(theme));
