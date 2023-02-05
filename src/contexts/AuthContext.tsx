import { createContext, ReactNode, useState } from "react"
import { IClient } from "../interfaces"
import api from "../services"
import { handleLogin, LoginData } from "../services/handleLogin"
import { useNavigate } from "react-router-dom" 


interface IAuthContext {
    client: IClient | null
    loginFn: (data: LoginData) => void
}

export const AuthContext = createContext({} as IAuthContext)

interface IAuthProviderProps {
    children: ReactNode
}

const AuthProvider = ({children}: IAuthProviderProps) => {
    const navigate = useNavigate()

    const [client, setClient] = useState<IClient | null>(null)

    const loginFn = async (data: LoginData) => {
        const request = await handleLogin(data)

        if (request?.client){
            api.defaults.headers.common['Authorization'] = request?.token;
    
            setClient(request.client)
    
            console.log(client)

            navigate("/dashboard")
        }

    }


    return(
        <AuthContext.Provider value={{client, loginFn}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider