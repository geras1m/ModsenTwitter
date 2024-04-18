import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import { inputsName } from '@/components/SignUpForm/config';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { FirebaseService } from '@/service';
import { setUser } from '@/store/slices/userSlice';
import { IFirebaseError, SingUpFormDataType } from '@/types';
import { getDateDays, getMonths, getYears } from '@/utils/dateOfBirth';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

export const useSignUpFormLogic = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [dayBirth, setDayBirth] = useState<null | number>(null);
  const [monthBirth, setMonthBirth] = useState<null | number>(null);
  const [yearBirth, setYearBirth] = useState<null | number>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firebaseError, setFirebaseError] = useState<IFirebaseError>({
    isError: false,
    message: '',
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    setError,
  } = useForm<SingUpFormDataType>({ mode: 'onBlur' });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectName = e.target.name;

    const { year, month, day } = inputsName;

    if (selectName === month) setMonthBirth(Number(e.target.value));
    if (selectName === year) setYearBirth(Number(e.target.value));
    if (selectName === day) setDayBirth(Number(e.target.value));
  };

  const handlerOnSubmit: SubmitHandler<SingUpFormDataType> = async (data) => {
    const { email, name, phone, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setError('confirmPassword', { message: 'Password and Confirm password fields must match!' });
      return;
    }

    try {
      setIsLoading(true);

      const user = await FirebaseService.SignUpWithForm(
        name,
        email,
        password,
        phone,
        yearBirth!,
        monthBirth!,
        dayBirth!,
      );

      const born = new Date(yearBirth!, monthBirth!, dayBirth!);

      dispatch(
        setUser({
          id: user.uid,
          isGoogleAuth: false,
          surname: null,
          telegramLink: null,
          gender: null,
          email,
          born,
          phone,
          name,
        }),
      );
      navigate('/profile');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setFirebaseError({ isError: true, message: getFirebaseErrorMessage(error) });
      } else {
        console.error(error);
      }
    }

    setIsLoading(false);
    reset();
  };

  const dates = getDateDays(monthBirth, yearBirth);
  const months = getMonths(yearBirth);
  const years = getYears();

  return {
    dates,
    months,
    years,
    handlerOnSubmit,
    handleChange,
    isLoading,
    firebaseError,
    register,
    errors,
    handleSubmit,
    setValue,
  };
};
