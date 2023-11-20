import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/actions/productsActions';
import { setCategories, setData } from '@/app/GlobalRedux/features/productsSlice';
import {
    setFirabaseAccesToken,
    setFirabaseDataUser,
    setIsAutenticate,
    setUserCar,
    setUserInformation,
} from '@/app/GlobalRedux/features/userSlice';
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
        dispatch(
            setIsAutenticate(
                JSON.parse(localStorage.getItem('isAuthenticated')) || false
            )
        );
        dispatch(
            setFirabaseAccesToken(
                JSON.parse(localStorage.getItem('firabaseAccesToken')) ||
                    undefined
            )
        );
        dispatch(
            setFirabaseDataUser(
                JSON.parse(localStorage.getItem('firabaseDataUser')) ||
                    undefined
            )
        );
        dispatch(
            setUserInformation(
                JSON.parse(localStorage.getItem('userInformation')) || undefined
            )
        );
        dispatch(
            setUserCar(JSON.parse(localStorage.getItem('userCar')) || undefined)
        );
        loadData();
    }, []);

    return { data, search };
};
