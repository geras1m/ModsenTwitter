import { memo } from 'react';

import { CreateTweet } from '@/components/CreateTweet';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { TweetsBlock } from '@/components/TweetsBlock';
import { useAppSelector } from '@/hooks/reduxHooks';
import { EditProfileButton } from '@/pages/Profile/EditProfileButton';
import {
  AvatarContainer,
  Count,
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
} from '@/pages/Profile/styled';

export const Profile = memo(() => {
  const { id, name, surname, telegramLink, phone, gender, email } = useAppSelector(
    (state) => state.user,
  );

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

        <EditProfileButton />
      </ProfileBlock>
      <CreateTweet />
      <TweetsBlock
        page='profile'
        id={id!}
      />
    </ProfileWrapper>
  );
});
