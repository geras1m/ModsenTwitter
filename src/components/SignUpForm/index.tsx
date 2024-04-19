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
import { getPhoneMask } from '@/utils/getPhoneMask';

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
    setValue,
  } = useSignUpFormLogic();

  const { name, phone, email, password, confirmPassword } = formInputsTextData;

  return (
    <Form onSubmit={handleSubmit(handlerOnSubmit)}>
      {errors?.name && (
        <ErrorMessage>{errors?.name?.message?.toString() || defaultErrorMessage}</ErrorMessage>
      )}
      <Input
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

      {errors?.phone && (
        <ErrorMessage>{errors?.phone?.message?.toString() || defaultErrorMessage}</ErrorMessage>
      )}
      <Input
        placeholder={phone.placeholder}
        type={phone.type}
        maxLength={maxPhoneInputLength}
        {...register('phone', {
          required: phone.required,
          pattern: {
            value: phoneNumberPattern,
            message: phone.pattern,
          },
          onChange: (event) => getPhoneMask(event, setValue),
        })}
      />

      {errors?.email && (
        <ErrorMessage>{errors?.email?.message?.toString() || defaultErrorMessage}</ErrorMessage>
      )}
      <Input
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

      {errors?.password && (
        <ErrorMessage>{errors?.password?.message?.toString() || defaultErrorMessage}</ErrorMessage>
      )}
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

      {errors?.confirmPassword && (
        <ErrorMessage>
          {errors?.confirmPassword?.message?.toString() || defaultErrorMessage}
        </ErrorMessage>
      )}
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
