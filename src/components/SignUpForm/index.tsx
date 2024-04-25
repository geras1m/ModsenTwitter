import { PasswordInput } from '@/components/PasswordInput';
import { Select } from '@/components/Select';
import {
  formInputsTextData,
  inputsName,
  maxNameInputLength,
  maxPhoneInputLength,
  minNameInputLength,
  policyText,
} from '@/components/SignUpForm/config';
import {
  DateTitle,
  DateWrapper,
  ErrorMessage,
  Form,
  Input,
  PolicyText,
  SubmitButton,
  ToPageLink,
} from '@/components/SignUpForm/styled';
import { Spinner } from '@/components/Spinner';
import { defaultErrorMessage, routes } from '@/constants';
import {
  emailPattern,
  namePattern,
  passwordPattern,
  phoneNumberPattern,
} from '@/constants/validation';
import { useSignUpFormLogic } from '@/hooks/useSignUpFormLogic';

export const SignUpForm = () => {
  const {
    years,
    months,
    dates,
    isLoading,
    handleChange,
    handlerOnSubmit,
    handleSubmit,
    register,
    errors,
    handleGetPhoneMask,
  } = useSignUpFormLogic();

  const { name, phone, email, password, confirmPassword } = formInputsTextData;

  return (
    <Form onSubmit={handleSubmit(handlerOnSubmit)}>
      <ErrorMessage>
        {errors?.name && (errors?.name?.message?.toString() || defaultErrorMessage)}
      </ErrorMessage>
      <Input
        data-testid='signup-input-name'
        placeholder={name.placeholder}
        type={name.type}
        maxLength={maxNameInputLength}
        {...register('name', {
          required: name.required,
          minLength: { value: minNameInputLength, message: name.minLength },
          maxLength: { value: maxNameInputLength, message: name.maxLength },
          pattern: namePattern,
        })}
      />

      <ErrorMessage>
        {errors?.phone && (errors?.phone?.message?.toString() || defaultErrorMessage)}
      </ErrorMessage>
      <Input
        data-testid='signup-input-phone'
        placeholder={phone.placeholder}
        type={phone.type}
        maxLength={maxPhoneInputLength}
        {...register('phone', {
          required: phone.required,
          pattern: {
            value: phoneNumberPattern,
            message: phone.pattern,
          },
          onChange: handleGetPhoneMask,
        })}
      />

      <ErrorMessage data-testid='signup-error-email'>
        {errors?.email && (errors?.email?.message?.toString() || defaultErrorMessage)}
      </ErrorMessage>
      <Input
        data-testid='signup-input-email'
        placeholder={email.placeholder}
        type={email.type}
        {...register('email', {
          required: email.required,
          pattern: {
            value: emailPattern,
            message: email.pattern,
          },
        })}
      />

      <ErrorMessage>
        {errors?.password && (errors?.password?.message?.toString() || defaultErrorMessage)}
      </ErrorMessage>
      <PasswordInput
        placeholder={password.placeholder}
        register={{
          ...register('password', {
            required: password.required,
            pattern: {
              value: passwordPattern,
              message: password.pattern,
            },
          }),
        }}
      />

      <ErrorMessage>
        {errors?.confirmPassword &&
          (errors?.confirmPassword?.message?.toString() || defaultErrorMessage)}
      </ErrorMessage>
      <PasswordInput
        placeholder={confirmPassword.placeholder}
        register={{
          ...register('confirmPassword', {
            required: confirmPassword.required,
            pattern: {
              value: passwordPattern,
              message: confirmPassword.pattern,
            },
          }),
        }}
      />

      <ToPageLink to={routes.home}>Use email</ToPageLink>
      <DateTitle>Date of birth</DateTitle>
      <PolicyText>{policyText}</PolicyText>

      <ErrorMessage>
        {errors?.day && (errors?.day?.message?.toString() || defaultErrorMessage)}
      </ErrorMessage>
      <DateWrapper>
        <Select
          label='Month'
          data={months}
          inputsName={inputsName.month}
          handleChange={handleChange}
        />
        <Select
          label='Day'
          data={dates}
          inputsName={inputsName.day}
          handleChange={handleChange}
        />
        <Select
          label='Year'
          data={years}
          inputsName={inputsName.year}
          handleChange={handleChange}
        />
      </DateWrapper>

      <SubmitButton
        data-testid='signup-button'
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner
            width='20px'
            border='5px'
          />
        ) : (
          'Next'
        )}
      </SubmitButton>
    </Form>
  );
};
