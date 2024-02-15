import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message: "Email diperlukan"}),
    password: z.string().min(1, {message: "Email diperlukan"}),
})
export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})