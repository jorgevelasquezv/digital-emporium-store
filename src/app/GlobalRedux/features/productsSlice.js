import { getProducts } from '@/actions/productsActions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        categories: [],
        featuredProducts: [],
        productsFound: [],
        productsBySearch: [],
        productsFilteredByCategory: [],
        productsFilteredByPrice: [],
        search: '',
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setFeaturedProducts: (state, action) => {
            state.featuredProducts = action.payload;
        },
        setProductsFound: (state, action) => {
            state.productsFound = action.payload;
        },
        setProductsBySearch: (state, action) => {
            state.productsBySearch = action.payload;
        },
        setProductsFilterByCategory: (state, action) => {
            state.productsFilteredByCategory = action.payload;
        },
        setProductsFilteredByPrice: (state, action) => {
            state.productsByPrice = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const {
    setData,
    setCategories,
    setFeaturedProducts,
    setProductsFound,
    setProductsBySearch,
    setProductsFilteredByPrice,
    setProductsFilterByCategory,
    setSearch,
} = productsSlice.actions;

export default productsSlice.reducer;

export const loadDataProducts = createAsyncThunk(
    'products/loadDataProducts',
    async () => {
        const products = await getProducts();
        setData(products);
        return products;
    }
);
