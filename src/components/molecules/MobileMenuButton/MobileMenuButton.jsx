import React from 'react';

export const MobileMenuButton = ({handleMobileMenu, buttonMobileMenu}) => {
    return (
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleMobileMenu}
            >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                <svg
                    className={
                        buttonMobileMenu ? 'hidden h-6 w-6' : 'block h-6 w-6'
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                </svg>
                {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                <svg
                    className={
                        buttonMobileMenu ? 'block h-6 w-6' : 'hidden h-6 w-6'
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
};