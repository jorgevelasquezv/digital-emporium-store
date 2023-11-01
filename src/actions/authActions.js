import {
    auth,
    signInWithPopup,
    googleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
} from '../firebase/config-firebase';
import { types } from '../types/types';

export const googleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            const { uid, displayName } = user;
            dispatch(login(uid, displayName));
        });
    };
};

export const emailAndPasswordLogin = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password).then(({ user }) =>
            dispatch(login(user.uid, user.displayName))
        );
    };
};

export const register = (email, password, username) => {
    return (dispath) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, {
                    displayName: username,
                });
                dispath(login(user.uid, user.displayName));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        },
    };
};

export const logout = () => {
    return async (dispatch) => {
        await signOut(auth);

        dispatch({
            type: types.logout,
        });
    };
};
