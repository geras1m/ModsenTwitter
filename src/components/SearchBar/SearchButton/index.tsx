import { useEffect } from 'react';

import { assets } from '@/assets';
import { Portal } from '@/components/Portal';
import {
  Background,
  ButtonImage,
  SearchBarButton,
} from '@/components/SearchBar/SearchButton/styled';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setIsOpenSearchBar } from '@/store/slices/themeSlice';

const { SearchIcon } = assets;

export const SearchButton = () => {
  const { isOpenSearchBar } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.style.overflow = isOpenSearchBar ? 'hidden' : 'auto';
  }, [isOpenSearchBar]);

  const handleOpenSearchBar = () => {
    dispatch(setIsOpenSearchBar(!isOpenSearchBar));
  };

  return (
    <>
      <SearchBarButton onClick={handleOpenSearchBar}>
        <ButtonImage src={SearchIcon} />
      </SearchBarButton>
      {isOpenSearchBar && (
        <Portal>
          <Background />
        </Portal>
      )}
    </>
  );
};
