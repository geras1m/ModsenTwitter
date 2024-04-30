import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  min-height: 100%;
  margin: 0 auto;

  ${mixinFlex({ alignItem: 'start', justifyContent: 'space-between' })};
`;
