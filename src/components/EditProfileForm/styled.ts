import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const EditProfileFormWrapper = styled.form`
  position: relative;
  max-width: 500px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
`;

export const Legend = styled.legend`
  margin-left: 20px;
  font-size: ${({ theme }) => theme.fontSizes.px18};
`;

export const GenderInputWrapper = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.colors.white1};
  border-radius: 6px;
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 15px;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'center' })};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.px18};
  cursor: pointer;
  margin-bottom: 10px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:last-child {
    margin-bottom: 0;
  }

  & input {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.white1};
  color: rgb(39, 39, 39);
  font-size: ${({ theme }) => theme.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
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

  &:disabled {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white1};
  }
`;

export const CloseButton = styled.button`
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
