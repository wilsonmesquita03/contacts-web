import Button from "../../components/Button"
import Form from "../../components/Form"
import Input from "../../components/Input"
import { ILoginContainer } from "./styles"

const Login = () => {
    return (
        <ILoginContainer>
            <Form>
                <h1>Conecte-se</h1>
                <Input id="email" type="email" label="Email" placeholder="example@email.com"/>
                <Input id="password" type="password" label="Senha" placeholder="********"/>
                <Button type="submit" width={100}>Conectar</Button>
                <p>Não tem conta?</p>
                <Button type="button" width={100} bgColor="rgba(0, 0, 0, 0.20)">Registrar</Button>
            </Form>
        </ILoginContainer>
    )
}

export default Login