import {z} from 'zod'

export const registerSchema = z.object({
    username : z.string({
        required_error : 'usuario requerido'
    }),
    email: z.string({
        required_error : 'Email requerido'
    }).email({
        message: 'email invalido'
    }),
    password: z.string({
        required_error: "contraseña requerida",

    }).min(6,{
        message:"la contraseña debe tener minio 6 caracteres",
    })
});

export const loginSchema = z.object({
   email: z.string({
    required_error : 'Email no existe',
   }).email({
    message: 'email invalido'
   }),
   password: z.string({
    required_error: "contraseña requerida",
    }).min(6,{
        message:"la contraseña debe tener minio 6 caracteres",
    }),
});