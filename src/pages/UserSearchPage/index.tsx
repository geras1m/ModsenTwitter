import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import { ProfileAvatar } from '@/components/ProfileAvatar';
import { SearchHeader } from '@/components/SearchHeader';
import { TweetsBlock } from '@/components/TweetsBlock';
import { useToast } from '@/context/toastContext';
import {
  AvatarContainer,
  ProfileBanner,
  UserInformBlock,
  UserName,
  UserSearchPageWrapper,
  UserTag,
} from '@/pages/UserSearchPage/styled';
import { FirebaseService } from '@/service';
import { AvatarSizes, IUserData, ToastType } from '@/types';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

export const UserSearchPage = memo(() => {
  const [user, setUser] = useState<IUserData | null>(null);
  const { id } = useParams();
  const toast = useToast();

  useEffect(() => {
    if (id) {
      try {
        const getUserFromDB = async () => FirebaseService.GetDataItemFromDB(id, 'users');
        getUserFromDB().then((userData) => setUser(userData as IUserData));
      } catch (error) {
        if (error instanceof FirebaseError) {
          toast?.open(getFirebaseErrorMessage(error), ToastType.error);
        } else {
          console.error(error);
        }
      }
    }
  }, [id]);

  return (
    <UserSearchPageWrapper>
      <SearchHeader />
      <ProfileBanner />
      <UserInformBlock>
        <AvatarContainer>
          <ProfileAvatar size={AvatarSizes.large} />
        </AvatarContainer>
        {user && (
          <UserName>
            {user.name} <UserTag>{user.telegramLink}</UserTag>
          </UserName>
        )}
      </UserInformBlock>

      {id && (
        <TweetsBlock
          page='users-search'
          id={id}
        />
      )}
    </UserSearchPageWrapper>
  );
});
