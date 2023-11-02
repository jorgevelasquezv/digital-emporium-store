"use client"

// import { onAuthStateChanged } from 'firebase-app/client';
// import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WithPrivateRoute = ({ children }) => {
    const router = useRouter();
    const isAutenticated = useSelector((state) => state.users.isAutenticated);

    useEffect(() => {
        // onAuthStateChanged((user) => {
        //     if (!user) {
        //         router.push('/login');
        //     }
        // });
        
            if (!isAutenticated) {
                router.push('/login');
            }
    }, []);

    return <>{children}</>;
};

export default WithPrivateRoute;
