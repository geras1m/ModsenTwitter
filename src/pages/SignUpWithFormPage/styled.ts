import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';

export const SignUpWithFormPageWrapper = styled.section`
  width: 100%;
  height: 100%;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const SignUpBlock = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 30px 40px 40px;
  flex-direction: column;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const TwitterLogo = styled.img`
  width: 40px;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
  align-self: flex-start;
  margin-bottom: 40px;
`;
