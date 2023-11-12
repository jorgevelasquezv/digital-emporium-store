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
    setData,
} from './GlobalRedux/features/productsSlice';
import { getProducts } from '@/actions/productsActions';

export default function Home() {
    const { data, productsFound } = useSelector(
        (state) => state.products
    );
    const dispatch = useDispatch();

    const loadData = async () => {
        const  payload  = await getProducts();
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
            {data?.length > 0 ? (
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
