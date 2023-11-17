import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const ShoppingCar = () => {
    const { userCar } = useSelector((state) => state.users);

    const products = Object.values(userCar);
    const totalProducts =
        products.length > 0
            ? products
                  .map(({ quantity }) => quantity)
                  .reduce((acc, curr) => acc + curr)
            : 0;

    return (
        <Link
            href="/user/car"
            type="button"
            className="relative rounded-full bg-blue-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View car</span>
            {totalProducts > 0 && (
                <span className="absolute top-1 left-3 flex h-4 w-4 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                    {totalProducts}
                </span>
            )}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-cart"
            >
                <circle cx={9} cy={21} r={1} />
                <circle cx={20} cy={21} r={1} />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        </Link>
    );
};
