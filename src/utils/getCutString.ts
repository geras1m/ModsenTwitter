export const getCutString = (str: string, stringlength: number): string => {
  if (str.length > stringlength) {
    const cutString = str.slice(0, stringlength - 3);
    return `${cutString}...`;
  }
  return str;
};
