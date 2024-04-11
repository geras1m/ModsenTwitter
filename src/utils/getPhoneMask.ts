import { FormInputsNameTypes } from '@/types';

export const getPhoneMask = (
  event: React.ChangeEvent<HTMLInputElement>,
  setValue: (name: FormInputsNameTypes, value: string) => void,
) => {
  const { value } = event.target;
  if (value.length >= 18) return;

  const onlyDigitsValue = value.replace(/\D/g, '');

  if (onlyDigitsValue.length > 5) {
    const formattedValue = `+${onlyDigitsValue.slice(0, 3)} (${onlyDigitsValue.slice(3, 5)}) ${onlyDigitsValue.slice(5)}`;
    setValue('phone', formattedValue);
    return;
  }
  setValue('phone', `+${onlyDigitsValue}`);
};
