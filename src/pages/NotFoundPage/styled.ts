import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const NotFoundPageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  flex-direction: column;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const Message = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px24};
`;

export const ToHomeButton = styled.button`
  margin-top: 30px;
  width: 100%;
  max-width: 300px;
  padding: 15px;
  border: none;
  border-radius: 76px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:hover {
    opacity: 0.8;
  }
`;
