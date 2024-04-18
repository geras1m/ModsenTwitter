import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Unsubscribe } from 'firebase/firestore';

import { SearchHeader } from '@/components/SearchHeader';
import { TweetItem } from '@/components/TweetItem';
import { useAppSelector } from '@/hooks/reduxHooks';
import { TweetSearchPageWrapper } from '@/pages/TweetSearchPage/styled';
import { FirebaseService } from '@/service';
import { ITweetData } from '@/types';

export const TweetSearchPage = () => {
  const { id } = useAppSelector((state) => state.user);
  const { id: paramId } = useParams();
  const [tweet, setTweet] = useState<ITweetData | null>(null);

  useEffect(() => {
    let unsubscribe: Unsubscribe = () => {};
    if (paramId) {
      const subscribeOnTweetsUpdate = async () =>
        FirebaseService.SubscriptionOnTweetUpdateForSearchPage(paramId, setTweet);

      subscribeOnTweetsUpdate().then((unsubscribeFunction) => {
        unsubscribe = unsubscribeFunction;
      });
    }
    return () => {
      unsubscribe();
    };
  }, [paramId]);

  const handleRemoveTweet = async () => {
    if (tweet) {
      try {
        await FirebaseService.RemoveTweet(tweet.uis.toString());
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleChangeLike = useCallback(async (tweetId: string | number, userId: string) => {
    try {
      await FirebaseService.ChangeTweetLike(userId, tweetId.toString());
    } catch (e) {
      console.log(e);
    }
  }, []);

  const likesCount = tweet?.likes.length;
  const isActiveLikeIcon = tweet?.likes.indexOf(id!) !== -1;

  return (
    <TweetSearchPageWrapper>
      <SearchHeader />
      {tweet && (
        <TweetItem
          uis={tweet.uis}
          authorId={tweet.authorId}
          date={tweet.date}
          text={tweet.text}
          imgLink={tweet.imgLink}
          authorName={tweet.authorName}
          authorTag={tweet.authorTag}
          userId={id!.toString()}
          handleRemoveTweet={handleRemoveTweet}
          handleChangeLike={handleChangeLike}
          likes={likesCount!}
          isActiveLikeIcon={isActiveLikeIcon}
        />
      )}
    </TweetSearchPageWrapper>
  );
};
