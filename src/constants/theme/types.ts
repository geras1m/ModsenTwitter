export interface IFontSizes {
  px13: string;
  px14: string;
  px16: string;
  px18: string;
  px20: string;
  px22: string;
  px24: string;
  px40: string;
  px42: string;
  px60: string;
  px80: string;
}

export interface IColors {
  black: string;
  black1: string;
  black2: string;
  black3: string;
  white: string;
  white1: string;
  white2: string;
  white3: string;
  white4: string;
  grey: string;
  red: string;
  blue: string;
  blue1: string;
  lightGreen: string;
  lightRed: string;
}

export interface IFontWeight {
  light: string;
  normal: string;
  medium: string;
  semiBold: string;
  bold: string;
  extraBold: string;
  black: string;
}

interface IThemeColorsExtensions extends IColors {
  bgSuggestion: string;
  text: string;
  bg: string;
  toggle: string;
  bgLoader: string;
}

export interface ITheme {
  fontSizes: IFontSizes;
  fontWeight: IFontWeight;
  colors: IThemeColorsExtensions;
}

export enum ThemeValue {
  light = 'light',
  dark = 'dark',
}

export type ThemeType = 'light' | 'dark';

export interface IThemeState {
  theme: ThemeType;
}
