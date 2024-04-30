import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from '@/store/slices/themeSlice';
import userReducer from '@/store/slices/userSlice';

const persistConfig = {
  key: 'root',
  whitelist: ['theme', 'user'],
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

const persistedThemeReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedThemeReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
