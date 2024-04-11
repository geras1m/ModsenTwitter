import { IColors, IFontSizes, IFontWeight, ITheme } from '@/constants/theme/types';

export const fontSizes: IFontSizes = {
  px13: '13px',
  px14: '14px',
  px16: '16px',
  px18: '18px',
  px20: '20px',
  px24: '24px',
  px40: '40px',
  px42: '42px',
  px60: '60px',
  px80: '80px',
};

export const fontWeight: IFontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

export const colors: IColors = {
  black: '#030304',
  white: '#ffffff',
  white1: '#E4EAED',
  red: '#ff0000',
  blue: '#1da1f2',
};

export const lightTheme: ITheme = {
  fontSizes: { ...fontSizes },
  fontWeight: { ...fontWeight },
  colors: {
    ...colors,
    bg: colors.white,
    toggle: colors.black,
  },
};

export const darkTheme: ITheme = {
  fontSizes: { ...fontSizes },
  fontWeight: { ...fontWeight },
  colors: {
    ...colors,
    bg: colors.black,
    toggle: colors.white,
  },
};

export const mediaSizes = {
  px1500: '1500px',
  px1150: '1150px',
  px800: '800px',
};
