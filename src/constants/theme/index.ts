import { IColors, IFontSizes, IFontWeight, ITheme } from '@/constants/theme/types';

export const fontSizes: IFontSizes = {
  px13: '13px',
  px14: '14px',
  px16: '16px',
  px18: '18px',
  px20: '20px',
  px22: '22px',
  px24: '24px',
  px30: '30px',
  px40: '40px',
  px42: '42px',
  px60: '60px',
  px80: '80px',
};

export const fontWeight: IFontWeight = {
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

export const colors: IColors = {
  black: '#030304',
  lightBlack: '#272727FF',
  opacityBlack: '#070505BC',
  opacityLightBlack: '#00000080',
  white: '#ffffff',
  lightWhite: '#E4EAED',
  darkWhite: '#F7F9F9',
  darkGrey: '#ffffff29',
  opacityWhite: '#FDFDFDCC',
  grey: '#afafaf',
  red: '#ff0000',
  blue: '#1da1f2',
  darkBlue: '#141D26FF',
  lightGreen: '#01810160',
  lightRed: '#D9003360',
};

export const lightTheme: ITheme = {
  colors: {
    ...colors,
    bgLoader: colors.opacityWhite,
    bgSuggestion: colors.darkWhite,
    text: colors.black,
    bg: colors.white,
    toggle: colors.black,
  },
};

export const darkTheme: ITheme = {
  colors: {
    ...colors,
    bgLoader: colors.opacityLightBlack,
    bgSuggestion: colors.darkGrey,
    text: colors.white,
    bg: colors.darkBlue,
    toggle: colors.white,
  },
};

export const mediaSizes = {
  px1500: '1500px',
  px1150: '1150px',
  px800: '800px',
  px500: '500px',
};
