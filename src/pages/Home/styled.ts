import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const HomeWrapper = styled.main`
  width: 60%;
  max-width: 910px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-top: none;
`;

export const PageName = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const HomeHeader = styled.header`
  padding: 25px 34px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })};
`;
