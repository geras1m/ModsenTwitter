export const minNameInputLength = 3;
export const maxNameInputLength = 25;

export const editFormInputsTextData = {
  name: {
    name: 'name' as const,
    placeholder: 'Name',
    type: 'text',
    minLength: `The minimum line length is ${minNameInputLength}`,
    maxLength: `The maximum line length is ${maxNameInputLength}`,
    pattern: 'The name should start with letters',
  },
  surname: {
    name: 'surname' as const,
    placeholder: 'Surname',
    type: 'text',
    minLength: `The minimum line length is ${minNameInputLength}`,
    maxLength: `The maximum line length is ${maxNameInputLength}`,
    pattern: 'The surname should start with letters',
  },
  telegramLink: {
    name: 'telegramLink' as const,
    placeholder: 'Telegram nickname',
    type: 'text',
    minLength: `The minimum line length is ${minNameInputLength}`,
    maxLength: `The maximum line length is ${maxNameInputLength}`,
    pattern: 'Telegram nickname should follow the pattern: @nick ',
  },
  newPassword: {
    name: 'newPassword' as const,
    placeholder: 'New password',
    pattern: 'The password should be at least 6 symbols long and contain a digit',
  },
  currentPassword: {
    name: 'currentPassword' as const,
    placeholder: 'Сurrent password',
    pattern: 'The password should be at least 6 symbols long and contain a digit',
  },

  female: 'female',
  male: 'male',
};
