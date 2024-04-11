import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const SideBarWrapper = styled.section`
  max-width: 230px;
  padding: 30px 15px 0;
`;

export const TwitterIcon = styled.img``;

export const SideBarNav = styled.nav``;

export const LinksList = styled.ul`
  margin-top: 50px;
`;

export const LinksItem = styled.li`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin: 30px 0;
  ${mixinFlex({ alignItem: 'center', justifyContent: 'start' })};
  transition: 0.2s ease-in;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const LinksImg = styled.img`
  margin-right: 20px;
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
  padding: 20px 17px;
  margin-top: 75px;
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const ProfileInfo = styled.div``;

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
