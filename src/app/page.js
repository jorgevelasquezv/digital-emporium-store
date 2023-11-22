'use client';

import { CarouselCustom } from '@/components/molecules/Carousel/CarouselCustom';
import { SectionProducts } from '@/components/organisms/SectionProducts/SectionProducts';

import { useLoadSession } from '@/hooks/useLoadSession';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './GlobalRedux/store';

export default function Home() {
    const { search } = useLoadSession();

    return (
        <>
            <aside className="my-5">
                <CarouselCustom />
            </aside>
            <section className="container mx-auto mt-4">
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <h2 className="my-10 text-center text-7xl font-extrabold text-blue-800">
                        {search.length > 0
                            ? 'Found Products'
                            : 'Featured Products'}
                    </h2>
                </PersistGate>
                <SectionProducts />
            </section>
        </>
    );
}
