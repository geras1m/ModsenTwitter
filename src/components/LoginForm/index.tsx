import { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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

type FormDataType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormDataType>({ mode: 'onBlur' });

  const handlerOnSubmit: SubmitHandler<FormDataType> = (data) => {
    const { email, password } = data;
    setIsLoading(true);

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

    setIsLoading(false);
    reset();
  };

  const config = useMemo(
    () =>
      register('password', {
        required: 'Required field',
        pattern: {
          value: passwordPattern,
          message: 'The password should be at least 6 symbols long and contain a digit',
        },
      }),
    [],
  );

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
