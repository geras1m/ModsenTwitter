import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IThemeState, ThemeType } from '@/constants/theme/types';

const initialState: IThemeState = {
  theme: 'light',
};

/* eslint-disable no-param-reassign */
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
