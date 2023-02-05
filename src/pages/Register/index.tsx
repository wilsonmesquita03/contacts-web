import { useForm } from "react-hook-form"
import Button from "../../components/Button"
import Form from "../../components/Form"
import Input from "../../components/Input"
import { IRegisterContainer } from "./styles"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../../schemas"

export interface IRegisterInterface {
    name: string
    email: string
    password: string
    confirmPassword: string
    tel_number: string
}

const Register = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }} = useForm<IRegisterInterface>({
        resolver: yupResolver(registerSchema)
    });

    const showData = (data: any) => {
        console.log(data)
    }

    return (
        <IRegisterContainer>
            <Form onSubmit={handleSubmit(showData)}>
            <h1>Conecte-se</h1>
                <Input id="name" type="text" label="Nome Completo" placeholder="Wilson Assunção Mesquita Neto" registerFn={register} errorMessage={errors.name?.message} />
                <Input id="email" type="email" label="Email" placeholder="example@email.com" registerFn={register} errorMessage={errors.email?.message}/>
                <Input id="password" type="password" label="Senha" placeholder="********" registerFn={register} errorMessage={errors.password?.message}/>
                <Input id="confirmPassword" type="password" label="Confirmar" placeholder="********" registerFn={register} errorMessage={errors.confirmPassword?.message}/>
                <Input id="tel_number" type="text" label="Celular" registerFn={register} errorMessage={errors.tel_number?.message} helperText="Coloque o número direto sem traços ou pontos."/>
                <Button type="submit" width={100}>Conectar</Button>
                <p>Ja tem conta? volte o login</p>
                <Button type="button" width={100} bgColor="rgba(0, 0, 0, 0.20)" onClick={(e) => navigate("login")}>Voltar para o login</Button>
            </Form>
        </IRegisterContainer>
    )
}

export default Register