import { toast } from "react-toastify"
import api from "."
import { IContact } from "../interfaces"



export const getContacts = async (): Promise<IContact[] | undefined> => {
    try {

        const { data } = await api.get("/contact")

        return data

    }catch(error: any){
        console.log("BASE_URL", process.env.REACT_APP_API_BASE_URL)
        console.error(error)
        toast.error("Parece que algo deu errado😕, recarregue a pagina")
    }
}