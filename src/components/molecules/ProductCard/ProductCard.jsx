import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setUserCar } from '@/app/GlobalRedux/features/userSlice';

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const { isAutenticated, userCar } = useSelector((state) => state.users);

    const [quantity, setQuantity] = useState(1);

    const router = useRouter();

    const { id, name, description, stock, price, url } = product;

    const handleButtonAddCar = () => {
        if (!isAutenticated) {
            router.replace('/signin');
            return;
        }
        
        const quantityFound = userCar[id]?.quantity || 0;
        
        const productToAdd = { [id]: { ...product, quantity: quantityFound + quantity } };

        const carProducts = { ...userCar, ...productToAdd };

        console.log(carProducts);

        dispatch(setUserCar({...carProducts}));
        
        localStorage.setItem('userCar', JSON.stringify({ ...carProducts }));
    };

    const handleSetQuantity = (e) => {
        const { id } = e.target;
        id === 'plus' && setQuantity(quantity + 1);
        id === 'minus' && quantity > 1 && setQuantity(quantity - 1);
    };

    return (
        <article className="bg-white p-4 rounded-lg shadow-md border">
            <Link
                href={`/product/${id}`}
                className="flex items-center justify-center"
            >
                <img src={url} alt={name} className="h-48 w-auto max-w-full " />
            </Link>
            <h2 className="text-lg font-semibold mt-2 truncate">
                {name.split(' - ')[1]}
            </h2>
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
            <div className="flex flex-col ">
                <div className="inline-flex items-center mt-2">
                    <button
                        className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                        onClick={handleSetQuantity}
                        id="minus"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            id="minus"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                                id="minus"
                            />
                        </svg>
                    </button>
                    <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                        {quantity}
                    </div>
                    <button
                        className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                        onClick={handleSetQuantity}
                        id="plus"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            id="plus"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                                id="plus"
                            />
                        </svg>
                    </button>
                </div>

                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
                    onClick={handleButtonAddCar}
                >
                    Añadir al carrito
                </button>
            </div>
        </article>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};
