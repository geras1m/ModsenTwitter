import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import {
  inputsName,
  messagePasswordsShouldMatch,
  messageToSelectDay,
} from '@/components/SignUpForm/config';
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
    clearErrors,
  } = useForm<SingUpFormDataType>({ mode: 'onChange' });

  const dates = getDateDays(monthBirth, yearBirth);
  const months = getMonths(yearBirth);
  const years = getYears();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name: selectName, value } = e.target;

      const { year, month, day } = inputsName;

      const getNewDaysListForSelectedMonth = getDateDays(Number(value), yearBirth);
      const isThereDayInDaysList =
        dayBirth !== null && getNewDaysListForSelectedMonth.includes(dayBirth);

      if (selectName === month) {
        setMonthBirth(Number(e.target.value));

        if (!isThereDayInDaysList) {
          setError(day, { message: messageToSelectDay });
          setDayBirth(null);
        } else {
          clearErrors(day);
        }
      }
      if (selectName === year) {
        setYearBirth(Number(e.target.value));
      }
      if (selectName === day) {
        setDayBirth(Number(e.target.value));

        clearErrors(day);
      }
    },
    [dates, monthBirth, dayBirth, yearBirth, clearErrors, setError],
  );

  const handlerOnSubmit: SubmitHandler<SingUpFormDataType> = async (data) => {
    const { email, name, phone, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setError('confirmPassword', { message: messagePasswordsShouldMatch });
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
