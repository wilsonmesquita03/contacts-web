import { ButtonContainer } from "./styles"

interface IButtonProps {
    type: "button" | "submit" | "reset" | undefined
    width: number
    children: string
    bgColor?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({type, width, children, bgColor, onClick}: IButtonProps) => {
    return (
        <ButtonContainer type={type} style={{width: `${width}%`, backgroundColor: bgColor || "var(--Color-primary)"}} onClick={(e) => onClick && onClick(e)}>
            {children}
        </ButtonContainer>
    )
}

export default Button