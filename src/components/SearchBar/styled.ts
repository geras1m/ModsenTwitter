import styled from 'styled-components';

import { mediaSizes } from '@/constants/theme';

const { px1150 } = mediaSizes;

interface ISearchBarWrapperProps {
  $isShow: boolean;
}

export const SearchBarWrapper = styled.section<ISearchBarWrapperProps>`
  width: 26%;
  max-width: 373px;
  padding-top: 30px;
  margin: 0 15px;
  transition: 0.2s ease-in;

  @media (max-width: ${px1150}) {
    padding: 60px 10px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    margin: 0;
    position: fixed;
    right: ${({ $isShow }) => ($isShow ? '0' : '-400px')};
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  top: 13px;
  left: 20px;
  position: absolute;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px 15px 64px;
  border-radius: 31px;
  border: 1px solid ${({ theme }) => theme.colors.white1};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const SuggestionBlock = styled.div`
  padding: 43px 15px 15px;
  border-radius: 10px;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.bgSuggestion};
`;

export const NotFoundMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.px14};
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  z-index: 5;
  top: 30px;
  left: 20px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${px1150}) {
    display: block;
  }
`;
