import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PaletteMode } from "@mui/material";

export type ThemeMode = PaletteMode;

interface PreferencesState {
  mode: ThemeMode;
}

const getInitialMode = (): ThemeMode => {
  if (typeof window !== "undefined") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    return prefersDark.matches ? "dark" : "light";
  }
  return "light";
};

const initialState: PreferencesState = {
  mode: getInitialMode(),
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
  },
});

export const { toggleMode, setMode } = preferencesSlice.actions;
export default preferencesSlice.reducer;
