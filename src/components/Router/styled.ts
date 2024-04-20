import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const BackgroundLoader = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.bgLoader};

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;
