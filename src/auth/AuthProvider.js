import { createContext, useState, useEffect} from "react";

//Consumir para acceder a dicho contexto
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //contextValue informacion que se le va a enviar a los demas componentes
    /**
     * Crear un estado para cambiar el valor dinamico del usuario
     * El estado inicial en este momento va a ser null
     * Porque el usuario cuando ingrese en la app no va a estar logeado
    */
    const [user, setUser] = useState(
        //Parse del dato que obtenemos de alla para obtener el objeto
        JSON.parse(localStorage.getItem('user')) || null
    );
    
    /**
     * Se utliza un useEffect cada vez que el usuario este
     * navegando en los demas link no pierda el estado del
     * login y guarde ese dato
    */
    useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            localStorage.removeItem('user');
            console.log(error);
        }
        
    }, [user])

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