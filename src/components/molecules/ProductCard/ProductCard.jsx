import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export const ProductCard = ({ product }) => {
    const isAuthenticated = useSelector((state) => state.users.isAutenticated);

    const router = useRouter();

    const { id, name, description, stock, price, url } = product;

    const handleButtonAddCar = () => {
        if (!isAuthenticated) {
            router.replace('/signin');
        }
    };

    return (
        <article className="bg-white p-4 rounded-lg shadow-md">
            <Link href={`/product/${id}`}>
                <img
                    src={url}
                    alt={name}
                    className="w-full h-64 object-cover"
                />
            </Link>
            <h2 className="text-lg font-semibold mt-2 truncate">{name}</h2>
            <p className="text-gray-500 truncate">{description}</p>
            <Link
                className="text-blue-600 text-lg font-semibold mt-2"
                href={`/product/${id}`}
            >
                See more...
            </Link>
            <p className="text-sm font-semibold mt-2">
                Existencias{' '}
                <span className="text-lg text-gray-500">{stock}</span>
            </p>
            <p className="text-blue-600 font-semibold mt-2">Price ${price}</p>
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
                onClick={handleButtonAddCar}
            >
                Añadir al carrito
            </button>
        </article>
    );
};
