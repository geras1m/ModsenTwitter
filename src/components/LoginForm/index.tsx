import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import TwitterIcon from '@/assets/icons/twitter-icon.svg';
import { formInputsTextData } from '@/components/LoginForm/config';
import {
  Form,
  Icon,
  Input,
  LoginFormWrapper,
  SubmitButton,
  Title,
  ToPageLink,
} from '@/components/LoginForm/styled';
import { PasswordInput } from '@/components/PasswordInput';
import { ErrorMessage } from '@/components/SignUpForm/styled';
import { Spinner } from '@/components/Spinner';
import { defaultErrorMessage, routes, successMessage } from '@/constants';
import { passwordPattern } from '@/constants/validation';
import { useToast } from '@/context/toastContext';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { FirebaseService } from '@/service';
import { setUser } from '@/store/slices/userSlice';
import { ToastType } from '@/types';
import { getFirebaseErrorMessage } from '@/utils/getFirebaseErrorMessage';

type FormDataType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormDataType>({ mode: 'onBlur' });

  const handlerOnSubmit: SubmitHandler<FormDataType> = async (data) => {
    const { email, password } = data;

    setIsLoading(true);

    try {
      const user = await FirebaseService.LogIn(email, password);
      const userData = await FirebaseService.GetDataItemFromDB(user.uid, 'users');
      if (userData) {
        const { uis, name, surname, phone, telegramLink, gender, born } = userData;

        dispatch(
          setUser({
            id: uis,
            isGoogleAuth: false,
            email,
            name,
            surname,
            phone,
            telegramLink,
            gender,
            born,
          }),
        );
        toast?.open(successMessage, ToastType.success);
        navigate(routes.profile);
      }
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
  const { email, password } = formInputsTextData;

  const config = register('password', {
    required: password.required,
    pattern: {
      value: passwordPattern,
      message: password.pattern,
    },
  });

  return (
    <LoginFormWrapper>
      <Icon src={TwitterIcon} />
      <Title>Log in to Twitter</Title>
      <Form
        data-testid='login-form'
        onSubmit={handleSubmit(handlerOnSubmit)}
      >
        <ErrorMessage>
          {errors?.email && (errors?.email?.message?.toString() || defaultErrorMessage)}
        </ErrorMessage>
        <Input
          data-testid='login-email-input'
          placeholder={email.placeholder}
          {...register('email', {
            required: email.required,
          })}
        />

        <ErrorMessage>
          {errors?.password && (errors?.password?.message?.toString() || defaultErrorMessage)}
        </ErrorMessage>
        <PasswordInput
          placeholder={password.placeholder}
          register={config}
        />

        <SubmitButton
          type='submit'
          data-testid='login-submit-button'
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner
              width='20px'
              border='5px'
            />
          ) : (
            'Log In'
          )}
        </SubmitButton>

        <ToPageLink to={routes.home}>Sign up to Twitter</ToPageLink>
      </Form>
    </LoginFormWrapper>
  );
};
