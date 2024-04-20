import styled from 'styled-components';

export const SuggestionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSizes.px24};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
