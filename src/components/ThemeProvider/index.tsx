import { FC, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyles from '@/components/ThemeProvider/styled';
import { lightTheme } from '@/constants/theme';

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => (
  <StyledThemeProvider theme={lightTheme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
