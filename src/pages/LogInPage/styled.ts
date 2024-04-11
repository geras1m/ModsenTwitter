import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const LoginPageWrapper = styled.div`
  height: 100vh;
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;
