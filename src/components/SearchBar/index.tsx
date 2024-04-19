import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchBarWrapper } from '@/components/SearchBar/styled';
import { TweetSearchBlock } from '@/components/SearchBar/TweetSearchBlock';
import { UserSearchBlock } from '@/components/SearchBar/UserSearchBlock';
import { routes } from '@/constants';

export const SearchBar = memo(() => {
  const location = useLocation();

  const isTweetSearchShow =
    location.pathname === routes.profile || location.pathname.includes('/tweets-search');

  return (
    <SearchBarWrapper>
      {isTweetSearchShow ? <TweetSearchBlock /> : <UserSearchBlock />}
    </SearchBarWrapper>
  );
});
