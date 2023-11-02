import { auth, googleAuthProvider } from '@/firebase/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import signIn from '@/firebase/auth/signin';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth';

export const userSlices = createSlice({
    name: 'users',
    initialState: {
        isAutenticated: false,
        firabaseAccesToken: undefined,
        firebaseTokenResponse: undefined,
        firebaseDataUser: undefined,
    },
    reducers: {
        setIsAutenticate: (state, action) => {
            state.isAutenticated = action.payload;
        },
        setFirabaseAccesToken: (state, action) => {
            state.firabaseAccesToken = action.payload;
        },
        setFirebaseTokenResponse: (state, action) => {
            state.firebaseTokenResponse = action.payload;
        },
        setFirabaseDataUser: (state, action) => {
            state.firebaseDataUser = action.payload;
        },
    },
});

export const {
    setIsAutenticate,
    setFirabaseAccesToken,
    setFirebaseTokenResponse,
    setFirabaseDataUser,
} = userSlices.actions;

export default userSlices.reducer;

export const googleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            const { uid, displayName } = user;
            dispatch(login(uid, displayName));
        });
    };
};

// export const emailAndPasswordLogin = (email, password) => {
//     return (dispatch) => {
//         signInWithEmailAndPassword(auth, email, password).then(({ user }) =>
//             dispatch(login(user.uid, user.displayName))
//         );
//     };
// };

export const emailAndPasswordLogin = createAsyncThunk(
    'users/emailAndPasswordLogin',
    async ({ email, password }) => {
        const { result, error } = await signIn(email, password);
        if (error) {
            return { error: error.message };
        }
        const { accessToken, displayName, uid } = result.user;
        return { result: { accessToken, displayName, uid } };
    }
);

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
