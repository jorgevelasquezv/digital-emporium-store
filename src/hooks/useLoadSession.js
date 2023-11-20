import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/actions/productsActions';
import { setCategories, setData } from '@/app/GlobalRedux/features/productsSlice';
import { useEffect } from 'react';

export const useLoadSession = () => {
    const { data, search } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const loadData = async () => {
        const { products, categories } = await getProducts();
        dispatch(setData(products));
        dispatch(setCategories(categories));
    };

    useEffect(() => {
        loadData();
    }, []);

    return { data, search };
};
