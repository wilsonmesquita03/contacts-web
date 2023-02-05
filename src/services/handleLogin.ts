import { toast } from "react-toastify"
import api from "."
import { IClient } from "../interfaces"
import AxiosError from "axios"


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
            console.error(error)
            toast.error("Parece que algo deu errado😕")
        }
    }
}