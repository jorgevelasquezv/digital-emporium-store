'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FormSignin } from '@/components/organisms/FormSignin/FormSignin';
import { useLoadSession } from '@/hooks/useLoadSession';

const Signin = () => {
    useLoadSession();
    const { isAutenticated } = useSelector((state) => state.users);
    const router = useRouter();

    if (!isAutenticated) {
        router.replace('/signin');
        return
    }
    return <FormSignin />;
};

export default Signin;
