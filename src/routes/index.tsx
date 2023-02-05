import { Route, Routes, Navigate } from "react-router-dom"
import Login from "../pages/Login"  
import Register from "../pages/Register"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
            <Route path="register" element={<Register />} />
        </Routes>
    )
}

export default RoutesMain