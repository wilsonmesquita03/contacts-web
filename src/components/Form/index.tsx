import { ReactNode } from "react"
import { FormContainer } from "./styles"

interface IFormProps {
    children: ReactNode
    onSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form = ({children, onSubmit}: IFormProps) => {
    return (
        <FormContainer onSubmit={(e) => onSubmit(e)}>
            {children}
        </FormContainer>
    )
}

export default Form