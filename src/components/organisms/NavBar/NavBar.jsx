'use client';

import React, { useState } from 'react';

import { NavBarItemsDesktop } from '../../molecules/NavBarItems/NavBarItemsDesktop';
import { NavBarItemsMobile } from '@/components/molecules/NavBarItems/NavBarItemsMobile';
import { ProfileMenu } from '@/components/molecules/ProfileMenu/ProfileMenu';
import { MobileMenuButton } from '@/components/molecules/MobileMenuButton/MobileMenuButton';
import { ShoppingCar } from '@/components/atoms/ShoppingCar/ShoppingCar';
import { NavbarItemsRight } from '@/components/molecules/NavBarItems/NavbarItemsRight';
import { useSelector } from 'react-redux';
import { Search } from '@/components/molecules/Search/Search';
import { AdvanceSearch } from './AdvanceSearch';

export const NavBar = () => {
    const itemsCenter = [
        { name: 'Home', url: '/', public: true },
        { name: 'Contact', url: '/contact', public: true },
    ];

    const isAutenticated = useSelector((state) => state.users.isAutenticated);
    const { search } = useSelector((state) => state.products);

    const [buttonMenuUser, setButtonMenuUser] = useState(false);
    const [buttonMobileMenu, setButtonMobileMenu] = useState(false);

    const handleHiddenMenuUser = () => {
        setButtonMenuUser(!buttonMenuUser);
    };

    const handleMobileMenu = () => {
        setButtonMobileMenu(!buttonMobileMenu);
    };

    return (
        <>
            <nav className="bg-blue-800 sticky top-0 z-10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <MobileMenuButton
                            handleMobileMenu={handleMobileMenu}
                            buttonMobileMenu={buttonMobileMenu}
                        />
                        <NavBarItemsDesktop items={itemsCenter} />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Search />
                            <NavbarItemsRight />
                            {isAutenticated && (
                                <>
                                    <ShoppingCar />
                                    <ProfileMenu
                                        handleHiddenMenuUser={
                                            handleHiddenMenuUser
                                        }
                                        buttonMenuUser={buttonMenuUser}
                                    />
                                </>
                            )}
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
            {search.length > 0 && <AdvanceSearch />}
        </>
    );
};
