"use client"

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const WithPrivateRoute = ({ children }) => {
    const router = useRouter();
    const isAutenticated = useSelector((state) => state.users.isAutenticated);

    useEffect(() => {        
            if (!isAutenticated) {
                router.push('/login');
            }
    }, []);

    return <>{children}</>;
};

WithPrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default WithPrivateRoute;