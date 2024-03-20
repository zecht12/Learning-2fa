import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message:"Masukkan email terlebih dahulu"}),
    password: z.string().min(8, { message: 'Password minimal 8 karakter' }),
})