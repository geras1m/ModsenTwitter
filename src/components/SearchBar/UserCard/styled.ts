import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const UserCardWrapper = styled.div`
  margin-bottom: 25px;
  cursor: pointer;
  transition: 0.2s ease-in;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const UserInform = styled.div`
  flex-direction: column;
  margin-left: 13px;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'start' })};
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const UserTag = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.px18};
`;
