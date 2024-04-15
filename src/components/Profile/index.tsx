import { useEffect, useState } from 'react';

import { EditProfileForm } from '@/components/EditProfileForm';
import {
  AvatarContainer,
  Count,
  EditButton,
  FollowersText,
  FollowersWrapper,
  Header,
  Name,
  ProfileBanner,
  ProfileBlock,
  ProfileHeaderName,
  ProfileTweetsCount,
  ProfileWrapper,
  Tag,
  UserTextData,
} from '@/components/Profile/styled';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { useAppSelector } from '@/hooks/reduxHooks';

export const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { name, surname, telegramLink, phone, gender, email } = useAppSelector(
    (state) => state.user,
  );
  const handleOpenEditModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : 'auto';
  }, [isOpenModal]);

  return (
    <ProfileWrapper>
      <Header>
        <ProfileHeaderName>
          {name} {surname}
        </ProfileHeaderName>
        <ProfileTweetsCount>1,070 Tweets</ProfileTweetsCount>
      </Header>

      <ProfileBanner />

      <ProfileBlock>
        <AvatarContainer>
          <ProfileAvatar size='l' />
        </AvatarContainer>
        <Name>
          {name} {surname}
        </Name>
        {telegramLink && <Tag>{telegramLink}</Tag>}
        {gender && <UserTextData>{gender}</UserTextData>}
        {phone && <UserTextData>{phone}</UserTextData>}
        <UserTextData>{email}</UserTextData>
        <UserTextData>Software developer at Modsen</UserTextData>

        <FollowersWrapper>
          <FollowersText>
            <Count>67</Count> Following
          </FollowersText>
          <FollowersText>
            <Count>47</Count> Followers
          </FollowersText>
        </FollowersWrapper>

        {isOpenModal && <EditProfileForm closeModal={handleOpenEditModal} />}

        <EditButton
          type='button'
          onClick={handleOpenEditModal}
        >
          Edit profile
        </EditButton>
      </ProfileBlock>
    </ProfileWrapper>
  );
};
