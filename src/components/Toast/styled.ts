import styled from 'styled-components';

interface IToast {
  $toastType: string;
}

export const ToastWrapper = styled.div<IToast>`
  position: fixed;
  z-index: 100;
  bottom: 20px;
  right: 20px;
  width: 100%;
  max-width: 300px;
  border-radius: 6px;
  padding: 10px 35px 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, $toastType }) =>
    $toastType === 'success' ? theme.colors.lightGreen : theme.colors.lightRed};
`;

export const ToastText = styled.p`
  word-wrap: break-word;
`;

export const CloseToastButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.black};
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
