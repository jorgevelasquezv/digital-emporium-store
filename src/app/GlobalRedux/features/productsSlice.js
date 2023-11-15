import { getProducts } from '@/actions/productsActions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        categories: [],
        featuredProducts: [],
        productsFound: [],
        search: '',
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setFeaturedProducts: (state, action) => {
            state.featuredProducts = action.payload;
        },
        setProductsFound: (state, action) => {
            state.productsFound = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    },
});

export const { setData, setCategories, setFeaturedProducts, setProductsFound, setSearch } =
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
