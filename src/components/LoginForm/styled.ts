import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mixinFlex, mixinFontTemplates } from '@/components/ThemeProvider/styled';
import { mediaSizes } from '@/constants/theme';

export const LoginFormWrapper = styled.section`
  width: 100%;
  max-width: 450px;
  flex-direction: column;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'start' })};
`;

export const Icon = styled.img``;

export const Title = styled.h2`
  margin: 35px 0;
  color: ${({ theme }) => theme.colors.text};

  ${mixinFontTemplates({ size: 'px42', weight: 'black' })};

  @media (max-width: ${mediaSizes.px500}) {
    ${mixinFontTemplates({ size: 'px30' })};
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.white1};
  transition: 0.3s ease;
  margin-bottom: 10px;

  ${mixinFontTemplates({ size: 'px18' })};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const SubmitButton = styled.button`
  border: none;
  border-radius: 76px;
  padding: 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 40px;

  ${mixinFontTemplates({ size: 'px18' })};
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white1};
  }
`;

export const ToPageLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  text-align: end;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease-out;
  margin-bottom: 17px;

  ${mixinFontTemplates({ size: 'px18', weight: 'light' })};

  &:hover {
    opacity: 0.7;
  }
`;
