import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import bottleReducer from '../features/bottles/bottleSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    bottles: bottleReducer
  },
});
