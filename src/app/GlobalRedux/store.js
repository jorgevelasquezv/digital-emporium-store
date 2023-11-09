import { combineReducers, configureStore } from '@reduxjs/toolkit';
import users from './features/userSlice';
import products from './features/productsSlice';

const rootReducer = combineReducers({
    users, products
});

export const store = configureStore({
    reducer: rootReducer,
});
