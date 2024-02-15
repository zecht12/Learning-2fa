import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message: "Email diperlukan"}),
    password: z.string().min(1, {message: "Password diperlukan"}),
})
export const RegisterSchema = z.object({
    email: z.string().email({message: "Email wajib diisi"}),
    password: z.string().min(6, {message: "Password minimal 6 karakter"}),
    password: z.string().min(1, {message: "Password minimal 6 karakter"}),
})