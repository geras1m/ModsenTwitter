import styled from 'styled-components';

import { mixinFlex } from '@/components/ThemeProvider/styled';
import { colors } from '@/constants/theme';
import { ThemeType, ThemeValue } from '@/constants/theme/types';

interface IToggleProps {
  theme?: ThemeType;
}

export const ToggleWrapper = styled.button`
  width: 50px;
  min-height: 28px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 14px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'left' })};

  position: relative;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-out;
  background-color: transparent;

  &:hover {
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.colors.grey};
  }
`;

export const Toggle = styled.div<IToggleProps>`
  width: 27px;
  height: 27px;
  border: 2px solid ${colors.grey};
  border-radius: 50%;
  position: absolute;
  left: -1px;
  transition: 0.3s ease;
  transform: translate(${(props) => (props.theme === ThemeValue.light ? '0' : '22px')});
`;
