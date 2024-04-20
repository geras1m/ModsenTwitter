import styled from 'styled-components';

export const EditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }
`;
