import { FirebaseError } from 'firebase/app';

import { useToast } from '@/context/toastContext';
import { ToastType } from '@/types';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

export const useSetToastError = () => {
  const toast = useToast();

  const setToastError = (error: unknown) => {
    if (error instanceof FirebaseError) {
      toast?.open(getFirebaseErrorMessage(error), ToastType.error);
    } else {
      console.error(error);
    }
  };

  return { setToastError };
};
