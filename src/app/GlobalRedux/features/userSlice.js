import { auth, googleAuthProvider } from '@/firebase/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import signIn from '@/firebase/auth/signin';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const userSlices = createSlice({
    name: 'users',
    initialState: {
        isAutenticated: false,
        firabaseAccesToken: undefined,
        firebaseTokenResponse: undefined,
        firebaseDataUser: undefined,
        userInformation: {
            firstName: '',
            lastName: '',
            country: '',
            address: '',
            city: '',
            province: '',
            zipPostal: '',
        },
        userCar: {},
        confirmedShippingInformation: false,
        orders: [],
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
        setUserInformation: (state, action) => {
            state.userInformation = action.payload;
        },
        setUserCar: (state, action) => {
            state.userCar = action.payload;
        },
        setConfirmedShippingInformation: (state, action) => {
            state.confirmedShippingInformation = action.payload;
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
    },
});

export const {
    setIsAutenticate,
    setFirabaseAccesToken,
    setFirebaseTokenResponse,
    setFirabaseDataUser,
    setUserInformation,
    setUserCar,
    setConfirmedShippingInformation,
    setOrders,
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
