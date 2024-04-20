import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import twitterBannerPath from '@/assets/images/baner-twitter.jpg';
import { mixinFlex } from '@/components/ThemeProvider/styled';
import { mediaSizes } from '@/constants/theme';

const { px1500, px1150, px800 } = mediaSizes;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.section`
  flex: 1 0 auto;
  display: flex;

  @media (max-width: ${px800}) {
    justify-content: center;
  }
`;

export const TwitterBanner = styled.div`
  width: 50%;
  min-height: 100%;
  background-image: url(${twitterBannerPath});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${px800}) {
    display: none;
  }
`;

export const SignUpBlock = styled.div`
  margin-left: 40px;
  flex-direction: column;
  padding: 10px;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'center' })};

  @media (max-width: ${px1150}) {
    margin-left: 15px;
  }

  @media (max-width: ${px800}) {
    align-items: center;
    margin-left: 0;
  }
`;

export const TwitterIcon = styled.img`
  width: 50px;
  margin-bottom: 57px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px80};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin-bottom: 46px;

  @media (max-width: ${px1500}) {
    font-size: ${({ theme }) => theme.fontSizes.px60};
  }

  @media (max-width: ${px1150}) {
    font-size: ${({ theme }) => theme.fontSizes.px40};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px42};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin-bottom: 30px;

  @media (max-width: ${px1150}) {
    font-size: ${({ theme }) => theme.fontSizes.px24};
  }
`;

export const GoogleIcon = styled.img``;

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 403px;
  margin-bottom: 30px;
`;

export const SignUpButton = styled.button`
  position: relative;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.px20};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: 18px 0;
  border-radius: 42px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  background-color: transparent;
  transition: 0.2s ease-in;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  & > img {
    width: 24px;
    margin-right: 5px;
  }

  &:first-child {
    margin-bottom: 20px;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const PrivacyText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px14};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 20px;
  max-width: 375px;
  margin-bottom: 20px;

  @media (max-width: ${px800}) {
    text-align: center;
  }
`;

export const LogInText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px16};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const PrivacyLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease-in;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  flex: 0 0 auto;
  height: 55px;
  padding: 0 20px;
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  @media (max-width: ${px800}) {
    height: 80px;
  }
`;

export const FooterLinks = styled.ul`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.px13};
  flex-wrap: wrap;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const ToLoginPageLink = styled(NavLink)`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px16};
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const ToSignUpPageLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`;

export const LinkItem = styled.li`
  margin-right: 15px;
  cursor: pointer;
  transition: 0.2s ease-in;
  color: ${({ theme }) => theme.colors.text};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;
