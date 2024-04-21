import styled from 'styled-components';

import { assets } from '@/assets';
import { mixinFlex } from '@/components/ThemeProvider/styled';
import { mediaSizes } from '@/constants/theme';

const { BannerProfile } = assets;

const { px1150 } = mediaSizes;

export const ProfileWrapper = styled.main`
  width: 60%;
  max-width: 910px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-top: none;

  @media (max-width: ${px1150}) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  padding: 20px 15px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })};
`;

export const HeaderInfoWrapper = styled.div`
  @media (max-width: ${px1150}) {
    margin-left: 20px;
    ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};
  }
`;

export const ProfileHeaderName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px20};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 5px;

  @media (max-width: ${px1150}) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const ProfileTweetsCount = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.px16};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const ProfileBanner = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${BannerProfile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfileBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 25px 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const AvatarContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  top: -60px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const Name = styled.h1`
  margin-top: 65px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Tag = styled.h2`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.px16};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const UserTextData = styled.p`
  margin: 17px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  &:last-child {
    margin-bottom: 57px;
  }
`;

export const FollowersWrapper = styled.div`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};
`;

export const FollowersText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Count = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
