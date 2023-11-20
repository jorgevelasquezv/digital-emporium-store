'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
    setFirabaseDataUser,
    setUserInformation,
} from '@/app/GlobalRedux/features/userSlice';
import Swal from 'sweetalert2';

export default function Profile() {
    const dispatch = useDispatch();

    const { isAutenticated, firebaseDataUser, userInformation } = useSelector(
        (state) => state.users
    );

    const [userData, setUserData] = useState({
        ...userInformation,
        ...firebaseDataUser,
    });
    const {
        firstName,
        lastName,
        country,
        address,
        city,
        province,
        zipPostal,
        displayName,
        email,
    } = userData;
    const router = useRouter();

    if (!isAutenticated) {
        router.replace('/signin');
        return;
    }

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = () => {
        dispatch(
            setUserInformation({
                firstName,
                lastName,
                country,
                address,
                city,
                province,
                zipPostal,
            })
        );
        dispatch(
            setFirabaseDataUser({ ...firebaseDataUser, displayName, email })
        );
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Information successfully updated',
            showConfirmButton: true,
            timer: 3000,
        });
    };

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <div className="mt-10 md:mt-0 mb-2">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Use a permanent address where you can receive mail.
                    </p>
                </div>
            </div>
            <div className="mt-10 md:mt-0">
                <form action="#" method="POST">
                    <div className="shadow-md overflow-hidden sm:rounded-md border-blue-900 border">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={firstName}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={lastName}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={email}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="displayName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="displayName"
                                        id="displayName"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={displayName}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Country / Region
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        autoComplete="country"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={country}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Street address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        autoComplete="street-address"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={address}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={city}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label
                                        htmlFor="province"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        State / Province
                                    </label>
                                    <input
                                        type="text"
                                        name="province"
                                        id="province"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={province}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label
                                        htmlFor="zipPostal"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        ZIP / Postal
                                    </label>
                                    <input
                                        type="text"
                                        name="zipPostal"
                                        id="zipPostal"
                                        autoComplete="zipPostal"
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        value={zipPostal}
                                        onChange={handleOnchange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={handleSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
