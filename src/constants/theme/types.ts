export interface IFontSizes {
  px13: string;
  px14: string;
  px16: string;
  px20: string;
  px24: string;
  px40: string;
  px42: string;
  px60: string;
  px80: string;
}

export interface IColors {
  black: string;
  white: string;
  white1: string;
  red: string;
  blue: string;
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
  bg: string;
  toggle: string;
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
