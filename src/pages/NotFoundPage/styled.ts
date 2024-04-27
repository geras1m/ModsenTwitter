import styled from 'styled-components';

import { mixinFlex, mixinFontTemplates } from '@/components/ThemeProvider/styled';

export const NotFoundPageWrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const Message = styled.h1`
  color: ${({ theme }) => theme.colors.text};

  ${mixinFontTemplates({ size: 'px24' })};
`;

export const ToHomeButton = styled.button`
  margin-top: 30px;
  width: 100%;
  max-width: 300px;
  padding: 15px;
  border: none;
  border-radius: 76px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${mixinFontTemplates({ size: 'px18' })};
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:hover {
    opacity: 0.8;
  }
`;
