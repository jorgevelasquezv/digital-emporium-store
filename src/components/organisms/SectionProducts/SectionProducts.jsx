'use client';

import React from 'react';
import { ProductCard } from '@/components/molecules/ProductCard/ProductCard';
import { useSelector } from 'react-redux';

export const SectionProducts = () => {
    const { productsFound, data } = useSelector((state) => state.products);
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {productsFound.length > 0
                ? productsFound.map((product) => (
                      <ProductCard
                          product={product}
                          key={`${product.name}-${product.price}`}
                      />
                  ))
                : data.map((product) => (
                      <ProductCard
                          product={product}
                          key={`${product.name}-${product.price}`}
                      />
                  ))}
        </section>
    );
};
