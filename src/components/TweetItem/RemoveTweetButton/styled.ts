import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const Image = styled.img`
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MenuButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: -22px;
  bottom: -40px;
  padding: 5px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.px14};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:hover {
    opacity: 0.8;
  }
`;
