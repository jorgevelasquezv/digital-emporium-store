'use client';

import React from 'react';
import { ProductCard } from '@/components/molecules/ProductCard/ProductCard';
import { useSelector } from 'react-redux';

export const SectionProducts = () => {
    const { productsFound, data, search } = useSelector(
        (state) => state.products
    );
    return (
        <section
            className={
                search.length > 0 && productsFound.length == 0
                    ? 'grid grid-cols-1 gap-4'
                    : 'grid grid-cols-1 md:grid-cols-3 gap-4'
            }
        >
            {search.length > 0 && productsFound.length > 0 ? (
                productsFound.map((product) => (
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
                data.map((product) => (
                    <ProductCard
                        product={product}
                        key={`${product.name}-${product.price}`}
                    />
                ))
            )}
        </section>
    );
};
