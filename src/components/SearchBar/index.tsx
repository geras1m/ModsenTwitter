import { useLocation } from 'react-router-dom';

import { SearchBarWrapper } from '@/components/SearchBar/styled';
import { TweetSearchBlock } from '@/components/SearchBar/TweetSearchBlock';
import { UserSearchBlock } from '@/components/SearchBar/UserSearchBlock';

export const SearchBar = () => {
  const location = useLocation();

  const isTweetSearchShow =
    location.pathname === '/profile' || location.pathname.includes('/tweets-search');

  return (
    <SearchBarWrapper>
      {isTweetSearchShow ? <TweetSearchBlock /> : <UserSearchBlock />}
    </SearchBarWrapper>
  );
};
