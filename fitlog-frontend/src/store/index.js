import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import workoutReducer from './workoutSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    workouts: workoutReducer,
  },
});
