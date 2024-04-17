import { FC, useCallback, useEffect, useState } from 'react';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { TweetItem } from '@/components/TweetItem';
import { TweetsBlockWrapper } from '@/components/TweetsBlock/styled';
import { db } from '@/firabase';
import { useAppSelector } from '@/hooks/reduxHooks';
import { ITweetData } from '@/types';

interface ITweetsBlockProps {
  page: string;
}

export const TweetsBlock: FC<ITweetsBlockProps> = ({ page }) => {
  const { id } = useAppSelector((state) => state.user);
  const [tweets, setTweets] = useState<ITweetData[]>([]);

  useEffect(() => {
    const q =
      page === 'home'
        ? query(collection(db, 'tweets'))
        : query(collection(db, 'tweets'), where('authorId', '==', id));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tweetsFromDB: ITweetData[] = [];
      querySnapshot.docs.forEach((docItem) => {
        tweetsFromDB.push(docItem.data() as ITweetData);
      });
      setTweets(tweetsFromDB.reverse());
    });

    return () => {
      unsubscribe();
    };
  }, [id]);

  const handleChangeLike = useCallback(async (tweetId: string | number, userId: string) => {
    const ref = doc(db, 'tweets', tweetId.toString());

    const docSnap = await getDoc(ref);

    const likesList: string[] = docSnap.exists() ? docSnap.data().likes : null;

    const likes =
      likesList.indexOf(userId) !== -1
        ? likesList.filter((likedId) => likedId !== userId)
        : [...likesList, userId];

    await updateDoc(ref, {
      likes,
    });
  }, []);

  const handleRemoveTweet = useCallback(async (tweetId: string) => {
    try {
      await deleteDoc(doc(db, 'tweets', tweetId));
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

  return <TweetsBlockWrapper> {tweetPosts} </TweetsBlockWrapper>;
};
