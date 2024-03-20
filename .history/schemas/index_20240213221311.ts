import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message:"Masukkan email terlebih dahulu"}),
    password: z.string({invalid_type_error:"Masukkan password "})
})