import styled from 'styled-components';

import { mixinFlex, mixinFontTemplates } from '@/components/ThemeProvider/styled';

export const TweetCardWrapper = styled.div`
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

export const TweetInformWrapper = styled.div`
  margin-left: 10px;
`;

export const UserInformWrapper = styled.div`
  margin-bottom: 5px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};
`;

export const UserName = styled.p`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.text};

  ${mixinFontTemplates({ size: 'px18', weight: 'bold' })};
`;

export const TweetDate = styled.p`
  color: ${({ theme }) => theme.colors.grey};

  ${mixinFontTemplates({ size: 'px18' })};
`;

export const TweetText = styled.p`
  color: ${({ theme }) => theme.colors.text};

  ${mixinFontTemplates({ size: 'px14', weight: 'bold' })};
`;
