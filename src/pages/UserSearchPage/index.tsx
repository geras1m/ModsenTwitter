import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TweetsBlock } from '@/components/TweetsBlock';
import { UserSearchPageWrapper } from '@/pages/UserSearchPage/styled';
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
      {user && <p>{user.name}</p>}
      {id && (
        <TweetsBlock
          page='users-search'
          id={id}
        />
      )}
    </UserSearchPageWrapper>
  );
};
