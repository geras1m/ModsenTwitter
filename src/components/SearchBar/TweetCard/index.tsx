import { memo } from 'react';

import { ProfileAvatar } from '@/components/ProfileAvatar';
import {
  TweetCardWrapper,
  TweetDate,
  TweetInformWrapper,
  TweetText,
  UserInformWrapper,
  UserName,
} from '@/components/SearchBar/TweetCard/styled';
import { AvatarSizes } from '@/types';
import { getCutString } from '@/utils/getCutString';

interface ITweetCardProps {
  authorName: string;
  date: string;
  text: string;
  id: string;
  handleOpenTweet: (id: string) => void;
}

export const TweetCard = memo((data: ITweetCardProps) => {
  const { authorName, date, text, id, handleOpenTweet } = data;

  return (
    <TweetCardWrapper
      data-testid='tweets-search-result'
      onClick={() => handleOpenTweet(id)}
    >
      <ProfileAvatar size={AvatarSizes.small} />
      <TweetInformWrapper>
        <UserInformWrapper>
          <UserName>{getCutString(authorName, 20)}</UserName>
          <TweetDate>{date}</TweetDate>
        </UserInformWrapper>
        <TweetText>{getCutString(text, 30)}</TweetText>
      </TweetInformWrapper>
    </TweetCardWrapper>
  );
});
