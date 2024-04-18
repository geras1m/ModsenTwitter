import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const SideBarWrapper = styled.section`
  width: 18%;
  max-width: 230px;
  padding: 30px 15px 0;
`;

export const TwitterIcon = styled.img``;

export const SideBarNav = styled.nav``;

export const LinksList = styled.ul`
  margin-top: 50px;
`;

export const LinksItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin: 30px 0;
  transition: 0.2s ease-in;
  cursor: pointer;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.6;
  }

  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const LinksImg = styled.img`
  margin-right: 20px;
`;

export const BackgroundModal = styled.div`
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
  background-color: ${({ theme }) => theme.colors.white};
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
  font-size: ${({ theme }) => theme.fontSizes.px18};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

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
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.px16};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-bottom: 5px;
`;

export const ProfileTag = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.px16};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;
