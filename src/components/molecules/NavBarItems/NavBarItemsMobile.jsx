import PropTypes from 'prop-types';
import Link from 'next/link';
import { Search } from '../Search/Search';
import { useLogout } from '@/hooks/useLogout';

export const NavBarItemsMobile = ({ items }) => {
    const { isAutenticated, pathname, handleLogout } = useLogout();
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
            {!isAutenticated ? (
                <>
                    <Link
                        href="/signin"
                        className={
                            '/signin' === pathname
                                ? classNameActive
                                : classNameInactive
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
            ) : (
                <button
                    href="#"
                    className={classNameInactive}
                    onClick={handleLogout}
                >
                    Logout
                </button>
            )}
            <Search site={'relative mx-auto text-gray-600 px-3 py-2'} />
        </div>
    );
};

NavBarItemsMobile.propTypes = {
    items: PropTypes.array.isRequired,
};