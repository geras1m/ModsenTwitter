import styled from 'styled-components';

import { mixinFontTemplates } from '@/components/ThemeProvider/styled';

export const EditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg};
  cursor: pointer;
  transition: 0.2s ease-in;

  ${mixinFontTemplates({ size: 'px18', weight: 'semiBold' })};

  &:hover {
    opacity: 0.7;
  }
`;
