import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mixinFlex, mixinFontTemplates } from '@/components/ThemeProvider/styled';

export const Form = styled.form`
  width: 100%;
  flex-direction: column;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'start' })};
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

export const ToPageLink = styled(NavLink)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease-out;
  margin: 25px 0 17px;

  ${mixinFontTemplates({ size: 'px18', weight: 'light' })};

  &:hover {
    opacity: 0.7;
  }
`;

export const DateTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  align-self: flex-start;
  margin-bottom: 32px;

  ${mixinFontTemplates({ size: 'px18' })};
`;

export const PolicyText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 24px;
  opacity: 0.7;
  margin-bottom: 32px;

  ${mixinFontTemplates({ size: 'px16' })};
`;

export const DateWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'space-between' })};
`;

export const ErrorMessage = styled.p`
  display: inline-block;
  width: 100%;
  height: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.red};

  ${mixinFontTemplates({ size: 'px14' })};
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
