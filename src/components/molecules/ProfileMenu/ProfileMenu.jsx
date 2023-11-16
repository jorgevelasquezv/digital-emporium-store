import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useLogout } from '@/hooks/useLogout';

export const ProfileMenu = ({ handleHiddenMenuUser, buttonMenuUser }) => {
    const { handleLogout } = useLogout();

    const firebaseDataUser = useSelector(
        (state) => state.users.firebaseDataUser
    );

    const avatar = `https://ui-avatars.com/api/?name=${firebaseDataUser.displayName.trim()}`;

    return (
        <div className="relative ml-3">
            <div>
                <button
                    type="button"
                    className="relative flex rounded-full bg-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={handleHiddenMenuUser}
                >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="profile user"
                    />
                </button>
            </div>
            {buttonMenuUser && (
                <div
                    className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                >
                    {/* Active: "bg-gray-100", Not Active: "" */}
                    <Link
                        href="/user/profile"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                        onClick={handleHiddenMenuUser}
                    >
                        Your Profile
                    </Link>
                    <Link
                        href="/user/settings"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                        onClick={handleHiddenMenuUser}
                    >
                        Settings
                    </Link>
                    <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                        onClick={() => {
                            handleLogout();
                            handleHiddenMenuUser();
                        }}
                    >
                        Logout
                    </Link>
                </div>
            )}
        </div>
    );
};

ProfileMenu.propTypes = {
    handleHiddenMenuUser: PropTypes.func.isRequired,
    buttonMenuUser: PropTypes.bool.isRequired,
};
