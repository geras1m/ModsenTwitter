import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IThemeState, ThemeType } from '@/constants/theme/types';

const initialState: IThemeState = {
  theme: 'light',
  isOpenNavBar: false,
  isOpenSearchBar: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
    setIsOpenNavBar: (state, action: PayloadAction<boolean>) => {
      state.isOpenNavBar = action.payload;
    },
    setIsOpenSearchBar: (state, action: PayloadAction<boolean>) => {
      state.isOpenSearchBar = action.payload;
    },
  },
});

export const { setTheme, setIsOpenNavBar, setIsOpenSearchBar } = themeSlice.actions;
export default themeSlice.reducer;
