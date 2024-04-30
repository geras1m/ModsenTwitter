export const getPhoneMask = (value: string) => {
  const onlyDigitsValue = value.replace(/\D/g, '');

  if (onlyDigitsValue.length > 5) {
    const formattedValue = `+${onlyDigitsValue.slice(0, 3)} (${onlyDigitsValue.slice(3, 5)}) ${onlyDigitsValue.slice(5)}`;
    return formattedValue;
  }
  return `+${onlyDigitsValue}`;
};
