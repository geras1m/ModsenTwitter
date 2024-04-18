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
    <TweetCardWrapper onClick={() => handleOpenTweet(id)}>
      <ProfileAvatar size='s' />
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
