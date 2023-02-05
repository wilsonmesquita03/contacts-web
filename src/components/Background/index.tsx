import { ReactNode } from "react"
import { BackgroundContainer } from "./styles"

interface IBackgroundProps {
    children: ReactNode
    color: string
}

const Background = ({children, color}: IBackgroundProps) => {
    return (
        <BackgroundContainer color={color}>
            {children}
        </BackgroundContainer>
    )
}

export default Background