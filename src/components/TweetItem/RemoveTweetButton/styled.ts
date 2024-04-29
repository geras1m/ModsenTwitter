import styled from 'styled-components';

import { mixinFlex, mixinFontTemplates } from '@/components/ThemeProvider/styled';
import { mediaSizes } from '@/constants/theme';

const { px800 } = mediaSizes;

export const Image = styled.img`
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MenuButton = styled.div`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: -22px;
  bottom: -40px;
  padding: 5px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${mixinFontTemplates({ size: 'px14' })};
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${px800}) {
    right: 0;
  }
`;

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.opacityBlack};

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const ConfirmModal = styled.div`
  position: relative;
  padding: 30px 15px;
  border-radius: 6px;
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  flex-direction: column;
  margin: 0 30px;

  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};
`;

export const WarningText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  ${mixinFontTemplates({ size: 'px18' })};
`;

export const ConfirmRemoveButton = styled.button`
  margin-top: 15px;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${mixinFontTemplates({ size: 'px18' })};
  ${mixinFlex({ alignItem: 'center', justifyContent: 'center' })};

  &:hover {
    opacity: 0.8;
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
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
`;
