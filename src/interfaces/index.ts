export interface IClient {
    id: number
    name: string
    email: string
    tel_number: string
    contacts: IContact[]
    created_at: Date
    updated_at: Date
}

export interface IContact {
    id: number
    name: string
    email: string
    tel_number: string
    created_at: string
    updated_at: string
    client: IClient
}