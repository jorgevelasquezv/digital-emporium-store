import Swal from 'sweetalert2';

const {
    setIsAutenticate,
    setFirabaseAccesToken,
    setFirabaseDataUser,
    emailAndPasswordLogin,
} = require('@/app/GlobalRedux/features/userSlice');
const { useRouter } = require('next/navigation');
const { useState, useEffect } = require('react');
const { useSelector, useDispatch } = require('react-redux');

export const useSignin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const isAuthenticated = useSelector((state) => state.users.isAutenticated);

    const dispatch = useDispatch();

    const handleChangeInputEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleCahngeInputPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleForm = async (event) => {
        event.preventDefault();
        const response = await dispatch(
            emailAndPasswordLogin({ email, password })
        );

        const { result, error } = response.payload;

        if (error) {
            setEmail('');
            setPassword('');
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Authentication Error. Email or Password incorrect',
                showConfirmButton: true,
                timer: 5000,
            });            
            return;
        }

        // else successful
        const { accessToken, displayName, uid } = result;

        dispatch(setIsAutenticate(true));
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        dispatch(setFirabaseAccesToken(accessToken));
        localStorage.setItem('firabaseAccesToken', JSON.stringify(accessToken));
        dispatch(setFirabaseDataUser({ email, displayName, uid }));
        localStorage.setItem(
            'firabaseDataUser',
            JSON.stringify({ email, displayName, uid })
        );

        return router.replace('/');
    };

    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/');
        }
    }, []);
    return [handleChangeInputEmail, handleCahngeInputPassword, handleForm, email, password];
};
