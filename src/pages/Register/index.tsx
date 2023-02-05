import Button from "../../components/Button"
import Form from "../../components/Form"
import Input from "../../components/Input"
import { IRegisterContainer } from "./styles"

const Register = () => {
    return (
        <IRegisterContainer>
            <Form>
            <h1>Conecte-se</h1>
                <Input id="name" type="text" label="Nome Completo" placeholder="Wilson Assunção Mesquita Neto"/>
                <Input id="email" type="email" label="Email" placeholder="example@email.com"/>
                <Input id="password" type="password" label="Senha" placeholder="********"/>
                <Input id="password" type="password" label="Confirmar" placeholder="********"/>
                <Input id="telnumber" type="text" label="Celular"/>
                <Button type="submit" width={100}>Conectar</Button>
                <p>Ja tem conta? volte o login</p>
                <Button type="button" width={100} bgColor="rgba(0, 0, 0, 0.20)">Voltar para o login</Button>
            </Form>
        </IRegisterContainer>
    )
}

export default Register