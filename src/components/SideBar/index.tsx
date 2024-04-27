import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import TwitterIconPath from '@/assets/icons/twitter-icon.svg';
import { CreateTweet } from '@/components/CreateTweet';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { noName, noTelegram } from '@/components/SideBar/config';
import { NavBar } from '@/components/SideBar/NavBar';
import {
  BackgroundModal,
  Button,
  CloseButton,
  CloseModalButton,
  ModalWrapper,
  ProfileInfo,
  ProfileInfoBlock,
  ProfileName,
  ProfileTag,
  SideBarWrapper,
  TwitterIcon,
} from '@/components/SideBar/styled';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useOutsideClick } from '@/hooks/useOutClick';
import { FirebaseService } from '@/service';
import { setIsOpenNavBar } from '@/store/slices/themeSlice';
import { removeUser } from '@/store/slices/userSlice';
import { changeDocumentBodyOverflow } from '@/utils/changeDocumentBodyOverflow';
import { getCutString } from '@/utils/getCutString';

export const SideBar = memo(() => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const location = useLocation();
  const { name, telegramLink } = useAppSelector((state) => state.user);
  const { isOpenNavBar } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleOpenCloseTweetModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const outsideRef = useOutsideClick(handleOpenCloseTweetModal);

  useEffect(() => {
    changeDocumentBodyOverflow(isOpenModal);
  }, [isOpenModal]);

  const handleLogOut = async () => {
    await FirebaseService.LogOut();
    dispatch(removeUser());
  };

  return (
    <SideBarWrapper $isShow={isOpenNavBar}>
      <TwitterIcon src={TwitterIconPath} />

      <CloseButton
        type='button'
        onClick={() => dispatch(setIsOpenNavBar(false))}
      />

      <NavBar />

      <Button
        type='button'
        onClick={handleOpenCloseTweetModal}
      >
        Tweet
      </Button>

      {isOpenModal && (
        <BackgroundModal>
          <ModalWrapper ref={outsideRef}>
            <CreateTweet />
            <CloseModalButton
              type='button'
              onClick={handleOpenCloseTweetModal}
            />
          </ModalWrapper>
        </BackgroundModal>
      )}

      <ProfileInfoBlock>
        <ProfileAvatar size='s' />
        <ProfileInfo>
          <ProfileName>{name ? getCutString(name, 12) : noName}</ProfileName>
          <ProfileTag>{telegramLink ? getCutString(telegramLink, 14) : noTelegram}</ProfileTag>
        </ProfileInfo>
      </ProfileInfoBlock>
      {location.pathname === routes.profile && (
        <Button
          type='button'
          onClick={handleLogOut}
        >
          Log out
        </Button>
      )}
    </SideBarWrapper>
  );
});
