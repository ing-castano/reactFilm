import { useState } from "react";
import { AuthContext } from "../context/auth_context";
import { useEffect } from "react";
import { AppStorage } from "../../base/app_store";

export const AUTH_KEY = 'isLoggedIn';


export const AuthProvider = ({children, fallback}) => {

    // el fallback es un componenete que se va a mostrar cuando está cargando
    // para saber cuando se esta cargando algo creo un estado para eso

    const [isLoading, setIsLoading] = useState(true);


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state);  // -> SI LLAMO A UNA PROMESA DENTRO DE UNA FX , ENTONCES ESA FUNCION TAMBIEN SE TRANSFORMA EN UNA PROMESA

    const getLoginState = async () => AppStorage.get(AUTH_KEY);

    const removeLoginState = async () => AppStorage.remove(AUTH_KEY);


    useEffect(() => {

        const initAuth = async () => {

            try {
                // si este chequeo es lento, me muestra el login antes de redirigirme.
                //await delay(4000); // si estoy logueado y entron a /login a mano, me va a mostrar la pagina de login y luego de 4segundos me va a redirigir al home -> esto es inadmisible y hay que manejarlo!. Para ello debo cargar un spinner o un loader
                            
                const loginState = await getLoginState();
                if (!loginState) return;

                setIsLoggedIn(true);

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
            

        };
        initAuth();
    }, []);

    // login y logout son promesas puesto que normalmente le voy a pedir datos al backend
    const login = async ( user, password ) => {
        setIsLoggedIn(true);
        saveLoginState(true);
    };

    const logout = async () => {
        setIsLoggedIn(false);
        removeLoginState();
    };

    if(fallback && isLoading) return fallback; // de esta forma el fallback es opcional

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