import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const SideBarNav = styled.nav``;

export const LinksList = styled.ul`
  margin-top: 50px;
`;

export const LinksItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin: 30px 0;
  transition: 0.2s ease-in;
  cursor: pointer;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.6;
  }

  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const LinksImg = styled.img`
  margin-right: 20px;
`;
