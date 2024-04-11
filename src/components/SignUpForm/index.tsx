import { PasswordInput } from '@/components/PasswordInput';
import { Select } from '@/components/Select';
import {
  defaultErrorMessage,
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
import { routes } from '@/constants';
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
    firebaseError,
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
      <div>
        {errors?.name && (
          <ErrorMessage>{errors?.name?.message?.toString() || defaultErrorMessage}</ErrorMessage>
        )}
      </div>
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
      <div>
        {errors?.phone && (
          <ErrorMessage>{errors?.phone?.message?.toString() || defaultErrorMessage}</ErrorMessage>
        )}
      </div>
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
      <div>
        {errors?.email && (
          <ErrorMessage>{errors?.email?.message?.toString() || defaultErrorMessage}</ErrorMessage>
        )}
      </div>

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
      <div>
        {errors?.password && (
          <ErrorMessage>
            {errors?.password?.message?.toString() || defaultErrorMessage}
          </ErrorMessage>
        )}
      </div>

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
      <div>
        {errors?.confirmPassword && (
          <ErrorMessage>
            {errors?.confirmPassword?.message?.toString() || defaultErrorMessage}
          </ErrorMessage>
        )}
      </div>

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

      {firebaseError.isError && <ErrorMessage>{firebaseError.message}</ErrorMessage>}
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
