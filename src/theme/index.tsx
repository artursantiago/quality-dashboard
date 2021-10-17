import { useMemo } from 'react';
import { createTheme, PaletteType, ThemeOptions } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { breakpoints } from './breakpoints';
import { darkPalette, lightPalette } from './palette';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    chart: {
      [key: string]: React.CSSProperties['color'][]
    }
  }
  interface PaletteOptions {
    chart: {
      [key: string]: React.CSSProperties['color'][]
    }
  }
}

type Props = {
  paletteType?: PaletteType
  children: React.ReactNode
}

export const ThemeConfig = ({ children, paletteType = 'light' }: Props): JSX.Element => {
  const themeOptions: ThemeOptions = useMemo(() => ({
    breakpoints,
    palette: paletteType === 'light' ? lightPalette : darkPalette,
  }), [paletteType]);

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
