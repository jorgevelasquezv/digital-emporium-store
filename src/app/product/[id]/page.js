'use client';

import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Swal from 'sweetalert2';

import { ButtonsMinusPlus } from '@/components/molecules/ButtonsMinusPlus/ButtonsMinusPlus';
import { setUserCar } from '../../GlobalRedux/features/userSlice';
import { getProductById } from '@/actions/productsActions';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Spinner } from '@/components/atoms/Spinner/Spinner';
import { persistor } from '@/app/GlobalRedux/store';
import { ButtonCart } from '@/components/atoms/ButtonCart/ButtonCart';

const ProductTest = ({ params }) => {
    const { id } = params;
    const dispatch = useDispatch();

    const { isAutenticated, userCar } = useSelector((state) => state.users);

    const [product, setProduct] = useState({
        name: '',
        url: '',
        manufacturer: '',
        modelNumber: '',
        description: '',
        category: '',
        stock: '',
        price: '',
    });
    const [quantity, setQuantity] = useState(1);

    const router = useRouter();
    const {
        name,
        url,
        manufacturer,
        modelNumber,
        description,
        category,
        stock,
        price,
    } = product;

    const handleButtonAddCart = () => {
        if (!isAutenticated) {
            router.replace('/signin');
            return;
        }

        const quantityFound = userCar[id]?.quantity || 0;

        const productToAdd = {};

        if (stock >= quantityFound + quantity) {
            productToAdd[id] = {
                ...product,
                quantity: quantityFound + quantity,
            };
        } else {
            productToAdd[id] = {
                ...product,
                quantity: stock,
            };
        }

        const carProducts = { ...userCar, ...productToAdd };

        dispatch(setUserCar({ ...carProducts }));

        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Product added to your shopping cart',
            showConfirmButton: true,
            timer: 3000,
        });
    };

    const handleSetQuantity = (e) => {
        const { id } = e.target;
        console.log({ ...product, quantity });
        id === 'plus' && quantity < stock && setQuantity(quantity + 1);
        id === 'minus' && quantity > 1 && setQuantity(quantity - 1);
    };

    const findProduct = async () => {
        await getProductById(Number(id)).then((prod) => {
            setProduct(prod);
        });
    };

    useEffect(() => {
        findProduct();
    }, []);
    return (
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                        <div className="lg:col-span-3 lg:row-end-1">
                            <div className="lg:flex lg:items-start">
                                <div className="lg:order-2 lg:ml-5">
                                    <div className="max-w-xl overflow-hidden rounded-lg">
                                        <img
                                            className="h-full w-full max-w-full object-cover"
                                            src={url}
                                            alt={name}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                            <h2 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                                {name.split(' - ')[1]}
                            </h2>

                            <h2 className="mt-8 text-lg font-semibold text-gray-900">
                                Manufacturer
                            </h2>
                            <div className="mt-3 flex flex-wrap items-center gap-1">
                                <p className="text-gray-600">{manufacturer}</p>
                            </div>
                            <h2 className="mt-8 text-lg font-semibold text-gray-900">
                                Model Number
                            </h2>
                            <div className="mt-3 flex flex-wrap items-center gap-1">
                                <p className="text-gray-600">{modelNumber}</p>
                            </div>
                            <h2 className="mt-8 text-lg font-semibold text-gray-900">
                                Category
                            </h2>
                            <div className="mt-3 flex flex-wrap items-center gap-1">
                                <p className="text-gray-600">{category}</p>
                            </div>
                            <h2 className="mt-8 text-lg font-semibold text-gray-900">
                                Stock
                            </h2>
                            <div className="mt-3 flex flex-wrap items-center gap-1">
                                <p className="text-gray-600">{stock} Units</p>
                            </div>
                            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t pt-8 sm:flex-row sm:space-y-0">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Quantity
                                </h2>
                                <ButtonsMinusPlus
                                    quantity={quantity}
                                    handleSetQuantity={handleSetQuantity}
                                />
                            </div>
                            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                                <div className="flex items-end">
                                    <h2 className="text-3xl font-bold">
                                        ${price}
                                    </h2>
                                </div>
                                <ButtonCart
                                    handleButtonAddCart={handleButtonAddCart}
                                />
                            </div>
                            <ul className="mt-8 space-y-2">
                                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg
                                        className="mr-2 block h-5 w-5 align-middle text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            className
                                        />
                                    </svg>
                                    Free shipping worldwide
                                </li>
                                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg
                                        className="mr-2 block h-5 w-5 align-middle text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                            className
                                        />
                                    </svg>
                                    Cancel Anytime
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-3">
                            <p className="py-4 text-3xl font-bold text-gray-900 ">
                                Overview
                            </p>
                            <div className="flow-root sm:text-2xl">
                                <p className="mt-4">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PersistGate>
    );
};

ProductTest.propTypes = {
    params: PropTypes.object.isRequired,
};

export default ProductTest;
