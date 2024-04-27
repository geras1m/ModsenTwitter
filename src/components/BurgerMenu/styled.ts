import styled from 'styled-components';

import { mediaSizes } from '@/constants/theme';

interface IBurgerMenuProps {
  open: boolean;
}

const { px1150 } = mediaSizes;

export const BurgerWrapper = styled.nav<IBurgerMenuProps>`
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  overflow: hidden;

  div {
    width: 24px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.toggle};
    border-radius: 10px;
    transition: 0.3s ease;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: ${px1150}) {
    display: flex;

    div {
      width: 24px;
      height: 2px;
    }
  }
`;

export const Menu = styled.div<IBurgerMenuProps>`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${({ theme }) => theme.gradients.text};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  text-align: left;
  padding: 80px 20px;
  position: fixed;
  top: 0;
  right: 0;
  transition: ${({ theme }) => theme.transition};

  @media (max-width: ${px1150}) {
    display: flex;
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black2};
`;
