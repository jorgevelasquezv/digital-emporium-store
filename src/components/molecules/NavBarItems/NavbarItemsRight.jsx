import React from 'react';
import Link from 'next/link';
import { useLogout } from '@/hooks/useLogout';

export const NavbarItemsRight = () => {
    const {isAutenticated, pathname, handleLogout} = useLogout();

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
