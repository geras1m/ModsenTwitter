import styled from 'styled-components';

import { mixinFontTemplates } from '@/components/ThemeProvider/styled';

export const SuggestionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;

  ${mixinFontTemplates({ size: 'px24', weight: 'bold' })};
`;
