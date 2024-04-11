import { FirebaseError } from 'firebase/app';

import { ErrorsMessages, FirebaseErrorCodes } from '@/types';

export const getFirebaseErrorMessage = (error: FirebaseError) => {
  const { code } = error;

  if (code === FirebaseErrorCodes.emailAlreadyInUse) return ErrorsMessages.userExist;
  return ErrorsMessages.unexpectedError;
};
