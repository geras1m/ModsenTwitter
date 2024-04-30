import { CloseToastButton, ToastText, ToastWrapper } from '@/components/Toast/styled';
import { useTimeout } from '@/hooks/useTimeout';

export const Toast = ({
  message,
  type,
  close,
}: {
  message: string;
  type: string;
  close: () => void;
}) => {
  useTimeout(close, 4000);
  return (
    <ToastWrapper $toastType={type}>
      <ToastText data-testid='toast'>{message}</ToastText>
      <CloseToastButton onClick={close} />
    </ToastWrapper>
  );
};
