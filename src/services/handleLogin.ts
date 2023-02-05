import { toast } from "react-toastify"
import api from "."
import { IClient } from "../interfaces"


export interface LoginData {    
    email: string,
    password: string
}

interface IRequestLogin {
    client: IClient
    token: string
}

export const handleLogin = async (reqData: LoginData) => {
    try {
        const { data } = await api.post<IRequestLogin>("/client/login", reqData)
        toast.success("Logado com sucesso")
        return data
    }catch(error: any){
        if(error?.response?.status === 403){  
            toast.warn("Email e/ou senha inválidos")
        }else{
            console.log("BASE_URL", process.env.REACT_APP_API_BASE_URL)
            console.error(error)
            toast.error("Parece que algo deu errado😕")
        }
    }
}