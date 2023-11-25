'use client';

import { ProductCard } from '@/components/molecules/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinners } from '@/components/molecules/Spinners/Spinners';
import { persistor } from '@/app/GlobalRedux/store';

export const SectionProducts = () => {
    const { productsFound, data, search } = useSelector(
        (state) => state.products
    );
    return (
        <PersistGate loading={<Spinners />} persistor={persistor}>
            <section
                className={
                    search.length > 0 && productsFound.length == 0
                        ? 'grid grid-cols-1 gap-4'
                        : 'grid grid-cols-1 md:grid-cols-3 gap-4'
                }
            >
                {search.length > 0 && productsFound.length > 0 ? (
                    productsFound
                        .filter((product) => product.stock > 0)
                        .map((product) => (
                            <ProductCard
                                product={product}
                                key={`${product.name}-${product.price}`}
                            />
                        ))
                ) : search.length > 0 && productsFound.length == 0 ? (
                    <p className="text-center text-gray-700 text-7xl font-extrabold">
                        Could not find products
                    </p>
                ) : (
                    data
                        .filter((product) => product.stock > 0)
                        .map((product) => (
                            <ProductCard
                                product={product}
                                key={`${product.name}-${product.price}`}
                            />
                        ))
                )}
            </section>
        </PersistGate>
    );
};
