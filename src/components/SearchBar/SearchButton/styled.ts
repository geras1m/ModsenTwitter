import styled from 'styled-components';

import { mediaSizes } from '@/constants/theme';

const { px1150 } = mediaSizes;

export const SearchBarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: none;
  cursor: pointer;

  @media (max-width: ${px1150}) {
    display: block;
  }
`;

export const ButtonImage = styled.img``;

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black2};
`;
