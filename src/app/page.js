'use client';

import { CarouselCustom } from '@/components/molecules/Carousel/CarouselCustom';
import { Spinners } from '@/components/molecules/Spinners/Spinners';
import { SectionProducts } from '@/components/organisms/SectionProducts/SectionProducts';
import {
    setFirabaseAccesToken,
    setFirabaseDataUser,
    setIsAutenticate,
    setUserCar,
    setUserInformation,
} from '@/app/GlobalRedux/features/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCategories,
    setData,
} from './GlobalRedux/features/productsSlice';
import { getProducts } from '@/actions/productsActions';

export default function Home() {
    const { data, search } = useSelector(
        (state) => state.products
    );
    const dispatch = useDispatch();

    const loadData = async () => {
        const  {products, categories}  = await getProducts();
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
                JSON.parse(localStorage.getItem('userInformation')) ||
                    undefined
            )
        );
        dispatch(
            setUserCar(
                JSON.parse(localStorage.getItem('userCar')) ||
                    undefined
            )
        );
        loadData();
    }, []);

    return (
        <>
            <aside className="my-5">
                <CarouselCustom />
            </aside>
            {data?.length > 0 ? (
                <main className="container mx-auto mt-4">
                    <h2 className="my-10 text-center text-7xl font-extrabold text-blue-800">
                        {search.length > 0 ? 'Found Products' : 'Featured Products'}
                    </h2>
                    <SectionProducts />
                </main>
            ) : (
                <Spinners />
            )}
        </>
    );
}
