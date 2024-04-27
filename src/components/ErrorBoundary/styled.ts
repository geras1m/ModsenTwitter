import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';
import { colors, fontSizes, fontWeight } from '@/constants/theme';

export const ErrorBoundaryWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const Button = styled.button`
  margin-top: 20px;
  font-size: ${fontSizes.px18};
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: ${colors.blue};
  cursor: pointer;
  opacity: 0.8;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ErrorWrapper = styled.div`
  max-width: 250px;
  flex-direction: column;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const ErrorMessage = styled.div`
  color: ${colors.black};
  font-size: ${fontSizes.px18};
  font-weight: ${fontWeight.semiBold};
`;
