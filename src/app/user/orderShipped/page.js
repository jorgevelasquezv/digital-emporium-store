'use client';

import { useSelector } from 'react-redux';

import { Spinner } from '@/components/atoms/Spinner/Spinner';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from '@/app/GlobalRedux/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

    const { isAutenticated, userCar, orders, userInformation } = useSelector(
        (state) => state.users
    );

    const { firstName, lastName, country, address, city, province, zipPostal } =
        userInformation;

    const subTotalPrice =
        orders?.length > 0
            ? orders
                  .map(
                      ({ price, quantity }) =>
                          Math.round(price * quantity * 100) / 100
                  )
                  .reduce((acc, curr) => acc + curr)
            : 0;

    const shipping = orders?.length > 0 ? 8 : 0;

    const totalPrice = orders?.length > 0 ? subTotalPrice + shipping : 0;

    useEffect(() => {
        if (!isAutenticated) {
            router.replace('/');
        }
    }, [isAutenticated]);

    return (
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <h1 className="text-7xl font-extrabold text-blue-700">
                        Your Order
                    </h1>
                </div>

                <div className="max-w-6xl mx-auto mt-8  md:mt-12">
                    <div className="rounded-3xl bg-white shadow-lg">
                        <div className="px-4 py-6 sm:px-8 sm:py-10">
                            <div className="flow-root">
                                <ul className="-my-8">
                                    {orders?.length > 0 &&
                                        orders.map(
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
                                                                <p className="text-base font-semibold text-gray-900">
                                                                    ${price}
                                                                </p>
                                                            </div>
                                                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                <p className="shrink-0 w-20 text-base font-extrabold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                                                    {`$${
                                                                        Math.round(
                                                                            price *
                                                                                quantity *
                                                                                100
                                                                        ) / 100
                                                                    }`}
                                                                </p>
                                                            </div>
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
                                    <p className="text-lg font-extrabold text-gray-900">
                                        ${Math.round(subTotalPrice * 100) / 100}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">Shipping</p>
                                    <p className="text-lg font-extrabold text-gray-900">
                                        ${shipping}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                    Total
                                </p>
                                <p className="text-2xl font-extrabold text-gray-900">
                                    <span className="text-xs font-extrabold text-gray-400">
                                        USD
                                    </span>{' '}
                                    {Math.round(totalPrice * 100) / 100}
                                </p>
                            </div>

                            <div className="mt-6 space-y-3 border-t py-8">
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-semibold text-gray-900">
                                        Shipping Information
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">First name</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {firstName}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">Last Name</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {lastName}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">Country</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {country}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">Province</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {province}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">City</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {city}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">Address</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {address}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400">Zip Postal</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {zipPostal}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PersistGate>
    );
};

export default page;
