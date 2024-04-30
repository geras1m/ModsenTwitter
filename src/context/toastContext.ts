import { createContext, useContext } from 'react';

interface IToastContext {
  open: (message: string, type: string) => void;
  close: (id: number) => void;
}

export const ToastContext = createContext<null | IToastContext>(null);
export const useToast = () => useContext(ToastContext);
