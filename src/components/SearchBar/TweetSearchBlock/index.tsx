import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

import { assets } from '@/assets';
import {
  Image,
  Input,
  InputWrapper,
  NotFoundMessage,
  SuggestionBlock,
} from '@/components/SearchBar/styled';
import { TweetCard } from '@/components/SearchBar/TweetCard';
import { SuggestionTitle } from '@/components/SearchBar/TweetSearchBlock/styled';
import { db } from '@/firabase';
import { useDebounce } from '@/hooks/useDebounce';
import { ITweetData } from '@/types';

const { SearchIcon } = assets;

export const TweetSearchBlock = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [tweetsList, setTweetsList] = useState<ITweetData[]>([]);
  const debouncedValue = useDebounce(searchValue);
  const navigate = useNavigate();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenTweetOnNewPage = useCallback((id: string) => {
    navigate(`tweets-search/${id}`);
  }, []);

  useEffect(() => {
    if (debouncedValue.length !== 0) {
      const getTweetsData = async () => {
        const querySnapshot = await getDocs(collection(db, 'tweets'));

        const tweetsDataFromDB: ITweetData[] = [];
        querySnapshot.forEach((doc) => {
          tweetsDataFromDB.push(doc.data() as ITweetData);
        });

        return tweetsDataFromDB;
      };

      getTweetsData().then((data) => {
        const filteredTweetsData = data.filter((tweetData) =>
          tweetData.text.toLowerCase().includes(debouncedValue.toLowerCase()),
        );
        console.log(filteredTweetsData);
        setTweetsList(filteredTweetsData);
      });
    }
  }, [debouncedValue]);

  const tweets = tweetsList.map(({ authorName, text, date, uis }) => (
    <TweetCard
      authorName={authorName}
      date={date}
      text={text}
      id={uis.toString()}
      handleOpenTweet={handleOpenTweetOnNewPage}
    />
  ));

  return (
    <>
      <InputWrapper>
        <Image src={SearchIcon} />
        <Input
          type='text'
          placeholder='Search Twitter'
          value={searchValue}
          onChange={handleChangeValue}
        />
      </InputWrapper>
      <SuggestionBlock>
        <SuggestionTitle>Search results</SuggestionTitle>
        <div>
          {debouncedValue.length !== 0 ? tweets : null}
          {debouncedValue.length !== 0 && tweetsList.length === 0 && (
            <NotFoundMessage>The tweet was not found for your query &#128577;</NotFoundMessage>
          )}
        </div>
      </SuggestionBlock>
    </>
  );
};
