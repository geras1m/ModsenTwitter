import { useEffect } from 'react';

import { Background, BurgerWrapper } from '@/components/BurgerMenu/styled';
import { Portal } from '@/components/Portal';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setIsOpenNavBar } from '@/store/slices/themeSlice';
import { changeDocumentBodyOverflow } from '@/utils/changeDocumentBodyOverflow';

export const BurgerMenu = () => {
  const dispatch = useAppDispatch();
  const { isOpenNavBar } = useAppSelector((state) => state.theme);

  useEffect(() => {
    changeDocumentBodyOverflow(isOpenNavBar);
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
