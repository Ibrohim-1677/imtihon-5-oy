import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children })  =>  {
    const [token, setToken ] = useState(null);

    useEffect(()=>{
        if (token) {
        return localStorage.setItem('token', JSON.stringify(token))
        }
        localStorage.removeItem('token');
    }, [token])

    return(
        <AuthContext.Provider value= {{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

