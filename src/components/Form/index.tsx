import { ReactNode } from "react"
import { FormContainer } from "./styles"

interface IFormProps {
    children: ReactNode
}

const Form = ({children}: IFormProps) => {
    return (
        <FormContainer>
            {children}
        </FormContainer>
    )
}

export default Form