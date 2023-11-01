import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarItemsRight = ({ items }) => {
    const pathname = usePathname();
    const classNameActive =
        'text-white hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium';
    const classNameInactive =
        'text-gray-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium';
    return (
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {items.map(({ name, url }) => (
                        <Link
                            href={url}
                            className={
                                url === pathname
                                    ? classNameActive
                                    : classNameInactive
                            }
                            key={name + '-' + url}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
