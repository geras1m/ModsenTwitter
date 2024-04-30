export interface ISignUpWithFormProps {
  name: string;
  email: string;
  password: string;
  phone: string;
  yearBirth: number;
  monthBirth: number;
  dayBirth: number;
}

export interface IChangeUserDataProps {
  id: string;
  email: string;
  name: string | undefined;
  surname: string | undefined;
  gender: string | undefined;
  telegramLink: string | undefined;
  currentPassword: string | undefined;
  newPassword: string | undefined;
}

export interface ICreateNewTweetInDB {
  id: string | number;
  text: string;
  imgLink: string | null;
  date: string;
  authorId: string;
  authorName: string;
  authorTag: string;
}
