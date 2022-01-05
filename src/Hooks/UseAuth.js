import { useContext } from "react"
import { AuthContextAPI } from '../Context/AuthProvider';

const useAuthProvider = () => {
    return useContext(AuthContextAPI);
}

export default useAuthProvider;