import styled from 'styled-components';

import { mixinFlex, mixinKeyframesSpinner } from '@/components/ThemeProvider/styled';

interface ISpinnerElementProps {
  size: string;
  $border: string;
}

export const SpinnerElement = styled.div<ISpinnerElementProps>`
  border: ${({ $border, theme }) => `${$border} solid ${theme.colors.white}`};
  border-top: ${({ $border, theme }) => `${$border} solid ${theme.colors.blue}`};
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  animation: spin 1s linear infinite;

  ${mixinKeyframesSpinner}
`;

export const SpinnerWrapper = styled.div`
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  overflow: hidden;
`;
