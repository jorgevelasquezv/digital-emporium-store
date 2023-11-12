import { getProducts } from '@/actions/productsActions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        featuredProducts: [],
        productsFound: [],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setFeaturedProducts: (state, action) => {
            state.featuredProducts = action.payload;
        },
        setProductsFound: (state, action) => {
            state.productsFound = action.payload;
        },
    },
});

export const { setData, setFeaturedProducts, setProductsFound } =
    productsSlice.actions;

export default productsSlice.reducer;

export const loadDataProducts = createAsyncThunk(
    'products/loadDataProducts',
    async () => {
        const products = await getProducts();
        setData(products)
        return products;
    }
);
