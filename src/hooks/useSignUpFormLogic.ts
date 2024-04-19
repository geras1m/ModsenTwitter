import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import { inputsName } from '@/components/SignUpForm/config';
import { routes, successMessage } from '@/constants';
import { useToast } from '@/context/toastContext';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { FirebaseService } from '@/service';
import { setUser } from '@/store/slices/userSlice';
import { SingUpFormDataType, ToastType } from '@/types';
import { getDateDays, getMonths, getYears } from '@/utils/dateOfBirth';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

export const useSignUpFormLogic = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [dayBirth, setDayBirth] = useState<null | number>(null);
  const [monthBirth, setMonthBirth] = useState<null | number>(null);
  const [yearBirth, setYearBirth] = useState<null | number>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
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

      const user = await FirebaseService.SignUpWithForm({
        name,
        email,
        password,
        phone,
        yearBirth: yearBirth!,
        monthBirth: monthBirth!,
        dayBirth: dayBirth!,
      });

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

      toast?.open(successMessage, ToastType.success);
      navigate(routes.profile);
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast?.open(getFirebaseErrorMessage(error), ToastType.error);
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
    register,
    errors,
    handleSubmit,
    setValue,
  };
};
