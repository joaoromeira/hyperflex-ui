# HyperFlex UI - Built on Material UI

Welcome to HyperFlex UI! This is a Design System built on top of Material UI, providing a consistent collection of components, styles, and guidelines for use in our projects.

## Overview

HyperFlex UI is built on top of Material UI, which is a widely-used library for building responsive and user-friendly interfaces. With HyperFlex UI, you can unifying your design standards and promoting consistency across your codebase.

## Getting Started

To start using HyperFlex UI in your project, follow the steps below:

a. Installation: Add the `hyperflex-ui` package to your project using package managers like npm or yarn.

```bash
# Use npm
npm install hyperflex-ui

# Use yarn
yarn add hyperflex-ui
```

b. Importing: Import the necessary components and styles into your project.

```tsx
import { Button, ThemeProvider, theme } from "hyperflex-ui";

export const Container = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme.light}>
      <Button hierarchy="primary" variant="filled">
        Click me
      </Button>      
    </ThemeProvider>
  );
};
```

c. Create custom themes

```tsx
import { ThemeProvider, customTheme } from "hyperflex-ui";

export const Container = (): JSX.Element => {
  const { dark, light } = customTheme({
    dark: {
      primary: '#000',
    },
  })

  return <ThemeProvider theme={mode === "dark" ? dark : light} />
}
```

### References

[Material Design Guideline](https://m3.material.io/)
[Material Web Github repository](https://github.com/material-components/material-web)
[Material 3 Design Kit on Figma](https://www.figma.com/community/file/1035203688168086460/Material-3-Design-Kit)

### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/joaoromeira/hyperflex-ui/LICENSE) file for detail

Refer original license: [Material Web License](https://github.com/material-components/material-web/blob/main/LICENSE)
