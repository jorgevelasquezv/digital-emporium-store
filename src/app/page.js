'use client';

import { getProducts } from '@/actions/productsActions';
import { CarouselCustom } from '@/components/molecules/Carousel/CarouselCustom';
import { Spinners } from '@/components/molecules/Spinners/Spinners';
import { SectionProducts } from '@/components/organisms/SectionProducts/SectionProducts';
import { setFirabaseAccesToken, setFirabaseDataUser, setIsAutenticate } from '@/redux/features/userSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Home() {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();

    const loadData = async () => {
        await getProducts().then((products) => {
            setData(products);
        });
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
            {data ? (
                <main className="container mx-auto mt-4">
                    <SectionProducts products={data} />
                </main>
            ) : (
                <Spinners />
            )}
        </>
    );
}
