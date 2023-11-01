import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBarItemsMobile = ({ items }) => {
    const pathname = usePathname();
    const classNameActive =
        'bg-blue-900 text-white hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium';
    const classNameInactive =
        'text-gray-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium';
    return (
        <div className="space-y-1 px-2 pb-3 pt-2">
            {items.map(({ name, url }) => (
                <Link
                    href={url}
                    className={
                        url === pathname ? classNameActive : classNameInactive
                    }
                    key={name + '-' + url}
                >
                    {name}
                </Link>
            ))}
        </div>
    );
};
