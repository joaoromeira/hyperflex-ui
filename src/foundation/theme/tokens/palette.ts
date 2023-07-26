import { PaletteMode, PaletteOptions } from '@mui/material';

import { Tokens } from './tokens.types';

export * from './palette.types';

export const makePalette = (
  mode: PaletteMode,
  tokens: Tokens
): PaletteOptions => ({
  mode,
  primary: {
    main: tokens.primary,
    contrastText: tokens.onPrimary,
  },
  onPrimary: {
    main: tokens.onPrimary,
    contrastText: tokens.primary,
  },
  primaryContainer: {
    main: tokens.primaryContainer,
    contrastText: tokens.onPrimaryContainer,
  },
  onPrimaryContainer: {
    main: tokens.onPrimaryContainer,
    contrastText: tokens.primaryContainer,
  },
  secondary: {
    main: tokens.secondary,
    contrastText: tokens.onSecondary,
  },
  onSecondary: {
    main: tokens.onSecondary,
    contrastText: tokens.secondary,
  },
  secondaryContainer: {
    main: tokens.secondaryContainer,
    contrastText: tokens.onSecondaryContainer,
  },
  onSecondaryContainer: {
    main: tokens.onSecondaryContainer,
    contrastText: tokens.secondaryContainer,
  },
  success: {
    main: tokens.success,
  },
  onSuccess: {
    main: tokens.onSuccess,
  },
  successContainer: {
    main: tokens.successContainer,
  },
  onSuccessContainer: {
    main: tokens.onSuccessContainer,
  },
  background: {
    main: tokens.background,
  },
  onBackground: {
    main: tokens.onBackground,
  },
  error: {
    main: tokens.error,
    contrastText: tokens.onError,
  },
  onError: {
    main: tokens.onError,
    contrastText: tokens.error,
  },
  warning: {
    main: tokens.warning,
  },
  onWarning: {
    main: tokens.onWarning,
  },
  warningContainer: {
    main: tokens.warningContainer,
  },
  onWarningContainer: {
    main: tokens.onWarningContainer,
  },
  info: {
    main: tokens.info,
  },
  onInfo: {
    main: tokens.onInfo,
  },
  infoContainer: {
    main: tokens.infoContainer,
  },
  onInfoContainer: {
    main: tokens.onInfoContainer,
  },
  surface: {
    main: tokens.surface,
  },
  onSurface: {
    main: tokens.onSurface,
  },
  surfaceVariant: {
    main: tokens.surfaceVariant,
  },
  onSurfaceVariant: {
    main: tokens.onSurfaceVariant,
  },
  errorContainer: {
    main: tokens.errorContainer,
    contrastText: tokens.onErrorContainer,
  },
  onErrorContainer: {
    main: tokens.onErrorContainer,
    contrastText: tokens.errorContainer,
  },
  outline: {
    main: tokens.outline,
  },
});
