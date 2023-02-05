import { createContext, ReactNode, useState } from "react"
import { IClient, IContact } from "../interfaces"
import api from "../services"
import { handleLogin, LoginData } from "../services/handleLogin"
import { useNavigate } from "react-router-dom" 
import { handleRegister, RegisterData } from "../services/handleRegister"
import { getContacts } from "../services/getContacts"


interface IAuthContext {
    client: IClient | null
    loginFn: (data: LoginData) => void
    registerFn: (data: RegisterData) => void
    addContact: (data: IContact) => void //change IContact to IContactCreate
    editContact: (newData: IContact, id: number) => void //change IContact to IContactCreate
    deleteContact: (id: number) => void
    loadContacts: () => void
    contacts: IContact[] | null
}

export const AuthContext = createContext({} as IAuthContext)

interface IAuthProviderProps {
    children: ReactNode
}

const AuthProvider = ({children}: IAuthProviderProps) => {
    const navigate = useNavigate()

    const [client, setClient] = useState<IClient | null>(null)
    const [contacts, setContacts] = useState<IContact[] | never[]>([])

    const loginFn = async (data: LoginData) => {
        const request = await handleLogin(data)

        if (request?.client){
            api.defaults.headers.common['Authorization'] = request?.token;
    
            setClient(request.client)

            navigate("/dashboard")
        }

    }

    const registerFn = async (data: RegisterData) => {
        const request = await handleRegister(data)

        if(request) navigate("/login")
    }

    const loadContacts = async () => {
        const newContacts = await getContacts()

        if (newContacts) setContacts(newContacts)
    }

    const addContact = () => {

    }

    const editContact = () => {

    }

    const deleteContact = () => {

    }


    return(
        <AuthContext.Provider value={{client, loginFn, registerFn, addContact, editContact, deleteContact, loadContacts, contacts}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider