import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config-firebase';

export const firebaseStore = async (uid) => {
    const data = [];
    const response = await getDocs(collection(db, `${uid}/registers/register/`));
    response.forEach((doc) => {
        const registers = doc.data();
        data.push({
            id: doc.id,
            ...registers,
        });
    });
    return data;
};
