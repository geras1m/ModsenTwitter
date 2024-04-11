export interface IInputsName {
  year: 'year';
  month: 'month';
  day: 'day';
}

export type FormInputsNameTypes = 'name' | 'email' | 'phone' | 'password' | 'confirmPassword';

export const enum FirebaseErrorCodes {
  emailAlreadyInUse = 'auth/email-already-in-use',
}

export const enum ErrorsMessages {
  userExist = 'The user with this email already exists',
  unexpectedError = 'Unexpected error',
}

export type SingUpFormDataType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export interface IFirebaseError {
  isError: boolean;
  message: string;
}
