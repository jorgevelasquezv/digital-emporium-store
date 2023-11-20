'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FormSignin } from '@/components/organisms/FormSignin/FormSignin';
import { useLoadSession } from '@/hooks/useLoadSession';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from '../GlobalRedux/store';

const Signin = () => {
    useLoadSession();
    const { isAutenticated } = useSelector((state) => state.users);
    const router = useRouter();

    if (isAutenticated) {
        router.replace('/');
        return;
    }
    return (
        <PersistGate loading={null} persistor={persistor}>
            <FormSignin />;
        </PersistGate>
    );
};

export default Signin;
