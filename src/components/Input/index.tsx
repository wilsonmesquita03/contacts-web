import { IInputController } from "./styles"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

interface IInputProps {
    label: string
    type: string
    id: string
    errorMessage?: string 
    helperText?: string
    placeholder?: string
}

const Input = ({type, id, errorMessage, helperText, label, placeholder}: IInputProps) => {
    const [visibility, setVisibility] = useState(false)

    return (
        <IInputController>
            <div>
                <label htmlFor={id} placeholder={placeholder}>{label}</label>
                <input type={type === "password" ? visibility ? "text" : "password" : type} name={id} id={id} />
                {errorMessage ? <span className="span--error">{errorMessage}</span> : helperText && <span className="span--helper">{helperText}</span>}
                {type === "password" && <button type="button" onClick={() => setVisibility(!visibility)}>{visibility ? <VisibilityIcon/> : <VisibilityOffIcon />}</button>}
            </div>
        </IInputController>
    )
}

export default Input