import {
    setFirabaseAccesToken,
    setFirabaseDataUser,
    setIsAutenticate,
} from '@/app/GlobalRedux/features/userSlice';
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export const useRegister = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [data, setData] = useState({
        email: '',
        password: '',
        password2: '',
        username: '',
    });

    const { email, username, password, password2 } = data;
    const handleChange = (e) => {
        const value = e.target.value;
        setData({ ...data, [e.target.name]: value });
    };

    const register = (email, password, username) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, {
                    displayName: username,
                });
                const { uid, displayName, accessToken } = user;

                dispatch(setIsAutenticate(true));
                dispatch(setFirabaseAccesToken(accessToken));
                dispatch(setFirabaseDataUser({ email, displayName, uid }));
                return router.replace('/');
            })
            .catch(() => {
                setData({
                    email: '',
                    password: '',
                    password2: '',
                    username: '',
                });
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'There is already an account with this email',
                    showConfirmButton: true,
                    timer: 5000,
                });
            });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (
            email.trim() === '' ||
            !email.trim().includes('@', 1 - email.length) ||
            !email.trim().includes('.', email.indexOf('@') + 1) ||
            email.trim().slice(email.trim().indexOf('.')).length < 3
        ) {
            return;
        }
        if (
            username.trim().length < 2 ||
            password.trim().length < 6 ||
            password.trim() !== password2.trim()
        ) {
            setData({ ...data, password: '', password2: '' });
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password does not match',
                showConfirmButton: true,
                timer: 5000,
            });
            return;
        }
        register(email, password, username);
    };

    return [handleChange, handleRegister, data];
};
