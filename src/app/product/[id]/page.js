'use client';

import React, { useEffect, useState } from 'react';
import { CharacteristicProductCard } from '@/components/molecules/CharacteristicProductCard/CharacteristicProductCard';
import { getProductById } from '@/actions/productsActions';
import { Spinner } from '@/components/atoms/Spinner/Spinner';

const ProductCharacteristic = ({ params }) => {
    const { id } = params;
    const [product, setProduct] = useState();
    const findProduct = async () => {
        await getProductById(Number(id)).then((prod) => {
            setProduct(prod);
        });
    };

    useEffect(() => {
        findProduct();
    }, []);

    return (
        <section className="grid grid-cols-1 gap-4">
            {product ? (
                <CharacteristicProductCard product={product} />
            ) : (
                <Spinner />
            )}
        </section>
    );
};

export default ProductCharacteristic;
