import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-blue-800 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 mt-3">
            <span className="text-sm text-white sm:text-center">
                © 2023&nbsp;
                <Link href="https://digitalemporiumstore.com/" className="hover:underline">
                    Digital Emporium Store™
                </Link>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                <li>
                    <Link
                        href="/about"
                        className="mr-4 hover:underline md:mr-6"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/privacy-policy"
                        className="mr-4 hover:underline md:mr-6"
                    >
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </footer>
    );
};
