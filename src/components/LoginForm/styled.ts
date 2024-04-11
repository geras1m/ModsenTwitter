import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const LoginFormWrapper = styled.section`
  width: 100%;
  max-width: 450px;
  flex-direction: column;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'start' })};
`;

export const Icon = styled.img``;

export const Title = styled.h2`
  margin: 35px 0;
  font-size: ${({ theme }) => theme.fontSizes.px42};
  font-weight: ${({ theme }) => theme.fontWeight.black};
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.white1};
  color: rgb(39, 39, 39);
  font-size: ${({ theme }) => theme.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 25px;

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
  font-size: ${({ theme }) => theme.fontSizes.px18};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;
  margin-bottom: 40px;

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
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease-out;
  margin-bottom: 17px;

  &:hover {
    opacity: 0.7;
  }
`;
