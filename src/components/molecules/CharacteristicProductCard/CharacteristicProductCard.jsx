import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCar } from '@/app/GlobalRedux/features/userSlice';

export const CharacteristicProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const { isAutenticated, userCar } = useSelector((state) => state.users);

    const [quantity, setQuantity] = useState(1);

    const router = useRouter();
    const {
        id,
        name,
        url,
        manufacturer,
        modelNumber,
        description,
        category,
        stock,
        price,
    } = product;

    const handleButtonAddCar = () => {
        if (!isAutenticated) {
            router.replace('/signin');
            return;
        }
        // Pendiente logica para acumumular productos cuando se da agregar uno ya existente entonces se debe aumentar la cantidad
        dispatch(setUserCar({ ...userCar, [id]: { ...product, quantity } }));
        localStorage.setItem(
            'userCar',
            JSON.stringify({ ...userCar, [id]: { ...product, quantity } })
        );
    };

    const handleSetQuantity = (e) => {
        const { id } = e.target;
        id === 'plus' && setQuantity(quantity + 1);
        id === 'minus' && quantity > 1 && setQuantity(quantity - 1);
    };
    return (
        <article className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-3">
                <figure className="w-1/3 h-auto self-center">
                    <img src={url} alt={name} />
                </figure>
            </div>

            <h2 className="text-lg font-semibold mt-2">{name}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="text-sm font-semibold mt-2">
                Manufacturer:{' '}
                <span className="text-lg text-gray-500">{manufacturer}</span>
            </p>
            <p className="text-sm font-semibold mt-2">
                Model:{' '}
                <span className="text-lg text-gray-500">{modelNumber}</span>
            </p>
            <p className="text-sm font-semibold mt-2">
                Category:{' '}
                <span className="text-lg text-gray-500">{category}</span>
            </p>
            <p className="text-sm font-semibold mt-2">
                Stock <span className="text-lg text-gray-500">{stock}</span>
            </p>
            <p className="text-sm font-semibold mt-2">
                Price: <span className="text-lg text-gray-500">${price}</span>
            </p>

            <div className="flex flex-col w-96 ">
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
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 "
                    onClick={handleButtonAddCar}
                >
                    Add to Car
                </button>
            </div>
        </article>
    );
};

CharacteristicProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};
