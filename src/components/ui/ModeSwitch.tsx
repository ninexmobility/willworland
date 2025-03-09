'use client';

import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { setMode } from '@/store/themeSlice';

export default function ModeSwitch() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch: AppDispatch = useDispatch();

  const handleModeChange = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, newMode: 'system' | 'light' | 'dark' | null) => {
      if (newMode !== null) {
        dispatch(setMode(newMode));
      }
    },
    [dispatch],
  );

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={handleModeChange} aria-label="theme mode" size="small">
      <ToggleButton value="system" aria-label="system">
        <LaptopMacIcon sx={{ color: 'common.white' }} />
      </ToggleButton>
      <ToggleButton value="light" aria-label="light">
        <Brightness7Icon sx={{ color: 'common.white' }} />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark">
        <Brightness4Icon sx={{ color: 'common.white' }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
