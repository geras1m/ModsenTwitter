import { ThemeType } from '@/constants/theme/types';

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

type TweetDataWithoutLikesPropType = Omit<ITweetData, 'likes'>;

export type TweetItemType = TweetDataWithoutLikesPropType & {
  userId: string;
  handleRemoveTweet: (tweetId: string) => void;
  handleChangeLike: (tweetId: string | number, userId: string) => void;
  likes: number;
  isActiveLikeIcon: boolean;
};

export interface IThemeProps {
  theme: ThemeType;
  switchTheme: (theme: ThemeType) => void;
}
