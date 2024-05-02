import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import counterReducer from './counter/counterSlice';
import consoleReducer from './console/consoleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    console: consoleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
