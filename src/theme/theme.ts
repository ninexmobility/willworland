import { createTheme, ThemeOptions } from '@mui/material/styles';

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: '#0d47a1' },
    secondary: { main: '#4caf50' },
    info: { main: '#0277bd' },
    background: {
      default: '#F4F4F4',
      paper: '#D2D2D2',
    },
  },
  components: {
    MuiTooltip: {
      defaultProps: { arrow: true },
    },
    MuiAppBar: {
      // Override AppBar so it always uses the same color
      defaultProps: { color: 'inherit' },
      styleOverrides: {
        root: {
          backgroundColor: '#0d47a1',
        },
      },
    },
  },
  shape: { borderRadius: 4 },
  spacing: 8,
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: '#0d47a1' },
    secondary: { main: '#4caf50' },
    info: { main: '#80cbc4' },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
  components: {
    MuiAppBar: {
      // Ensure AppBar always uses the same background color
      defaultProps: { color: 'inherit' },
      styleOverrides: {
        root: {
          backgroundColor: '#0d47a1',
        },
      },
    },
  },
  shape: { borderRadius: 4 },
  spacing: 8,
};

/**
 * Returns a theme instance based on the provided mode.
 *
 * @param mode - The desired theme mode, either 'light' or 'dark'.
 * @returns A Material-UI theme instance.
 */
export const getTheme = (mode: 'light' | 'dark') =>
  createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
