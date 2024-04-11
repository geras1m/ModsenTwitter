import TwitterIconPath from '@/assets/icons/twitter-icon.svg';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { navBarLinksData } from '@/components/SideBar/config';
import {
  Button,
  LinksImg,
  LinksItem,
  LinksList,
  ProfileInfo,
  ProfileInfoBlock,
  ProfileName,
  ProfileTag,
  SideBarNav,
  SideBarWrapper,
  TwitterIcon,
} from '@/components/SideBar/styled';

export const SideBar = () => (
  <SideBarWrapper>
    <TwitterIcon src={TwitterIconPath} />
    <SideBarNav>
      <LinksList>
        {navBarLinksData.map(({ title, icon }) => (
          <LinksItem key={title}>
            <LinksImg src={icon} /> {title}
          </LinksItem>
        ))}
      </LinksList>
    </SideBarNav>

    <Button type='button'>Tweet</Button>

    <ProfileInfoBlock>
      <ProfileAvatar size='s' />
      <ProfileInfo>
        <ProfileName>Bobur</ProfileName>
        <ProfileTag>@bobur_mavlonov</ProfileTag>
      </ProfileInfo>
    </ProfileInfoBlock>

    <Button type='button'>Log out</Button>
  </SideBarWrapper>
);
