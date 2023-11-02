import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
    setFirabaseAccesToken,
    setFirabaseDataUser,
    setIsAutenticate,
} from '@/app/GlobalRedux/features/userSlice';

export const NavbarItemsRight = () => {
    const isAutenticated = useSelector((state) => state.users.isAutenticated);

    const dispatch = useDispatch();

    const pathname = usePathname();

    const handleLogout = () => {
        dispatch(setIsAutenticate(false));
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
        dispatch(setFirabaseAccesToken(undefined));
        localStorage.removeItem('firabaseAccesToken');
        dispatch(setFirabaseDataUser(undefined));
        localStorage.removeItem('firabaseDataUser');
    };

    const classNameActive =
        'text-white hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium';
    const classNameInactive =
        'text-gray-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium';
    return (
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {!isAutenticated && (
                        <>
                            <Link
                                href="/signin"
                                className={
                                    '/signin' === pathname
                                        ? classNameActive
                                        : classNameInactive
                                }
                            >
                                Singin
                            </Link>
                            <Link
                                href="/register"
                                className={
                                    '/register' === pathname
                                        ? classNameActive
                                        : classNameInactive
                                }
                            >
                                Register
                            </Link>
                        </>
                    )}

                    {isAutenticated && (
                        <button
                            href="#"
                            className={classNameInactive}
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
