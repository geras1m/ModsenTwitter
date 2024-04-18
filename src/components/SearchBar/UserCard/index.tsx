import { memo } from 'react';

import { ProfileAvatar } from '@/components/ProfileAvatar';
import {
  UserCardWrapper,
  UserInform,
  UserName,
  UserTag,
} from '@/components/SearchBar/UserCard/styled';

interface IUserCardProps {
  id: string;
  name: string;
  tag: string;
  handleOpenUser: (id: string) => void;
}

export const UserCard = memo((data: IUserCardProps) => {
  const { id, name, tag, handleOpenUser } = data;

  return (
    <UserCardWrapper onClick={() => handleOpenUser(id)}>
      <ProfileAvatar size='s' />
      <UserInform>
        <UserName>{name}</UserName>
        <UserTag>{tag}</UserTag>
      </UserInform>
    </UserCardWrapper>
  );
});
