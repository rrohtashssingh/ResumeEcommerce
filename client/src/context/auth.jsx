import { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    //defualt axios property
    axios.defaults.headers.common['Authorization'] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parseData = JSON.parse(data);
            setAuth((prevAuth) => ({
                ...prevAuth,
                user: parseData.user,
                token: parseData.token,
            }));
        }
        //eslint disable;
    }, []);
    return <AuthContext.Provider value={[auth, setAuth]}>
        {children}
    </AuthContext.Provider>
}

//custom hook

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider } 