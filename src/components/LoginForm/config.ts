export const formInputsTextData = {
  email: {
    name: 'email' as const,
    placeholder: 'Email address',
    type: 'email',
    required: 'Required field',
  },
  password: {
    name: 'password' as const,
    placeholder: 'Password',
    required: 'Required field',
    pattern: 'The password should be at least 6 symbols long and contain a digit',
  },
};
