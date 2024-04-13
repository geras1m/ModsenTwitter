import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const EditProfileFormWrapper = styled.div`
  max-width: 500px;
  padding: 20px 10px;
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
