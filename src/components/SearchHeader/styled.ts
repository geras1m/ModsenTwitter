import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const Header = styled.header`
  padding: 25px 34px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })}
`;

export const Image = styled.img`
  margin-right: 13px;
`;

export const LinkItem = styled(NavLink)`
  transition: 0.2s ease-in;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};

  &:hover {
    opacity: 0.6;
  }
`;
