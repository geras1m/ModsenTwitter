import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const LoginPageWrapper = styled.div`
  height: 100vh;
  padding: 0 10px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;
