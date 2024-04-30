import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mixinFlex, mixinFontTemplates } from '@/components/ThemeProvider/styled';

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
  color: ${({ theme }) => theme.colors.text};

  ${mixinFontTemplates({ size: 'px24', weight: 'semiBold' })};
  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};

  &:hover {
    opacity: 0.6;
  }
`;

export const ToggleWrapper = styled.div`
  gap: 20px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;
