import { ButtonContainer } from "./styles"

interface IButtonProps {
    type: "button" | "submit" | "reset" | undefined
    width: number
    children: string
    bgColor?: string
}

const Button = ({type, width, children, bgColor}: IButtonProps) => {
    return (
        <ButtonContainer type={type} style={{width: `${width}%`, backgroundColor: bgColor || "var(--Color-primary)"}}>
            {children}
        </ButtonContainer>
    )
}

export default Button