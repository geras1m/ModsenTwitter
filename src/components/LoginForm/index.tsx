import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import TwitterIcon from '@/assets/icons/twitter-icon.svg';
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
import { routes } from '@/constants';
import { passwordPattern } from '@/constants/validation';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { FirebaseService } from '@/service';
import { setUser } from '@/store/slices/userSlice';

type FormDataType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
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
      const userData = await FirebaseService.GetUserDataFromDB(user.uid);
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
        navigate('/profile');
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
    reset();
  };

  const config = register('password', {
    required: 'Required field',
    pattern: {
      value: passwordPattern,
      message: 'The password should be at least 6 symbols long and contain a digit',
    },
  });

  return (
    <LoginFormWrapper>
      <Icon src={TwitterIcon} />
      <Title>Log in to Twitter</Title>
      <Form onSubmit={handleSubmit(handlerOnSubmit)}>
        {errors?.email && (
          <ErrorMessage>{errors?.email?.message?.toString() || 'Error!'}</ErrorMessage>
        )}

        <Input
          placeholder='Email address'
          {...register('email', {
            required: 'Required field',
          })}
        />
        {errors?.password && (
          <ErrorMessage>{errors?.password?.message?.toString() || 'Error!'}</ErrorMessage>
        )}
        <PasswordInput
          placeholder='Password'
          register={config}
        />

        <SubmitButton
          type='submit'
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
