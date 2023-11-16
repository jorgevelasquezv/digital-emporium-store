import { auth, signOut } from '../config';

export default async function logout() {
    const response = {};
    try {
        response.result = await signOut(auth);
    } catch (e) {
        response.error = e;
    }

    return response;
}
