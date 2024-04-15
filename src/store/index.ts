import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from '@/store/slices/themeSlice';
import userReducer from '@/store/slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
