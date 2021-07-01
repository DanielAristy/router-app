import { createContext, useState} from "react";

//Consumir para acceder a dicho contexto
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //contextValue informacion que se le va a enviar a los demas componentes
    /**
     * Crear un estado para cambiar el valor dinamico del usuario
     * El estado inicial en este momento va a ser null
     * Porque el usuario cuando ingrese en la app no va a estar logeado
    */

    const [user, setUser] = useState(null)

    const contextValue = {
        user,
        login(){
            setUser({id:1, username:"Daniel22"});
        },
        logout(){
            setUser(null);
        },
        isLogged(){
            return !!user;
        }
    }
    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider;