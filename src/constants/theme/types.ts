export interface IFontSizes {
  px13: string;
  px14: string;
  px16: string;
  px18: string;
  px20: string;
  px22: string;
  px24: string;
  px30: string;
  px40: string;
  px42: string;
  px60: string;
  px80: string;
}

export interface IColors {
  black: string;
  lightBlack: string;
  opacityBlack: string;
  opacityLightBlack: string;
  white: string;
  lightWhite: string;
  darkWhite: string;
  darkGrey: string;
  opacityWhite: string;
  grey: string;
  red: string;
  blue: string;
  darkBlue: string;
  lightGreen: string;
  lightRed: string;
}

export interface IFontWeight {
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
  colors: IThemeColorsExtensions;
}

export enum ThemeValue {
  light = 'light',
  dark = 'dark',
}

export type ThemeType = 'light' | 'dark';

export interface IThemeState {
  theme: ThemeType;
  isOpenNavBar: boolean;
  isOpenSearchBar: boolean;
}
