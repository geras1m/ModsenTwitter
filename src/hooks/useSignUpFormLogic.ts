import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { inputsName } from '@/components/SignUpForm/config';
import { db } from '@/firabase';
import { IFirebaseError, SingUpFormDataType } from '@/types';
import { getDateDays, getMonths, getYears } from '@/utils/dateOfBirth';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

export const useSignUpFormLogic = () => {
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

      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, 'users', `${user.uid}`), {
        uis: user.uid,
        born: new Date(yearBirth!, monthBirth!, dayBirth!),
        password,
        email,
        name,
        phone,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        setFirebaseError({ isError: true, message: getFirebaseErrorMessage(error) });
      } else {
        console.error(error);
      }
    }

    // const docRef = doc(db, 'users', `${user.uid}`);
    // const docSnap = await getDoc(docRef);
    //
    // if (docSnap.exists()) {
    //   console.log('Document data:', docSnap.data());
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log('No such document!');
    // }

    // TODO: получить всех пользователей
    // const querySnapshot = await getDocs(collection(db, 'users'));
    // querySnapshot.forEach((docc) => {
    //   console.log(`${docc.id} => ${docc.data().name}`);
    // });

    setIsLoading(false);
    reset();
    // редирект на Profile
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
