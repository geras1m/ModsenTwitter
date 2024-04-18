import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProfileAvatar } from '@/components/ProfileAvatar';
import { SearchHeader } from '@/components/SearchHeader';
import { TweetsBlock } from '@/components/TweetsBlock';
import {
  AvatarContainer,
  ProfileBanner,
  UserInformBlock,
  UserName,
  UserSearchPageWrapper,
  UserTag,
} from '@/pages/UserSearchPage/styled';
import { FirebaseService } from '@/service';
import { IUserData } from '@/types';

export const UserSearchPage = () => {
  const [user, setUser] = useState<IUserData | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      try {
        const getUserFromDB = async () => FirebaseService.GetDataItemFromDB(id, 'users');
        getUserFromDB().then((userData) => setUser(userData as IUserData));
      } catch (e) {
        console.log(e);
      }
    }
  }, [id]);

  return (
    <UserSearchPageWrapper>
      <SearchHeader />
      <ProfileBanner />
      <UserInformBlock>
        <AvatarContainer>
          <ProfileAvatar size='l' />
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
};
