import {
  AvatarContainer,
  Count,
  EditButton,
  FollowersText,
  FollowersWrapper,
  Header,
  Name,
  PlaceOfWork,
  ProfileBanner,
  ProfileBlock,
  ProfileHeaderName,
  ProfileTweetsCount,
  ProfileWrapper,
  Tag,
} from '@/components/Profile/styled';
import { ProfileAvatar } from '@/components/ProfileAvatar';

export const Profile = () => (
  <ProfileWrapper>
    <Header>
      <ProfileHeaderName>Bobur</ProfileHeaderName>
      <ProfileTweetsCount>1,070 Tweets</ProfileTweetsCount>
    </Header>

    <ProfileBanner />

    <ProfileBlock>
      <AvatarContainer>
        <ProfileAvatar size='l' />
      </AvatarContainer>
      <Name>Bobur</Name>
      <Tag>@bobur_mavlonov</Tag>
      <PlaceOfWork>Software developer at Modsen</PlaceOfWork>

      <FollowersWrapper>
        <FollowersText>
          <Count>67</Count> Following
        </FollowersText>
        <FollowersText>
          <Count>47</Count> Followers
        </FollowersText>
      </FollowersWrapper>

      <EditButton>Edit profile</EditButton>
    </ProfileBlock>
  </ProfileWrapper>
);

// через портал открывать модалку
