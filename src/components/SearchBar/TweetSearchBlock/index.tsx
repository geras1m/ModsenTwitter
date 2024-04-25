import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import { assets } from '@/assets';
import { searchTweetPlaceholder } from '@/components/SearchBar/config';
import {
  Image,
  Input,
  InputWrapper,
  NotFoundMessage,
  SuggestionBlock,
} from '@/components/SearchBar/styled';
import { TweetCard } from '@/components/SearchBar/TweetCard';
import { SuggestionTitle } from '@/components/SearchBar/TweetSearchBlock/styled';
import { useToast } from '@/context/toastContext';
import { useDebounce } from '@/hooks/useDebounce';
import { FirebaseService } from '@/service';
import { ITweetData, ToastType } from '@/types';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

const { SearchIcon } = assets;

export const TweetSearchBlock = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [tweetsList, setTweetsList] = useState<ITweetData[]>([]);
  const debouncedValue = useDebounce(searchValue);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenTweetOnNewPage = useCallback((id: string) => {
    navigate(`tweets-search/${id}`);
  }, []);

  useEffect(() => {
    try {
      if (debouncedValue.length !== 0) {
        FirebaseService.GetTweetDataCollectionFromDB().then((data) => {
          const filteredTweetsData = data.filter((tweetData) =>
            tweetData.text.toLowerCase().includes(debouncedValue.toLowerCase()),
          );
          setTweetsList(filteredTweetsData);
        });
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast?.open(getFirebaseErrorMessage(error), ToastType.error);
      } else {
        console.error(error);
      }
    }
  }, [debouncedValue]);

  const tweets = tweetsList.map(({ authorName, text, date, uis }) => (
    <TweetCard
      key={uis}
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
          placeholder={searchTweetPlaceholder}
          value={searchValue}
          onChange={handleChangeValue}
        />
      </InputWrapper>

      <SuggestionBlock>
        <SuggestionTitle>Search results</SuggestionTitle>
        {debouncedValue.length !== 0 && tweetsList.length !== 0 && <div>{tweets}</div>}
        {debouncedValue.length !== 0 && tweetsList.length === 0 && (
          <NotFoundMessage>The tweet was not found for your query &#128577;</NotFoundMessage>
        )}
      </SuggestionBlock>
    </>
  );
};
