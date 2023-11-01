'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { NavBarItemsDesktop } from '../../molecules/NavBarItems/NavBarItemsDesktop';
import { NavBarItemsMobile } from '@/components/molecules/NavBarItems/NavBarItemsMobile';
import { ProfileMenu } from '@/components/molecules/ProfileMenu/ProfileMenu';
import { MobileMenuButton } from '@/components/molecules/MobileMenuButton/MobileMenuButton';
import { ShoppingCar } from '@/components/atoms/ShoppingCar/ShoppingCar';
import { NavbarItemsRight } from '@/components/molecules/NavBarItems/NavbarItemsRight';

export const NavBar = () => {
    const itemsCenter = [
        { name: 'Home', url: '/', public: true },
        { name: 'Products', url: '/products', public: true },
        { name: 'Contact', url: '/contact', public: true },
    ];

    const itemsRight = [
        { name: 'Singin', url: '/signin', public: false },
        { name: 'Register', url: '/register', public: false },
        { name: 'Logout', url: '#', public: false },
    ];

    const [buttonMenuUser, setUserButton] = useState(false);
    const [buttonMobileMenu, setButtonMobileMenu] = useState(false);

    const handleHiddenMenuUser = () => {
        setUserButton(!buttonMenuUser);
    };

    const handleMobileMenu = () => {
        setButtonMobileMenu(!buttonMobileMenu);
    };

    return (
        <nav className="bg-blue-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <MobileMenuButton
                        handleMobileMenu={handleMobileMenu}
                        buttonMobileMenu={buttonMobileMenu}
                    />
                    <NavBarItemsDesktop items={itemsCenter} />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <NavbarItemsRight items={itemsRight} />
                        <ShoppingCar />
                        <ProfileMenu
                            handleHiddenMenuUser={handleHiddenMenuUser}
                            buttonMenuUser={buttonMenuUser}
                        />
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div
                className={buttonMobileMenu ? 'sm:hidden' : 'hidden'}
                id="mobile-menu"
            >
                <NavBarItemsMobile items={itemsCenter} />
            </div>
        </nav>
    );
};
