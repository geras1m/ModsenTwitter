import { memo } from 'react';

import { ProfileAvatar } from '@/components/ProfileAvatar';
import {
  UserCardWrapper,
  UserInform,
  UserName,
  UserTag,
} from '@/components/SearchBar/UserCard/styled';
import { AvatarSizes } from '@/types';

interface IUserCardProps {
  id: string;
  name: string;
  tag: string;
  handleOpenUser: (id: string) => void;
}

export const UserCard = memo((data: IUserCardProps) => {
  const { id, name, tag, handleOpenUser } = data;

  return (
    <UserCardWrapper
      data-testid='users-search-result'
      onClick={() => handleOpenUser(id)}
    >
      <ProfileAvatar size={AvatarSizes.small} />
      <UserInform>
        <UserName>{name}</UserName>
        <UserTag>{tag}</UserTag>
      </UserInform>
    </UserCardWrapper>
  );
});
