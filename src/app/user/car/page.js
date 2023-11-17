'use client';

import { setUserCar } from '@/app/GlobalRedux/features/userSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Car() {
    const dispatch = useDispatch();
    const { isAutenticated, userCar } = useSelector((state) => state.users);
    const router = useRouter();
    const products = Object.values(userCar);

    const subTotalPrice =
        products.length > 0
            ? products
                  .map(({ price, quantity }) => price * quantity)
                  .reduce((acc, curr) => acc + curr)
            : 0;

    const shipping = products.length > 0 ? 8 : 0;

    const totalPrice = products.length > 0 ? subTotalPrice + shipping : 0;

    const handleRemoveProducts = (id) => {
        const carProducts = { ...userCar };
        delete carProducts[id];
        dispatch(setUserCar({ ...carProducts }));
        localStorage.setItem('userCar', JSON.stringify({ ...carProducts }));
    };

    useEffect(() => {
        if (!isAutenticated) {
            router.replace('/signin');
        }
    }, [isAutenticated]);

    return (
        <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Your Cart
                    </h1>
                </div>
                {/* Para menor tamaño max-w-md */}
                <div className="mx-auto mt-8  md:mt-12">
                    <div className="rounded-3xl bg-white shadow-lg">
                        <div className="px-4 py-6 sm:px-8 sm:py-10">
                            <div className="flow-root">
                                <ul className="-my-8">
                                    {products.length > 0 &&
                                        products.map(
                                            ({
                                                category,
                                                description,
                                                id,
                                                manufacturer,
                                                modelNumber,
                                                name,
                                                price,
                                                quantity,
                                                stock,
                                                url,
                                            }) => (
                                                <li
                                                    key={id}
                                                    className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                                                >
                                                    <div className="shrink-0 relative">
                                                        <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                                                            {quantity}
                                                        </span>
                                                        <img
                                                            className="h-24 w-24 max-w-full rounded-lg object-cover"
                                                            src={url}
                                                            alt={id}
                                                        />
                                                    </div>
                                                    <div className="relative flex flex-1 flex-col justify-between">
                                                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                            <div className="pr-8 sm:pr-5">
                                                                <p className="text-base font-semibold text-gray-900">
                                                                    {name}
                                                                </p>
                                                                <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                                                    {
                                                                        modelNumber
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                                                    {`$${
                                                                        price *
                                                                        quantity
                                                                    }`}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                            <button
                                                                type="button"
                                                                className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                                                onClick={() =>
                                                                    handleRemoveProducts(
                                                                        id
                                                                    )
                                                                }
                                                            >
                                                                <svg
                                                                    className="h-5 w-5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                            2
                                                                        }
                                                                        d="M6 18L18 6M6 6l12 12"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                </ul>
                            </div>
                            <div className="mt-6 space-y-3 border-t border-b py-8">
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">Subtotal</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        ${subTotalPrice}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">Shipping</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        ${shipping}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                    Total
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    <span className="text-xs font-normal text-gray-400">
                                        USD
                                    </span>{' '}
                                    {totalPrice}
                                </p>
                            </div>
                            <div className="mt-6 text-center">
                                <button
                                    type="button"
                                    className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                >
                                    Place Order
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
