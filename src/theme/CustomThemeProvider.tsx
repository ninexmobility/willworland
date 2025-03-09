'use client';

import React, { ReactNode, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline, createTheme, ThemeOptions, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setMode } from '@/store/themeSlice';
import { getTheme } from './theme';

interface CustomThemeProviderProps {
  children: ReactNode;
}

export default function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  // Read the theme mode from Redux
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  // Check system preference using a media query.
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Run this effect only once on mount to initialize theme mode from localStorage.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | 'system' | null;
      if (storedMode && storedMode !== mode) {
        dispatch(setMode(storedMode));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once.

  // Save mode to localStorage whenever it changes.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', mode);
    }
  }, [mode]);

  // Derive the effective mode based on system preference when the mode is "system".
  const effectiveMode = mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode;

  const themeOptions: ThemeOptions = getTheme(effectiveMode);
  const theme = useMemo(() => createTheme(themeOptions), [themeOptions]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
