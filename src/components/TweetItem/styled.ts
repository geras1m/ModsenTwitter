import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const TweetWrapper = styled.article`
  padding: 10px 34px 20px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  ${mixinFlex({ alignItem: 'start', justifyContent: 'space-between' })}
`;

export const MainTweetContent = styled.div`
  width: 100%;
  margin-left: 7px;
`;

export const UserInformWrapper = styled.div`
  margin-bottom: 5px;
`;

export const UserName = styled.h3`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-right: 5px;
`;

export const UserTeg = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.px18};
  color: ${({ theme }) => theme.colors.grey};
`;

export const TweetText = styled.p`
  width: 100%;
  max-width: 750px;
  word-break: break-word;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px18};
`;

export const TweetImage = styled.img`
  border-radius: 6px;
  width: 100%;
  max-width: 679px;
  height: 100%;
  max-height: 450px;
  object-fit: contain;
`;

export const LikeWrapper = styled.div`
  margin-top: 22px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};
`;

export const LikeCount = styled.span`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px;
`;

export const LikeImage = styled.img`
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
