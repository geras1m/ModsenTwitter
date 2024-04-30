import { FC } from 'react';

import { SpinnerElement, SpinnerWrapper } from '@/components/Spinner/styled';

interface ISpinnerProps {
  width: string;
  border: string;
}

export const Spinner: FC<ISpinnerProps> = ({ width, border }) => (
  <SpinnerWrapper>
    <SpinnerElement
      size={width}
      $border={border}
    />
  </SpinnerWrapper>
);
