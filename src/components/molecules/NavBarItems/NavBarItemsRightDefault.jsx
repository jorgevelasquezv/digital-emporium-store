import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBarItemsRightDefault = () => {
    const pathname = usePathname();
    const classNameActive =
        'text-white hover:bg-blue-700 hover:text-white hidden sm:block rounded-md px-3 py-2 text-base font-medium';
    const classNameInactive =
        'text-gray-300 hover:bg-blue-700 hover:text-white hidden sm:block rounded-md px-3 py-2 text-base font-medium';

    return (
        <>
            <Link
                href="/signin"
                className={
                    '/signin' === pathname ? classNameActive : classNameInactive
                }
            >
                Signin
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
    );
};
