import {
    setProductsBySearch,
    setProductsFound,
    setSearch,
} from '@/app/GlobalRedux/features/productsSlice';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useSearch = () => {
    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.products);

    const pathName = usePathname().split('/')[1];

    const router = useRouter();

    const [searchWord, setSearchWord] = useState('');

    const handleOnchangeSearch = (e) => {
        setSearchWord(e.target.value);
        if (e.target.value === '') {
            dispatch(setSearch(''));
        }
    };

    const handleSearch = () => {
        const dataFiltered = data.filter((prod) =>
            prod.name.toLowerCase().includes(searchWord.toLowerCase())
        );
        dispatch(setProductsFound(dataFiltered));
        dispatch(setProductsBySearch(dataFiltered));
        dispatch(setSearch(searchWord));
        if (pathName !== '') {
            router.push('/');
        }
    };

    const handleOnKeyDowndSearch = (e) => {
        if (e.key == 'Enter') {
            handleSearch();
        }
    };

useEffect(() => {
    dispatch(setSearch(searchWord));
}, []);


    return [
        searchWord,
        handleSearch,
        handleOnchangeSearch,
        handleOnKeyDowndSearch,
    ];
};
