'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { auth, createUserWithEmailAndPassword, updateProfile } from '@/firebase/config';

export const FormRegister = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        password2: '',
        username: '',
    });

    const { email, username, password, password2 } = data;
    const handleChange = (e) => {
        const value = e.target.value;
        setData({ ...data, [e.target.name]: value });
    };

    const register = (email, password, username) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, {
                    displayName: username,
                });
                const { uid, displayName, accesToken } = user;

                //Pendiente cargar datos a store con reduxtoolkit para manejo de estado gobal
                console.log({uid, displayName, accesToken});
            })
            .catch((error) => {
                // Manejar error se da por que ya existe el email 
                console.log(error);
            });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (
            email.trim() === '' ||
            !email.trim().includes('@', 1 - email.length) ||
            !email.trim().includes('.', email.indexOf('@') + 1) ||
            email.trim().slice(email.trim().indexOf('.')).length < 3
        ) {
            return;
        }
        if (
            username.trim().length < 2 ||
            password.trim().length < 6 ||
            password.trim() !== password2.trim()
        ) {
            return;
        }
        register(email, password, username);
    };

    return (
        <section className="max-w-[280px] mx-auto">
            <article className="flex flex-col items-center mt-[10vh]">
                <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl mt-8">
                    Create Account
                </h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="email"
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium text-black "
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        name="email"
                    />
                    <input
                        type="text"
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium text-black "
                        placeholder="Username"
                        onChange={handleChange}
                        value={username}
                        name="username"
                    />
                    <input
                        type="password"
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium text-black "
                        placeholder="Password"
                        onChange={handleChange}
                        value={password}
                        name="password"
                    />
                    <input
                        type="password"
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium text-black "
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={password2}
                        name="password2"
                    />
                    <button
                        type="submit"
                        className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
                    >
                        Register
                    </button>
                </form>
                <span className="mb-2 text-gray-900">Or</span>
                <button className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
                    <svg
                        viewBox="0 0 48 48"
                        width={24}
                        height={24}
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                            {' '}
                            <title>Google-color</title>
                            <g
                                id="Icons"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >
                                {' '}
                                <g
                                    id="Color-"
                                    transform="translate(-401.000000, -860.000000)"
                                >
                                    {' '}
                                    <g
                                        id="Google"
                                        transform="translate(401.000000, 860.000000)"
                                    >
                                        {' '}
                                        <path
                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                            id="Fill-1"
                                            fill="#FBBC05"
                                        >
                                            {' '}
                                        </path>{' '}
                                        <path
                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                            id="Fill-2"
                                            fill="#EB4335"
                                        >
                                            {' '}
                                        </path>{' '}
                                        <path
                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                            id="Fill-3"
                                            fill="#34A853"
                                        >
                                            {' '}
                                        </path>{' '}
                                        <path
                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                            id="Fill-4"
                                            fill="#4285F4"
                                        >
                                            {' '}
                                        </path>{' '}
                                    </g>{' '}
                                </g>{' '}
                            </g>{' '}
                        </g>
                    </svg>
                    <span className="text-gray-700 font-medium">
                        Continue with Google
                    </span>
                </button>
                <p className="text-center mt-3 text-[14px]">
                    You have an account?
                    <Link href="/signin" className="text-gray-600">
                        Loging
                    </Link>
                </p>
                <p className="text-center mt-3 text-[14px]">
                    By clicking continue, you agree to our
                    <a href="/terms" className="text-gray-600">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-gray-600">
                        Privacy Policy
                    </a>
                    .
                </p>
            </article>
        </section>
        // <div className="mt-5">
        //     <h1 className="text-gray-700 text-center text-sm font-bold mb-2">
        //         Register
        //     </h1>
        //     <hr />

        //     <div className="max-w-[280px] mx-auto mt-5">
        //         <form
        //             onSubmit={handleRegister}
        //             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        //         >
        //             <div className="mb-3">
        //                 <div className="mb-4">
        //                     <label
        //                         htmlFor="icon_prefix2"
        //                         className="block text-gray-700 text-sm font-bold mb-2"
        //                     >
        //                         Email
        //                     </label>
        //                     <input
        //                         onChange={handleChange}
        //                         value={email}
        //                         id="icon_prefix2"
        //                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                         type="email"
        //                         name="email"
        //                     />
        //                 </div>
        //                 <label
        //                     htmlFor="icon_prefix3"
        //                     className="block text-gray-700 text-sm font-bold mb-2"
        //                 >
        //                     Username
        //                 </label>
        //                 <div className="row mb-3">
        //                     <input
        //                         onChange={handleChange}
        //                         value={username}
        //                         id="icon_prefix3"
        //                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                         type="text"
        //                         name="username"
        //                     />
        //                 </div>

        //                 <label
        //                     htmlFor="icon_prefix4"
        //                     className="block text-gray-700 text-sm font-bold mb-2"
        //                 >
        //                     Password
        //                 </label>
        //                 <div className="row mb-3">
        //                     <input
        //                         onChange={handleChange}
        //                         value={password}
        //                         id="icon_prefix4"
        //                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                         type="password"
        //                         name="password"
        //                     />
        //                 </div>
        //                 <label
        //                     htmlFor="icon_prefix5 "
        //                     className="block text-gray-700 text-sm font-bold mb-2"
        //                 >
        //                     Confirm Password
        //                 </label>
        //                 <div className="row mb-3">
        //                     <input
        //                         onChange={handleChange}
        //                         value={password2}
        //                         id="icon_prefix5"
        //                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                         type="password"
        //                         name="password2"
        //                     />
        //                 </div>
        //             </div>

        //             <button
        //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        //                 type="submit"
        //                 style={{
        //                     backgroundColor: '#4285F4',
        //                     borderColor: '#4285F4',
        //                 }}
        //             >
        //                 Enviar
        //             </button>

        //             <hr />

        //             <Link
        //                 href="/login"
        //                 className="text-gray-700 text-sm font-bold mb-2"
        //             >
        //                 Login to your account
        //             </Link>
        //         </form>
        //     </div>
        // </div>
    );
};
