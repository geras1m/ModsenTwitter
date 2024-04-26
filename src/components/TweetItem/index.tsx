import { memo } from 'react';

import { assets } from '@/assets';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { RemoveTweetButton } from '@/components/TweetItem/RemoveTweetButton';
import {
  LikeCount,
  LikeImage,
  LikeWrapper,
  MainTweetContent,
  TweetImage,
  TweetText,
  TweetWrapper,
  UserInformWrapper,
  UserName,
  UserTeg,
} from '@/components/TweetItem/styled';
import { useAppSelector } from '@/hooks/reduxHooks';
import { TweetItemType } from '@/types';

const { ActiveLikeIcon, DefaultLikeIcon } = assets;

export const TweetItem = memo((data: TweetItemType) => {
  const { id: authUserId } = useAppSelector((state) => state.user);
  const {
    uis,
    authorName,
    authorTag,
    date,
    text,
    imgLink,
    likes,
    userId,
    authorId,
    isActiveLikeIcon,
    handleChangeLike,
    handleRemoveTweet,
  } = data;

  return (
    <TweetWrapper data-testid='tweet-post'>
      <ProfileAvatar size='s' />
      <MainTweetContent>
        <UserInformWrapper>
          <UserName>{authorName}</UserName>
          <UserTeg>
            {authorTag} {date}
          </UserTeg>
        </UserInformWrapper>
        <TweetText>{text}</TweetText>
        {imgLink && <TweetImage src={imgLink} />}
        <LikeWrapper>
          <LikeImage
            data-testid={`active-like-${isActiveLikeIcon}`}
            onClick={() => handleChangeLike(uis, userId)}
            src={isActiveLikeIcon ? ActiveLikeIcon : DefaultLikeIcon}
          />
          <LikeCount>{likes}</LikeCount>
        </LikeWrapper>
      </MainTweetContent>
      {authorId === userId && authUserId === userId && (
        <RemoveTweetButton
          tweetId={uis.toString()}
          handleRemoveTweet={handleRemoveTweet}
        />
      )}
    </TweetWrapper>
  );
});
