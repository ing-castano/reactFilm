import { useState } from "react";
import { AuthContext } from "../context/auth_context";

export const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // login y logout son promesas puesto que normalmente le voy a pedir datos al backend
    const login = async () => {
        setIsLoggedIn(true);
    };

    const logout = async () => {
        setIsLoggedIn(false);
    };

    return(
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn, 
                // isLoggedIn, // cuando tengo este caso puedo poner isLoggedIn, y JS asume que el valor es igual a la clave.
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};