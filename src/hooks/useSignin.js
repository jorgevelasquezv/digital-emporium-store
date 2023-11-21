import Swal from 'sweetalert2';

const {
    setIsAutenticate,
    setFirabaseAccesToken,
    setFirabaseDataUser,
    emailAndPasswordLogin,
} = require('@/app/GlobalRedux/features/userSlice');
const { useRouter } = require('next/navigation');
const { useState } = require('react');
const { useDispatch } = require('react-redux');

export const useSignin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

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
                position: 'center',
                icon: 'error',
                title: 'Authentication Error. Email or Password incorrect',
                showConfirmButton: true,
                timer: 5000,
            });
            return;
        }

        const { accessToken, displayName, uid } = result;

        dispatch(setIsAutenticate(true));
        dispatch(setFirabaseAccesToken(accessToken));
        dispatch(setFirabaseDataUser({ email, displayName, uid }));

        // return router.replace('/');
    };
    return [
        handleChangeInputEmail,
        handleCahngeInputPassword,
        handleForm,
        email,
        password,
    ];
};
