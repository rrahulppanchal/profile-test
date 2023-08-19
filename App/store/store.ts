import { configureStore } from '@reduxjs/toolkit';
import { RootReducers } from './RootReducers';

export const store = configureStore({
  reducer: RootReducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
