import {
    setProductsFound,
    setSearch,
} from '@/app/GlobalRedux/features/productsSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useSearch = () => {
    const dispatch = useDispatch();

    const { data, search, productsFound } = useSelector(
        (state) => state.products
    );

    const [searchWord, setSearchWord] = useState('')

    const handleOnchangeSearch = (e) => {
        setSearchWord(e.target.value)
    };

    const handleSearch = () => {
        const dataFiltered = data.filter((prod) =>
            prod.name.toLowerCase().includes(searchWord.toLowerCase())
        );
        console.log('Ejecutando handle search', {
            search,
            productsFound,
            dataFiltered,
            data,
        });
        dispatch(setProductsFound(dataFiltered));
        dispatch(setSearch(searchWord))
    };

    const handleOnKeyDowndSearch = (e) => {
        if (e.key == 'Enter') {
            handleSearch();
        }
    };
    return [searchWord, handleSearch, handleOnchangeSearch, handleOnKeyDowndSearch];
};
