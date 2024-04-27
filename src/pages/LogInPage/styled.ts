import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const LoginPageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  padding: 0 10px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;
