import { combineReducers, configureStore } from '@reduxjs/toolkit';
import users from './features/userSlice';

const rootReducer = combineReducers({
    users,
});

export const store = configureStore({
    reducer: rootReducer,
});
