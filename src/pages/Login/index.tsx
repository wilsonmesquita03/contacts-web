import Button from "../../components/Button"
import Form from "../../components/Form"
import Input from "../../components/Input"
import { ILoginContainer } from "./styles"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext"
import { LoginData } from "../../services/handleLogin"
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../../schemas";

export interface ILoginInputs {
    email: string,
    password: string
}

const Login = () => {
    const {loginFn} = useContext(AuthContext)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }} = useForm<ILoginInputs>({
        resolver: yupResolver(loginSchema)
    });

    const handleData = (data: LoginData) => {
        loginFn(data)
    }

    return (
        <ILoginContainer>
            <Form onSubmit={handleSubmit(handleData)}>
                <h1>Conecte-se</h1>
                <Input id="email" type="email" label="Email" placeholder="example@email.com" registerFn={register} errorMessage={errors.email?.message} />
                <Input id="password" type="password" label="Senha" placeholder="********" registerFn={register} errorMessage={errors.password?.message}/>
                <Button type="submit" width={100}>Conectar</Button>
                <p>Não tem conta?</p>
                <Button onClick={(e) => navigate("register")} type="button" width={100} bgColor="rgba(0, 0, 0, 0.20)">Registrar</Button>
            </Form>
        </ILoginContainer>
    )
}

export default Login