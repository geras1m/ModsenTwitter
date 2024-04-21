import { useEffect } from 'react';

import { Background, BurgerWrapper } from '@/components/BurgerMenu/styled';
import { Portal } from '@/components/Portal';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setIsOpenNavBar } from '@/store/slices/themeSlice';

export const BurgerMenu = () => {
  const dispatch = useAppDispatch();
  const { isOpenNavBar } = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.body.style.overflow = isOpenNavBar ? 'hidden' : 'auto';
  }, [isOpenNavBar]);

  const handleOpenNabBar = () => {
    dispatch(setIsOpenNavBar(!isOpenNavBar));
  };

  return (
    <>
      <BurgerWrapper
        tabIndex={0}
        open={isOpenNavBar}
        onClick={handleOpenNabBar}
      >
        <div />
        <div />
        <div />
      </BurgerWrapper>
      {isOpenNavBar && (
        <Portal>
          <Background />
        </Portal>
      )}
    </>
  );
};
