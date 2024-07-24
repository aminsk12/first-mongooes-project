
import { z } from "zod";

const loginValidationSchema = z.object({
body: z.object({
    id: z.string({required_error: 'Id is requierd'}),
    password: z.string({required_error: 'Password is requierd'})
})
})






export const AuthValidation ={
    loginValidationSchema
}