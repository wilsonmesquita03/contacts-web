import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória")
})

export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório"),
    tel_number: yup.string().matches(phoneRegExp, 'Número de celular inválido').required("Número de celular obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup.string().oneOf([yup.ref("password")],"As senhas devem ser iguais")
})
