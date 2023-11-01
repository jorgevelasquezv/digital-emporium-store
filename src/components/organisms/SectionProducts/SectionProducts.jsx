'use client';

import React from 'react';
import { ProductCard } from '@/components/molecules/ProductCard/ProductCard';

export const SectionProducts = ({ products }) => {

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard
                    product={product}
                    key={`${product.name}-${product.price}`}
                />
            ))}
        </section>
    );
};
