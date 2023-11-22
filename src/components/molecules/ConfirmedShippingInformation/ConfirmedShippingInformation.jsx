import { KeepShopping } from '@/components/atoms/KeepShopping/KeepShopping';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const ConfirmedShippingInformation = () => {
    const [paymentMethods, setPaymentMethods] = useState({
        payPal: true,
        pse: false,
        creditCard: false,
    });

    const { payPal, pse, creditCard } = paymentMethods;
    const { userInformation } = useSelector((state) => state.users);

    const { firstName, lastName, country, address, city, province, zipPostal } =
        userInformation;

    const payPalImage =
        'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg';

    const pseImage = 'https://www.pse.com.co/image/layout_icon?img_id=1202326';

    const creditCardIamge =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThGG-7Ohohn2gZ3LVNk-0uhjOEg29k-dTkg&usqp=CAU';

    const handleChangePaymentMethod = (e) => {
        const name = e.target.name;
        const value = paymentMethods[name];
        setPaymentMethods({
            ...{
                payPal: false,
                pse: false,
                creditCard: false,
            },
            [name]: !value,
        });
    };

    const handlePaymentMethod = () => {
        const activePaymentMethod = Object.entries(paymentMethods)
            .filter(([_, value]) => value)
            .map(([item]) => item);
        
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: `The payment functionality by ${activePaymentMethod} will soon be enabled`,
            showConfirmButton: true,
            timer: 5000,
        });
    };

    return (
        <>
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

            <div className="flex items-center justify-center mt-6 space-y-3 border-t border-b py-8">
                <KeepShopping />
            </div>
            
            <div className="space-y-3 border-t border-b py-8 flex justify-evenly">
                <div className="my-1 flex items-center justify-center">
                    <label className="">
                        <input
                            type="radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-1"
                            name="payPal"
                            // value={'name'}
                            checked={payPal}
                            onChange={handleChangePaymentMethod}
                        />
                        <img
                            className="h-8 max-w-full rounded-lg mt-2"
                            src={payPalImage}
                            alt={'payPal'}
                        />
                    </label>
                </div>

                <div className="my-1 flex items-center justify-center">
                    <label className="">
                        <input
                            type="radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-1"
                            name="pse"
                            // value={'name'}
                            checked={pse}
                            onChange={handleChangePaymentMethod}
                        />
                        <img
                            className="h-12 max-w-full rounded-lg"
                            src={pseImage}
                            alt={'pse'}
                        />
                    </label>
                </div>

                <div className="my-1 flex items-center justify-center">
                    <label className="">
                        <input
                            type="radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-1"
                            name="creditCard"
                            // value={'name'}
                            checked={creditCard}
                            onChange={handleChangePaymentMethod}
                        />
                        <img
                            className="h-12 max-w-full rounded-lg mt-1"
                            src={creditCardIamge}
                            alt={'creditCard'}
                        />
                    </label>
                </div>
            </div>
            <button
                type="button"
                className="group inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-800"
                onClick={handlePaymentMethod}
            >
                Make Payment
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
        </>
    );
};
