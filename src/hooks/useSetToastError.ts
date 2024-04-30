import { FirebaseError } from 'firebase/app';

import { defaultErrorMessage } from '@/constants';
import { useToast } from '@/context/toastContext';
import { ToastType } from '@/types';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

export const useSetToastError = () => {
  const toast = useToast();

  const setToastError = (error: unknown) => {
    if (error instanceof FirebaseError) {
      toast?.open(getFirebaseErrorMessage(error), ToastType.error);
    } else {
      toast?.open(defaultErrorMessage, ToastType.error);
    }
  };

  return { setToastError };
};
