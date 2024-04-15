import { ReactNode, useMemo, useState } from 'react';

import { Portal } from '@/components/Portal';
import { Toast } from '@/components/Toast';
import { ToastContext } from '@/context/toastContext';

interface IToastData {
  id: number;
  message: string;
  type: string;
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<[] | IToastData[]>([]);

  const open = (message: string, type: string) =>
    setToasts((currentToasts) => [...currentToasts, { message, type, id: Date.now() }]);

  const close = (id: number) =>
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));

  const contextValue = useMemo(() => ({ open, close }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <Portal>
        <div className='toasts-wrapper'>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              close={() => close(toast.id)}
            />
          ))}
        </div>
      </Portal>
    </ToastContext.Provider>
  );
};
