import { memo } from 'react';

import { BurgerMenu } from '@/components/BurgerMenu';
import { CreateTweet } from '@/components/CreateTweet';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { SearchButton } from '@/components/SearchBar/SearchButton';
import { TweetsBlock } from '@/components/TweetsBlock';
import { profileValue } from '@/constants';
import { useAppSelector } from '@/hooks/reduxHooks';
import { EditProfileButton } from '@/pages/Profile/EditProfileButton';
import {
  AvatarContainer,
  Count,
  FollowersText,
  FollowersWrapper,
  Header,
  HeaderInfoWrapper,
  Name,
  ProfileBanner,
  ProfileBlock,
  ProfileHeaderName,
  ProfileTweetsCount,
  ProfileWrapper,
  Tag,
  UserTextData,
} from '@/pages/Profile/styled';

export const Profile = memo(() => {
  const { id, name, surname, telegramLink, phone, gender, email } = useAppSelector(
    (state) => state.user,
  );

  return (
    <ProfileWrapper>
      <Header>
        <BurgerMenu />
        <HeaderInfoWrapper>
          <ProfileHeaderName>
            {name} {surname}
          </ProfileHeaderName>
          <ProfileTweetsCount>1,070 Tweets</ProfileTweetsCount>
        </HeaderInfoWrapper>
        <SearchButton />
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

        <EditProfileButton />
      </ProfileBlock>
      <CreateTweet />
      <TweetsBlock
        page={profileValue}
        id={id!}
      />
    </ProfileWrapper>
  );
});
