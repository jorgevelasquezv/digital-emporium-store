import React from 'react';
import Link from 'next/link';

export const ProfileMenu = ({ handleHiddenMenuUser, buttonMenuUser }) => {
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
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile user"
                    />
                </button>
            </div>
            {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
            <div
                className={
                    buttonMenuUser
                        ? 'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                        : 'hidden'
                }
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
                >
                    Your Profile
                </Link>
                <Link
                    href="/user/settings"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                >
                    Settings
                </Link>
                <Link
                    href="/user/signout"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                >
                    Sign out
                </Link>
            </div>
        </div>
    );
};
