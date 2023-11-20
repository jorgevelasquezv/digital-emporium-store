import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import users from './features/userSlice';
import products from './features/productsSlice';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    users,
    products,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
