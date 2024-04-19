import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

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
import { useToast } from '@/context/toastContext';
import { useDebounce } from '@/hooks/useDebounce';
import { FirebaseService } from '@/service';
import { IUserData, ToastType } from '@/types';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

const { SearchIcon } = assets;

export const UserSearchBlock = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [usersList, setUsersList] = useState<IUserData[]>([]);
  const debouncedValue = useDebounce(searchValue);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenUserOnNewPage = useCallback((id: string) => {
    navigate(`users-search/${id}`);
  }, []);

  useEffect(() => {
    try {
      if (debouncedValue.length !== 0) {
        FirebaseService.GetUserDataCollectionFromDB().then((data) => {
          const filteredTweetsData = data.filter((tweetData) =>
            tweetData.name.toLowerCase().includes(debouncedValue.toLowerCase()),
          );

          setUsersList(filteredTweetsData);
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

  const users = usersList.map(({ uis, name, telegramLink }) => (
    <UserCard
      key={uis!}
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

      {debouncedValue.length !== 0 && (
        <SuggestionBlock>
          <SuggestionTitle>Search results</SuggestionTitle>
          <div>
            {usersList.length === 0 && (
              <NotFoundMessage>The user was not found for your query &#128577;</NotFoundMessage>
            )}
            {users}
          </div>
        </SuggestionBlock>
      )}
    </>
  );
};
