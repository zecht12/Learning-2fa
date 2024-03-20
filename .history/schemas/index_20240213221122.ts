import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message:"Masukkan email terlebih"}),
    password: z.string()
})