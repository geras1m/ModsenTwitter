import { ChangeEvent } from 'react';

export interface IInputsName {
  year: 'year';
  month: 'month';
  day: 'day';
}

export type FormInputsNameTypes = 'name' | 'email' | 'phone' | 'password' | 'confirmPassword';

export const enum ToastType {
  success = 'success',
  error = 'error',
}

export const enum FirebaseErrorCodes {
  emailAlreadyInUse = 'auth/email-already-in-use',
  invalidPassword = 'auth/invalid-credential',
}

export const enum ErrorsMessages {
  userExist = 'The user with this email already exists',
  invalidPassword = 'Invalid password or email',
  unexpectedError = 'Unexpected error',
}

export type SingUpFormDataType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  year: string;
  month: string;
  day: string;
};

export interface IFirebaseError {
  isError: boolean;
  message: string;
}

export interface ITweetData {
  uis: string | number;
  authorId: string;
  date: string;
  text: string;
  imgLink: string | null;
  likes: string[];
  authorName: string;
  authorTag: string;
}

export interface IUserData {
  id?: string;
  uis?: string;
  isGoogleAuth: false;
  email: string;
  surname: string;
  gender: string;
  telegramLink: string;
  name: string;
  phone: string;
}

type TweetDataWithoutLikesPropType = Omit<ITweetData, 'likes'>;

export type TweetItemType = TweetDataWithoutLikesPropType & {
  userId: string;
  handleRemoveTweet: (tweetId: string) => void;
  handleChangeLike: (tweetId: string | number, userId: string) => void;
  likes: number;
  isActiveLikeIcon: boolean;
};

type CommonReturnedSearchType = {
  isLoading: boolean;
  searchValue: string;
  debouncedValue: string;
  handleChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOpenItemOnNewPage: (id: string) => void;
};

export type UsersType = CommonReturnedSearchType & {
  itemsList: IUserData[];
};

export type TweetsType = CommonReturnedSearchType & {
  itemsList: ITweetData[];
};

export type UserSearchType = 'users-search';
export type TweetSearchType = 'tweets-search';

export type PathDBType = 'users' | 'tweets';

export type AvatarSizeType = 's' | 'l';

export const enum AvatarSizes {
  small = 's',
  large = 'l',
}
