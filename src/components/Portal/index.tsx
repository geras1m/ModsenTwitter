import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactNode;
}

export const Portal: FC<IPortalProps> = ({ children }) => {
  const domElement = document.getElementById('modal-root')!;
  return createPortal(children, domElement);
};
