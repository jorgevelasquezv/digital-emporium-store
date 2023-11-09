'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/GlobalRedux/store';

import PropTypes from 'prop-types';

export const Providers = ({ children }) => {
    return <Provider store={store}> {children}</Provider>;
};

Providers.propTypes = {
    children: PropTypes.array.isRequired
}