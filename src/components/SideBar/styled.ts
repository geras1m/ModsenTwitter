import styled from 'styled-components';

import { mixinFlex, mixinFontTemplates } from '@/components/ThemeProvider/styled';
import { mediaSizes } from '@/constants/theme';

const { px1150 } = mediaSizes;

interface ISideBarWrapperProps {
  $isShow: boolean;
}

export const SideBarWrapper = styled.section<ISideBarWrapperProps>`
  width: 18%;
  max-width: 230px;
  padding: 30px 15px 0;
  transition: 0.2s ease-in;

  @media (max-width: ${px1150}) {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    position: fixed;
    left: ${({ $isShow }) => ($isShow ? '0' : '-240px')};
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

export const TwitterIcon = styled.img``;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${px1150}) {
    display: block;
  }
`;

export const BackgroundModal = styled.div`
  padding: 0 30px;
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black2};

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const ModalWrapper = styled.div`
  position: relative;
  padding: 15px;
  border-radius: 6px;
  width: 100%;
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );

  &:hover {
    opacity: 0.7;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 76px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${mixinFontTemplates({ size: 'px18' })};
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:hover {
    opacity: 0.8;
  }
`;

export const ProfileInfoBlock = styled.div`
  overflow: hidden;
  padding: 20px 17px;
  margin-top: 75px;
  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};
`;

export const ProfileInfo = styled.div`
  margin-left: 20px;
`;

export const ProfileName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;

  ${mixinFontTemplates({ size: 'px16', weight: 'semiBold' })};
`;

export const ProfileTag = styled.p`
  color: ${({ theme }) => theme.colors.grey};

  ${mixinFontTemplates({ size: 'px16' })};
`;
