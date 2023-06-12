import { configureStore } from '@reduxjs/toolkit';
import { elementReducer } from './slices/elements';
import { userReducer } from './slices/user';
import { streakReducer } from './slices/streaks';

export const store = configureStore({
  reducer: {
    element: elementReducer,
    user: userReducer,
    streak: streakReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
