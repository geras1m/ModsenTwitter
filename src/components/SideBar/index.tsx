import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import TwitterIconPath from '@/assets/icons/twitter-icon.svg';
import { CreateTweet } from '@/components/CreateTweet';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { navBarLinksData, noName, noTelegram } from '@/components/SideBar/config';
import {
  BackgroundModal,
  Button,
  CloseModalButton,
  LinksImg,
  LinksItem,
  LinksList,
  ModalWrapper,
  ProfileInfo,
  ProfileInfoBlock,
  ProfileName,
  ProfileTag,
  SideBarNav,
  SideBarWrapper,
  TwitterIcon,
} from '@/components/SideBar/styled';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { FirebaseService } from '@/service';
import { removeUser } from '@/store/slices/userSlice';
import { getCutString } from '@/utils/getCutString';

export const SideBar = memo(() => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const location = useLocation();
  const { name, telegramLink } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : 'auto';
  }, [isOpenModal]);

  const handleLogOut = async () => {
    await FirebaseService.LogOut();
    dispatch(removeUser());
  };

  const handleOpenCloseTweetModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <SideBarWrapper>
      <TwitterIcon src={TwitterIconPath} />
      <SideBarNav>
        <LinksList>
          {navBarLinksData.map(({ title, icon, path }) => (
            <LinksItem
              to={path}
              key={title}
            >
              <LinksImg src={icon} /> {title}
            </LinksItem>
          ))}
        </LinksList>
      </SideBarNav>

      <Button
        type='button'
        onClick={handleOpenCloseTweetModal}
      >
        Tweet
      </Button>

      {isOpenModal && (
        <BackgroundModal>
          <ModalWrapper>
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
