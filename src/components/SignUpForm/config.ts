import { IInputsName } from '@/types';

export const policyText =
  'Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante\n' +
  'phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id\n' +
  'ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit\n' +
  'congue.';

export const inputsName: IInputsName = {
  year: 'year',
  month: 'month',
  day: 'day',
};

export const messagePasswordsShouldMatch = 'Password and Confirm password fields must match!';
export const messageToSelectDay = `Please, choose the ${inputsName.day} again!`;

export const minNameInputLength = 3;
export const maxNameInputLength = 25;
export const maxPhoneInputLength = 17;

export const formInputsTextData = {
  name: {
    name: 'name',
    placeholder: 'Name',
    type: 'text',
    required: 'Required field',
    minLength: `The minimum line length is ${minNameInputLength}`,
    maxLength: `The maximum line length is ${maxNameInputLength}`,
  },
  phone: {
    name: 'phone',
    placeholder: 'Phone number',
    type: 'tel',
    required: 'Required field',
    pattern: 'Phone number should follow the pattern +375 (29/25/44/33) 1234567',
  },
  email: {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    required: 'Required field',
    pattern: 'Invalid email',
  },
  password: {
    name: 'password',
    placeholder: 'Password',
    required: 'Required field',
    pattern: 'The password should be at least 6 symbols long and contain a digit',
  },
  confirmPassword: {
    name: 'confirmPassword',
    placeholder: 'Сonfirm password',
    required: 'Required field',
    pattern: 'The password should be at least 6 symbols long and contain a digit',
  },
};
