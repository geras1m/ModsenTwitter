import styled from 'styled-components';

import { assets } from '@/assets';
import { mixinFlex } from '@/components/ThemeProvider/styled';
import { mediaSizes } from '@/constants/theme';

const { BannerProfile } = assets;
const { px1150 } = mediaSizes;

export const UserSearchPageWrapper = styled.main`
  width: 60%;
  max-width: 910px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-top: none;

  @media (max-width: ${px1150}) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ProfileBanner = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${BannerProfile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AvatarContainer = styled.div`
  position: relative;
  height: 100px;
  border-radius: 50%;
  top: -60px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const UserInformBlock = styled.div`
  position: relative;
  min-height: 100px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const UserTag = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
