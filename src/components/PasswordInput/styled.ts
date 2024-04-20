import styled from 'styled-components';

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.white1};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 25px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const EyeImage = styled.img``;

export const Button = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
