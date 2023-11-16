import { setFirabaseAccesToken, setFirabaseDataUser, setIsAutenticate } from "@/app/GlobalRedux/features/userSlice";
import logout from "@/firebase/auth/logout";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export const useLogout = () => {
    const isAutenticated = useSelector((state) => state.users.isAutenticated);

    const dispatch = useDispatch();
    const router = useRouter();

    const pathname = usePathname();

    const handleLogout = () => {
        logout()
            .then(() => {
                dispatch(setIsAutenticate(false));
                localStorage.setItem('isAuthenticated', JSON.stringify(false));
                dispatch(setFirabaseAccesToken(undefined));
                localStorage.removeItem('firabaseAccesToken');
                dispatch(setFirabaseDataUser(undefined));
                localStorage.removeItem('firabaseDataUser');
                router.replace('/');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully logged out',
                    showConfirmButton: true,
                    timer: 3000,
                });
            })
            .catch((err) => console.log(err));
    };

    return {isAutenticated, pathname, handleLogout};
}
