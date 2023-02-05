import { toast } from "react-toastify"
import api from "."
import { IClient } from "../interfaces"


export interface RegisterData {
    name: string    
    tel_number: string
    email: string
    password: string
}

export const handleRegister = async (reqData: RegisterData) => {
    try {
        await api.post<IClient>("/client", reqData)
        toast.success("Conta criada com sucesso")
        return true
    }catch(error: any){
        if(error?.response?.status === 403){  
            toast.warn(error.response.message)
        }else{
            console.log("BASE_URL", process.env.REACT_APP_API_BASE_URL)
            console.error(error)
            toast.error("Parece que algo deu errado😕")
        }
        return false
    }
}