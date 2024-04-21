import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { CloseButton, SearchBarWrapper } from '@/components/SearchBar/styled';
import { TweetSearchBlock } from '@/components/SearchBar/TweetSearchBlock';
import { UserSearchBlock } from '@/components/SearchBar/UserSearchBlock';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setIsOpenSearchBar } from '@/store/slices/themeSlice';

export const SearchBar = memo(() => {
  const location = useLocation();
  const { isOpenSearchBar } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const isTweetSearchShow =
    location.pathname === routes.profile || location.pathname.includes('/tweets-search');

  return (
    <SearchBarWrapper $isShow={isOpenSearchBar}>
      <CloseButton onClick={() => dispatch(setIsOpenSearchBar(!isOpenSearchBar))} />
      {isTweetSearchShow ? <TweetSearchBlock /> : <UserSearchBlock />}
    </SearchBarWrapper>
  );
});
