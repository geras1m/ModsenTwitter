import { createSlice } from '@reduxjs/toolkit';

import { IUserData } from '@/types';

const initialState: IUserData = {
  id: '',
  born: '',
  isGoogleAuth: false,
  email: '',
  surname: '',
  gender: '',
  telegramLink: '',
  name: '',
  phone: '',
};

/* eslint-disable no-param-reassign */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.born = action.payload.born;
      state.isGoogleAuth = action.payload.isGoogleAuth;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.gender = action.payload.gender;
      state.telegramLink = action.payload.telegramLink;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    removeUser(state) {
      state.id = '';
      state.born = '';
      state.isGoogleAuth = false;
      state.email = '';
      state.surname = '';
      state.gender = '';
      state.telegramLink = '';
      state.name = '';
      state.phone = '';
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
