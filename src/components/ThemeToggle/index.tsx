import { FC } from 'react';

import { Toggle, ToggleWrapper } from '@/components/ThemeToggle/styled';
import { IThemeProps } from '@/types';

export const ThemeToggle: FC<IThemeProps> = ({ theme, switchTheme }) => (
  <ToggleWrapper
    data-testid='toggle'
    onClick={() => switchTheme(theme)}
  >
    <Toggle
      data-testid='toggle-element'
      theme={theme}
    />
  </ToggleWrapper>
);
