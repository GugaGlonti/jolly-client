import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/counterSlice';
import { consoleReducer } from './console/consoleSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    console: consoleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
