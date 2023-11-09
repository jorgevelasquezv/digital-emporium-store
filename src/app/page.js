'use client';

import { CarouselCustom } from '@/components/molecules/Carousel/CarouselCustom';
import { Spinners } from '@/components/molecules/Spinners/Spinners';
import { SectionProducts } from '@/components/organisms/SectionProducts/SectionProducts';
import {
    setFirabaseAccesToken,
    setFirabaseDataUser,
    setIsAutenticate,
} from '@/app/GlobalRedux/features/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadDataProducts,
    setData,
} from './GlobalRedux/features/productsSlice';

export default function Home() {
    const { featuredProducts, productsFound } = useSelector(
        (state) => state.products
    );
    const dispatch = useDispatch();

    const loadData = async () => {
        const { payload } = await dispatch(loadDataProducts());
        dispatch(setData(payload));
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
        loadData();
    }, []);

    return (
        <>
            <aside className="my-5">
                <CarouselCustom />
            </aside>
            {featuredProducts ? (
                <main className="container mx-auto mt-4">
                    <h2 className="my-10 text-center text-7xl font-extrabold text-blue-800">
                        {productsFound.length > 0 ? 'Found Products' : 'Featured Products'}
                    </h2>
                    <SectionProducts />
                </main>
            ) : (
                <Spinners />
            )}
        </>
    );
}
