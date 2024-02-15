import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message:"Masukkan email terlebih dahulu"}),
    password: z.string({invalid_type_error:"Masukkan password  dengan benar"}).min(8, 'Password harus minimal 8 karakter'),
})