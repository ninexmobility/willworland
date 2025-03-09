import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: ThemeMode;
}

// Try to read from localStorage if available
const storedMode =
  typeof window !== 'undefined' && localStorage.getItem('themeMode')
    ? (localStorage.getItem('themeMode') as ThemeMode)
    : 'system';

const initialState: ThemeState = {
  mode: storedMode,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
    toggleTheme(state) {
      // When toggling, if the current mode is 'system', default to light first.
      if (state.mode === 'system') {
        state.mode = 'light';
      } else {
        state.mode = state.mode === 'light' ? 'dark' : 'light';
      }
    },
  },
});

export const { setMode, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
