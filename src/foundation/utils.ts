import { createBreakpoints, createSpacing } from '@mui/system';

import { Tokens } from './theme/tokens/tokens.types';

export const shouldNotForwardProps = (prop: string) => {
  return ![
    'marginTop',
    'marginLeft',
    'marginRight',
    'marginBottom',
    'textAlign',
    'm',
    'mr',
    'mt',
    'fullWidth',
    'startIcon',
    'endIcon',
    'ml',
    'mb',
    'margin',
    'marginX',
    'marginY',
    'mx',
    'my',
    'hasHover',
  ].includes(prop);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

export const spacing = createSpacing(4);

export const breakpoints = createBreakpoints({});

export const palette = (token: keyof Tokens) => (props: Any) => {
  return props['theme']['palette'][token].main;
};

export const _palette = (props: Any) => (token: keyof Tokens) => {
  return props['theme']['palette'][token].main;
};

export function withUtility<Props extends Record<string, Any>>(
  fn: (
    { palette }: { palette: (token: keyof Tokens) => Any; isLight: boolean },
    props: Props
  ) => Any
) {
  return (props: Props) => {
    const isLight = props['theme']['palette'].mode === 'light';

    return fn({ palette: _palette(props), isLight }, props);
  };
}
