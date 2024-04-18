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
import { SuggestionTitle } from '@/components/SearchBar/TweetSearchBlock/styled';
import { UserCard } from '@/components/SearchBar/UserCard';
import { db } from '@/firabase';
import { useDebounce } from '@/hooks/useDebounce';
import { IUserData } from '@/types';

const { SearchIcon } = assets;

export const UserSearchBlock = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [usersList, setUsersList] = useState<IUserData[]>([]);
  const debouncedValue = useDebounce(searchValue);
  const navigate = useNavigate();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenUserOnNewPage = useCallback((id: string) => {
    navigate(`users-search/${id}`);
  }, []);

  useEffect(() => {
    if (debouncedValue.length !== 0) {
      const getTweetsData = async () => {
        const querySnapshot = await getDocs(collection(db, 'users'));

        const tweetsDataFromDB: IUserData[] = [];
        querySnapshot.forEach((doc) => {
          tweetsDataFromDB.push(doc.data() as IUserData);
        });

        return tweetsDataFromDB;
      };
      getTweetsData().then((data) => {
        const filteredTweetsData = data.filter((tweetData) =>
          tweetData.name.toLowerCase().includes(debouncedValue.toLowerCase()),
        );
        console.log(filteredTweetsData);
        setUsersList(filteredTweetsData);
      });
    }
  }, [debouncedValue]);

  const users = usersList.map(({ uis, name, telegramLink }) => (
    <UserCard
      id={uis!}
      name={name}
      tag={telegramLink}
      handleOpenUser={handleOpenUserOnNewPage}
    />
  ));

  return (
    <>
      <InputWrapper>
        <Image src={SearchIcon} />
        <Input
          type='text'
          placeholder='Search Users'
          value={searchValue}
          onChange={handleChangeValue}
        />
      </InputWrapper>
      <SuggestionBlock>
        <SuggestionTitle>Search results</SuggestionTitle>
        <div>
          {debouncedValue.length !== 0 && usersList.length === 0 && (
            <NotFoundMessage>The user was not found for your query &#128577;</NotFoundMessage>
          )}
          {debouncedValue.length !== 0 ? users : null}
        </div>
      </SuggestionBlock>
    </>
  );
};
