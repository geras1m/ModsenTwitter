import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import { usersSearchPath } from '@/constants';
import { useToast } from '@/context/toastContext';
import { useDebounce } from '@/hooks/useDebounce';
import { FirebaseService } from '@/service';
import {
  ITweetData,
  IUserData,
  ToastType,
  TweetSearchType,
  TweetsType,
  UserSearchType,
  UsersType,
} from '@/types';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

export function useSearchBlockLogic(navigatePath: UserSearchType): UsersType;
export function useSearchBlockLogic(navigatePath: TweetSearchType): TweetsType;
export function useSearchBlockLogic(navigatePath: unknown): unknown {
  const [searchValue, setSearchValue] = useState<string>('');
  const [itemsList, setItemsList] = useState<IUserData[] | ITweetData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedValue = useDebounce(searchValue);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenItemOnNewPage = useCallback((id: string) => {
    navigate(`${navigatePath}/${id}`);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    try {
      if (debouncedValue.length !== 0) {
        if (navigatePath === usersSearchPath) {
          FirebaseService.GetUserDataCollectionFromDB(debouncedValue).then((filteredUsersData) => {
            setItemsList(filteredUsersData);
            setIsLoading(false);
          });
        } else {
          FirebaseService.GetTweetDataCollectionFromDB(debouncedValue).then(
            (filteredTweetsData) => {
              setItemsList(filteredTweetsData);
              setIsLoading(false);
            },
          );
        }
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast?.open(getFirebaseErrorMessage(error), ToastType.error);
      } else {
        console.error(error);
      }
    }
  }, [debouncedValue]);

  return {
    isLoading,
    itemsList,
    searchValue,
    debouncedValue,
    handleChangeValue,
    handleOpenItemOnNewPage,
  };
}
