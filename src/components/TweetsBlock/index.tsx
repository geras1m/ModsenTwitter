import { FC, useCallback, useEffect, useState } from 'react';
import { Unsubscribe } from 'firebase/firestore';

import { TweetItem } from '@/components/TweetItem';
import { TweetsBlockWrapper } from '@/components/TweetsBlock/styled';
import { FirebaseService } from '@/service';
import { ITweetData } from '@/types';

interface ITweetsBlockProps {
  page: string;
  id: string;
}

export const TweetsBlock: FC<ITweetsBlockProps> = ({ page, id }) => {
  const [tweets, setTweets] = useState<ITweetData[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe = () => {};
    const subscribeOnTweetsUpdate = async () =>
      FirebaseService.SubscribeOnTweetsUpdate(id, page, setTweets);

    subscribeOnTweetsUpdate().then((unsubscribeFunction) => {
      unsubscribe = unsubscribeFunction;
    });
    return () => {
      unsubscribe();
    };
  }, [id]);

  const handleChangeLike = useCallback(async (tweetId: string | number, userId: string) => {
    try {
      await FirebaseService.ChangeTweetLike(userId, tweetId.toString());
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleRemoveTweet = useCallback(async (tweetId: string) => {
    try {
      await FirebaseService.RemoveTweet(tweetId);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const tweetPosts = tweets.map(
    ({ uis, text, date, likes, imgLink, authorTag, authorName, authorId }) => {
      const likesCount = likes.length;
      const isActiveLikeIcon = likes.indexOf(id) !== -1;

      return (
        <TweetItem
          key={uis}
          uis={uis}
          userId={id}
          text={text}
          date={date}
          likes={likesCount}
          isActiveLikeIcon={isActiveLikeIcon}
          imgLink={imgLink}
          authorId={authorId}
          authorName={authorName}
          authorTag={authorTag}
          handleRemoveTweet={handleRemoveTweet}
          handleChangeLike={handleChangeLike}
        />
      );
    },
  );

  return <TweetsBlockWrapper data-testid='tweets-block'> {tweetPosts} </TweetsBlockWrapper>;
};
