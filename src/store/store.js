import { configureStore } from '@reduxjs/toolkit';
import users from '../redux/features/userSlice'

export const store = configureStore({
    reducer: {
        users
    },
});
