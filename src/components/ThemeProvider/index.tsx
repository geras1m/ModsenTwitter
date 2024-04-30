import { FC, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyles from '@/components/ThemeProvider/styled';
import { darkTheme, lightTheme } from '@/constants/theme';
import { ThemeValue } from '@/constants/theme/types';
import { useAppSelector } from '@/hooks/reduxHooks';

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const { theme } = useAppSelector((state) => state.theme);

  const currentTheme = theme === ThemeValue.light ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
