import { createTheme, type PaletteMode } from "@mui/material";

export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: "rgb(33, 114, 210)" },
      background: {
        default: mode === "light" ? "#f7f7f8" : "rgb(28, 28, 28)",
        paper: mode === "light" ? "#ffffff" : "rgb(36, 36, 36)",
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      body1: { lineHeight: 1.6 },
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: "md",
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
  });
