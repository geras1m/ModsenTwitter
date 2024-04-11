import styled from 'styled-components';

export const SelectItem = styled.select`
  width: 100%;
  margin-right: 20px;
  padding: 24px 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  transition: 0.2s ease-in;
  appearance: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const Option = styled.option``;
