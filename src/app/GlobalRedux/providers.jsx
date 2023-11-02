'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/GlobalRedux/store';

export const Providers = ({ children }) => {
    return <Provider store={store}> {children}</Provider>;
};
