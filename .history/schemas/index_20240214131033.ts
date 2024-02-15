import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().mi,
})
export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})