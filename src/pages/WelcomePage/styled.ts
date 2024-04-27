import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import twitterBannerPath from '@/assets/images/baner-twitter.jpg';
import { mixinFlex, mixinFontTemplates } from '@/components/ThemeProvider/styled';
import { mediaSizes } from '@/constants/theme';

const { px1500, px1150, px800 } = mediaSizes;

export const SignUpWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  margin-bottom: 46px;

  ${mixinFontTemplates({ size: 'px80', weight: 'black' })};

  @media (max-width: ${px1500}) {
    ${mixinFontTemplates({ size: 'px60' })};
  }

  @media (max-width: ${px1150}) {
    ${mixinFontTemplates({ size: 'px40' })};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;

  ${mixinFontTemplates({ size: 'px42', weight: 'black' })};

  @media (max-width: ${px1150}) {
    ${mixinFontTemplates({ size: 'px24' })};
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
  padding: 18px 0;
  border-radius: 42px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  background-color: transparent;
  transition: 0.2s ease-in;

  ${mixinFontTemplates({ size: 'px20', weight: 'medium' })};

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
  line-height: 20px;
  max-width: 375px;
  margin-bottom: 20px;

  ${mixinFontTemplates({ size: 'px14' })};

  @media (max-width: ${px800}) {
    text-align: center;
  }
`;

export const LogInText = styled.p`
  color: ${({ theme }) => theme.colors.text};

  ${mixinFontTemplates({ size: 'px16' })};
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
  flex-wrap: wrap;

  ${mixinFontTemplates({ size: 'px13' })};
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const ToLoginPageLink = styled(NavLink)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease-out;

  ${mixinFontTemplates({ size: 'px16', weight: 'light' })};

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
